import React, { useState } from 'react'


/* This component renders the form for floors in maintenance and floors with alarms.
  *
  * requests - Array of requests.
	* onSubmit - Function to submit the form.
  * 
  *
  * Returns the Exceptions component.
  */
export const Exceptions = ({ requests, onSubmit }) => {
    
	const [maintenance, setMaintenance] = useState('');
	const [alarm, setAlarm] = useState('');

	const [error, setError] = useState('');
	
	const handleChange = (e) => {
		const { name, value: newValue } = e.target;

		// Regex pattern to validate the input field
		const regex = /^[0-7]+(-[0-7]*)*$/;

		// Check if the new value matches the regex pattern or if the input field is empty (to allow clearing the input)
		if (regex.test(newValue) || newValue === '') {
			if (name === "maintenance") {
				setMaintenance(newValue);
			} else {
				setAlarm(newValue);
			}
		}
	};

	return (
		<div className='mt-5'>
			<h4>Exceptions</h4>
			<hr />
			<form
				aria-label="form"
				// Call the onSubmit function from the parent component
				onSubmit={
					(e) => onSubmit(e, requests, maintenance, alarm, setError)
				}>
				
				<div className="d-flex gap-4 justify-content-between">
					<div className='w-50'>
						<label htmlFor="maintenance">Maintenance</label>
						<input
							name="maintenance"
							type="text"
							placeholder="Separate floors by -"
							className="form-control py-2"
							autoComplete="off"
							value={maintenance}
							onChange={handleChange}
						/>
					</div>
					<div className='w-50'>
						<label htmlFor="alarm">Alarm</label>
						<input
							name="alarm"
							type="text"
							placeholder="Separate floors by -"
							className="form-control py-2"
							autoComplete="off"
							value={alarm}
							onChange={handleChange}
						/>
					</div>
				</div>
				<p className='mt-2 fst-italic fw-lighter text-danger'>{error}</p>
				<button type='submit' className="btn btn-primary px-5">
					Calculate
				</button>
			</form>
		</div>
	);
};
