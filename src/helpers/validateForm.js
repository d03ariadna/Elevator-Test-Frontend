/* This function is used to validate the form and fetch the elevator path from the server.
  *
  * requests - Array of requests.
  * maintenance - Floors under maintenance.
  * alarm - Floors with alarm.
  * floors - Array of initial floor of each elevator.
  * setError - Function to set the error message.
  * 
  *
  * Returns the elevator path.
  */

// Description: This file contains the function that validates the form and fetches the elevator path from the server.
export const validateForm = async (requests, maintenance, alarm, floors, setError) => {
    
	floors = floors.map(floor => parseInt(floor));
	const disabledFloors = maintenance || alarm ? lookDisabledFloors(maintenance, alarm) : [];
	
	const requestsValidated = validateRequests(requests, disabledFloors, setError);
	// console.log('Requests: ', requestsValidated);
	if (!requestsValidated || requestsValidated.length === 0) {
		console.log('Not valid');
		return; // Si la validación falla, termina la función.
	}

    
	
	try {
		const response = await fetch('http://localhost:3000/elevator-path', {
			method: 'POST',
			headers: {
					'Content-Type': 'application/json'
			},
			body: JSON.stringify({ requests: requestsValidated, state: floors })
		});

		if (!response.ok) {
			console.log('There was a network error');
			throw new Error('Network response was not ok');
				
		}

		const { path } = await response.json();
		
		
		//return [1, 2, 3];
		return path;

	} catch (error) {
		console.error('Error fetching elevator path:', error);
		setError(error.message);
		return; // Retorna sin un path si hay un error.
	}
    

}


/* This function is used to validate the requests.
  *
  * requests - Array of requests.
  * disabledFloors - Floors under maintenance or with alarm.
  * setError - Function to set the error message.
  * 
  *
  * Returns the filtered requests.
  */

// Validate the requests
const validateRequests = (requests, disabledFloors, setError) => {

	// Check if there are requests
	console.log(requests)
	for (let request of requests) {
		if (request.origin === '' || request.destination === '') {
			setError('All requests must have an origin and a destination');
			setTimeout(() => {
					setError('');
			}, 2000);
			return;

			// Check if the origin and destination are different floors
		} else if (request.origin === request.destination) {
			setError('Origin and destination must be different');
			setTimeout(() => {
					setError('');
			}, 2000);
			return;

		} else if(request.weight === 0) {
			setError('All requests must have a weight');
			setTimeout(() => {
				setError('');
			}, 2000);
			return;
			
		}
	}

	// Filter the requests that are not in disabled floors
	const filteredRequests = requests.filter(request => {
			return (!disabledFloors.includes(request.origin) && !disabledFloors.includes(request.destination)) 
	});
	if (disabledFloors.length > 0) {
			setError('Disabled floors: ' + disabledFloors.join(' - '))
	} else {
			setError(''); // Clear the error message
	}
	
	return filteredRequests; 

}


/* This function is used to look for disabled floors.
  *
  * maintenance - Floors under maintenance.
  * alarm - Floors with alarm.
  * 
  *
  * Returns the disabled floors.
  */
// Look for disabled floors
const lookDisabledFloors = (maintenance, alarm) => {

	const maintenanceArray = maintenance ? maintenance.split('-') : [];
	const alarmArray = alarm ? alarm.split('-') : [];

	let disabledFloors = maintenanceArray.concat(alarmArray);

	disabledFloors = disabledFloors.map(floor => {
		return parseInt(floor);
	});

	return disabledFloors;
}
