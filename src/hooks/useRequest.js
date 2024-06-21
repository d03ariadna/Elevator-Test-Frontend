import { useState } from "react";
import { initRequests } from "../data/initRequests"

/* This component is used to manage the requests.
  *
  * requests - Array of requests.
  * onAddRequest - Function to add a request.
  * onRemoveRequest - Function to remove a request.
  * onRequestChange - Function to change a request.
  * 
  *
  * Returns the requests and the functions to manage them.
  */
export const useRequest = () => {

  const [requests, setRequests] = useState(initRequests);

  /* This function is used to add a request.
  *
  * e - Event.
  * 
  *
  * Sets the requests with a new request. 
  */
  const onAddRequest = (e) => {
    const id = Date.now();

    e.preventDefault();
    setRequests([...requests, { id: id, origin: '', destination: '', weight: '', checked: false}])
  };

  /* This function is used to remove a request.
  *
  * id - The id of the request.
  *   
  *   
  * Sets the requests without the request with the id. 
  */
  const onRemoveRequest = (id) => {
    const newRequests = requests.filter(req => req.id !== id);
    setRequests(newRequests);
  };

  /* This function is used to change a request.
  *
  * req - The request.
  *   
  *   
  * Sets the requests with the updated request. 
  */
  const onRequestChange = (req) => {
    const newRequests = requests.map((request) => {
      if (req.id === request.id) {
        return {
          ...request,
          origin: req.origin,
          destination: req.destination,
          weight: req.weight === '' ? 0 : parseInt(req.weight),
          checked: req.checked
        }
      }
      return request
    })
    setRequests(newRequests)
  };

  return {
    requests,
    onAddRequest,
    onRemoveRequest,
    onRequestChange
  }
};
