import React from 'react'

/* This component is used to manage the elevator info.
  *
  * state - The state of the elevator. (floor in which it is standing, moving, etc.)
  * direction - The direction of the elevator. (up, down, standing)
  * floor - The floor of the elevator. (0 to 7)
  * doors - The doors of the elevator. (opened, closed)
  * 
  *
  * Returns the ElevatorInfo component.
  */


export const ElevatorInfo = ({ state, direction, floor, doors }) => {
  return (
		<div className="alert alert-secondary animate__animated animate__fadeIn">
			<span className='fst-italic fw-bold'>Elevator state:</span> {state} {direction} floor {floor} - Doors {doors}
		</div>
  )
}
