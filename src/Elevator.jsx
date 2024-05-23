import { useState } from 'react';
import { ElevatorForm, PathResult } from './views';
import { validateForm } from './helpers/validateForm';

function Elevator() {

  const [standFloor, setStandFloor] = useState(0);
  const [path, setPath] = useState([]);

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

    // Validate the form and create the path
    const newPath = await validateForm(requests, maintenance, alarm, standFloor, setError);
    // Set the path if exists
    newPath && setPath(newPath);

  }

  return (
    <div className="container p-4">
      <div className="row justify-content-between">
        <div className="col-6">
          {/* Component to render requests form */}
					<ElevatorForm onSubmit={onSubmitForm} standFloor={ standFloor } setStandFloor={ setStandFloor } />
        </div>
        <div className="col-5">
          {/* Component to render path and elevator result */}
          <PathResult path={ path } standFloor={standFloor} setStandFloor={setStandFloor} />
        </div>
      </div>
    </div>
  )
}

export default Elevator;
