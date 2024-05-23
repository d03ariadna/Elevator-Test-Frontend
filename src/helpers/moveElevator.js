/* This function is used to move the elevator to the requested floor.
  *
  * path - Array with the floors to move the elevator.
  * state - Elevator state.
  * setState - Function to set the elevator state.
  * setActiveElevator - Function to set the active elevator.
  * setStandFloor - Function to set the stand floor.
  * 
  *
  * Returns the elevator movement.
  */

export const moveElevator = (path, state, setState, setActiveElevator, setStandFloor) => {

    //Move the elevator to each floor in the path
		path.forEach((floor, index) => {

			//If the actual floor is different from the next floor, move the elevator, if not open doors only
			if (floor !== state.floor) {
				
				// Move the elevator to the next floor
				setTimeout(() => {
						setState(prevState => ({
							...prevState,
							floor: floor,
							state: 'Moving',
							direction:
							floor > prevState.floor ? 'up to' : 'down to',
							doors: 'closed',
						}));
				}, 4000 * index); // Increased to 3000 ms for more visibility
			}

				// Floor reached, wait a moment then open the doors
				setTimeout(() => {
					setState(prevState => ({
							...prevState,
							floor: floor,
							state: 'Standing at',
							direction: '',
							doors: 'opened',
					}));
				
					setActiveElevator(floor);
					
				}, 4000 * index + 2500); // Open doors 1.5 seconds after stopping

		});
		
		
		//Close doors in the final floor
		setTimeout(() => {
			setState(prevState => ({
					...prevState,
					doors: 'closed',
			}));
		}, 4000 * path.length + 1000); 


};