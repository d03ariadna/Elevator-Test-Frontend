import { InputCard } from '../components/InputCard';

import { useRequest } from '../hooks/useRequest';
import { Exceptions } from './Exceptions';

/* This component is used to render the form to add requests.
  *
  * onSubmit - Function to submit the form.
  * 
  *
  * Returns the Requests component.
  */

export const Requests = ({onSubmit}) => {

  //Hook Request
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
        <button className="btn btn-primary mt-3 px-5" onClick={onAddRequest}>
            Add Request
        </button>
      </form>

      

      <Exceptions requests={requests} onSubmit={onSubmit}/>
    </div>
  )
}
