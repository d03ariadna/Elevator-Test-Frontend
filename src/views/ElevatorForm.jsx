import { InputCard } from '../components/InputCard';

import { useRequest } from '../hooks/useRequest';
import { Exceptions } from './Exceptions';


/* This component is used to render the form to add requests.
 *
 * onSubmit - Function to submit the form.
 * standFloor - The floor where the elevator is standing.
 * setStandFloor - Function to set the stand floor.
 * 
 * 
 * Returns the ElevatorForm component.
 */
export const ElevatorForm = ({ onSubmit, standFloor, setStandFloor }) => {

  //Hook Request
  /* This hook is used to manage the requests.
  *
  * requests - Array of requests.
  * onAddRequest - Function to add a request.
  * onRemoveRequest - Function to remove a request.
  * onRequestChange - Function to change a request.
  * 
  *
  * Returns the requests and the functions to manage them.
  */
  const { requests, onAddRequest, onRemoveRequest, onRequestChange } = useRequest();

  return (
    <div>
      <h4>Searching</h4>
      <hr />
      <form aria-label="form">
        
        {
          requests.map((request, index) => (
            <InputCard
              key={index}
              onRequestChange={onRequestChange}
              onRemoveRequest={onRemoveRequest}
              {...request} />
          ))
        
        }
        <label htmlFor="standFloor">Stand Floor:</label>
        <input
          type="text"
          placeholder="Stand Floor"
          className="form-control py-2"
          name="standFloor"
          autoComplete="off"
          value={standFloor}
          onChange={(e) => setStandFloor((e.target.value))}
        />
        <button className="btn btn-primary mt-3 px-5" onClick={onAddRequest}>
          Add Request
        </button>
      </form>

      

      <Exceptions requests={requests} onSubmit={onSubmit} />
    </div>
  );
};
