import { useState } from 'react';
import { ElevatorForm, PathResult } from './views';
import { validateForm } from './helpers/validateForm';

function Elevator() {

  const [standFloor1, setStandFloor1] = useState(0);
  const [standFloor2, setStandFloor2] = useState(1);
  const [path, setPath] = useState([[],[]]);

  // Function to validate the form and create the path

	/* This method is used to submit the form and validate the requests.
	*
	* e - Event object.
	* requests - Array of requests.
	* maintenance - Floors under maintenance.
	* alarm - Floors with alarm.
	* setError - Function to set the error message.
	*
	* return - The path if it exists.
	*/
  const onSubmitForm = async (e, requests, maintenance, alarm, setError) => {
    e.preventDefault()

    // console.log(requests)

    //Validate the form and create the path
    const newPath = await validateForm(requests, maintenance, alarm, [standFloor1, standFloor2], setError);
    // Set the path if exists
    newPath && setPath(newPath);

  }

  return (
    <div className="container-xl py-5">
      <div className="justify-content-between">
        <div className="">
          {/* Component to render requests form */}
					<ElevatorForm onSubmit={onSubmitForm} standFloor1={ standFloor1 } standFloor2={standFloor2} setStandFloor1={ setStandFloor1 } setStandFloor2={ setStandFloor2 } />
        </div>
        <div className="mt-4">
          <div className="row justify-content-between">
            <div className="col-6">
              <h3>Elevator 1</h3>
              <PathResult path={ path[0] } standFloor={standFloor1} setStandFloor={setStandFloor1} />
            </div>
            <div className="col-6">
              <h3>Elevator 2</h3>
              <PathResult path={ path[1] } standFloor={standFloor2} setStandFloor={setStandFloor2} />
            </div>
          </div>
          {/* Component to render path and elevator result */}
          {/* <PathResult path={ path } standFloor={standFloor} setStandFloor={setStandFloor} /> */}
        </div>
      </div>
    </div>
  )
}

export default Elevator;
