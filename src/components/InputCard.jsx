import React, { useEffect, useState } from 'react'

/* This component is used to manage the requests.
  *
  * onRequestChange - Function to change a request.
  * onRemoveRequest - Function to remove a request.
  * id - The id of the request. (unique)
  * origin - The origin floor of the request. (0 to 7)
  * destination - The destination floor of the request. (0 to 7)
  * weight - The weight of the request. (Number)
  * checked - If the request is for a person with a disability. (true, false)
  * init - If the request is an initial request. (true, false)
  * 
  *
  * Returns the InputCard component.
  */
export const InputCard = ({ onRequestChange, onRemoveRequest, id, origin, destination, weight, checked, init = false }) => {

  const [originS, setOriginS] = useState(origin);
  const [destinationS, setDestinationS] = useState(destination);
  const [weightS, setWeightS] = useState(weight);
  const [checkedS, setCheckedS] = useState(checked);

  const handleChange = (e) => {
    let newValue = e.target.value;

    // Only numbers from 0 to 7
    if (/^[0-7]$/.test(newValue) || newValue === '') {
      if (newValue !== '') {
        newValue = parseInt(newValue);
      }

      // Set the new value
      if (e.target.placeholder === "Origin Floor") {
        setOriginS(newValue);
      } else {
        setDestinationS(newValue);
      }
    }
    
  }

  const handleWeightChange = (e) => {
    
    const newValue = e.target.value;
    if(/^[0-9]*$/.test(newValue) || newValue === '') {
      setWeightS(newValue);
    }
  }

  const handleBoxChange = (e) => {
    setCheckedS(e.target.checked);
  }

  // Update the request every time the origin or destination changes
  useEffect(() => {
    onRequestChange({ id: id, origin: originS, destination: destinationS, weight: weightS, checked: checkedS});
  }, [originS, destinationS, weightS, checkedS])
  

  return (
    <div className="d-flex justify-content-between align-items-center my-3">
      <div className="col-4">
        <input
          type="text"
          placeholder="Origin Floor"
          className="form-control py-2"
          name="searchText"
          autoComplete="off"
          disabled={init}
          value={origin}
          onChange={handleChange}
        />
      </div>
      <div className="col-4">
        <input
          type="text"
          placeholder="Destination Floor"
          className="form-control py-2"
          name="searchText"
          autoComplete="off"
          disabled={init}
          value={destination}
          onChange={handleChange}
        />
      </div>
      <div className="row col-2">
        <div className="col-9">
          <input
            type="text"
            placeholder="kg"
            className="form-control py-2"
            name="searchText"
            autoComplete="off"
            value={weightS}
            onChange={handleWeightChange}
          />
        </div>
        <div className="col-1">
          <input className="form-check-input" type="checkbox" value={checked} checked={checked} onChange={handleBoxChange} id="flexCheckDefault"/>
        </div>
      </div>
      
      <div className='col-1 d-flex justify-content-end'>
        {
          !init &&
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => onRemoveRequest(id)}>
          </button>
        }
      </div>
    </div>
  );
};
