import { InputCard } from '../components/InputCard';

import { useRequest } from '../hooks/useRequest';
import { Exceptions } from './Exceptions';


/* This component is used to render the form to add requests.
 *
 * onSubmit - Function to submit the form.
 * standFloor1 - The floor where the first elevator is standing.
 * setStandFloor1 - Function to set the stand floor of the first elevator.
 * standFloor2 - The floor where the second elevator is standing.
 * setStandFloor2 - Function to set the stand floor of the second elevator
 * 
 * 
 * Returns the ElevatorForm component.
 */
export const ElevatorForm = ({ onSubmit, standFloor1, setStandFloor1, standFloor2, setStandFloor2 }) => {

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
      <div className='d-flex' style={{ width: '100%' }}>
        <p className='mb-0' style={{ width: '37%' }}>From</p>
        <p className='mb-0' style={{ width: '37%' }}>To</p>
        <p className='mb-0' style={{ width: '12%' }}>Weight</p>
        <div style={{ width: '5%' }}><img src="/assets/disability.png" alt="" width={'20px'}/></div>
      </div>
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

        <div className='row pt-3'>
          <div className='col-5'>
            <label htmlFor="standFloor">Elevator 1 - Stand Floor:</label>
            <input
              type="text"
              className="form-control py-2"
              name="standFloor"
              autoComplete="off"
              value={standFloor1}
              onChange={(e) => setStandFloor1((e.target.value))}
            />
          </div>
          <div className='col-5'>
            <label htmlFor="standFloor">Elevator 2 - Stand Floor:</label>
            <input
              type="text"
              className="form-control py-2"
              name="standFloor"
              autoComplete="off"
              value={standFloor2}
              onChange={(e) => setStandFloor2((e.target.value))}
            />
          </div>
        </div>
        <button className="btn btn-primary mt-3 px-5" onClick={onAddRequest}>
          Add Request
        </button>
      </form>

      

      <Exceptions requests={requests} onSubmit={onSubmit} />
    </div>
  );
};
