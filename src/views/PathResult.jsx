import React, { useEffect, useState } from 'react';
import { floors } from '../data/floors';
import { PathInfo, FloorCard, ElevatorInfo } from '../components';
import { moveElevator } from '../helpers/moveElevator';

/* This component is used to manage the path result.
  *
  * path - The path of the elevator. (array of integers)
	* standFloor - The floor in which the elevator is standing. (0 to 7)
	* setStandFloor - Function to set the floor in which the elevator is standing.
  * 
  *
  * Returns the requests and the functions to manage them.
  */

export const PathResult = ({path, standFloor, setStandFloor}) => {
    
	const [state, setState] = useState(
		{
			floor: parseInt(standFloor),
			state: 'Standing at',
			direction: '',
			doors: 'closed',
		}
	);

	
	//Used for highlighting the active elevator
	const [activeElevator, setActiveElevator] = useState(0);
	
	// Reset the elevator state when the stand floor changes


	useEffect(() => {
		// Reset the elevator state when the stand floor changes
		setState({
			floor: parseInt(standFloor),
			state: 'Standing at',
			direction: '',
			doors: 'closed',
		});

		setActiveElevator(parseInt(standFloor));

		
	}, [standFloor]);


	useEffect(() => {

		// If there is a path, move the elevator
		path.length > 0 && moveElevator(path, state, setState, setActiveElevator, setStandFloor);

	}, [path]);


	return (
		<div>
			<h4>Path</h4>
			<hr />
				
			<PathInfo path={path} />
			
			{/* Show the elevator state */}
			<ElevatorInfo {...state} />
			
			<hr />

			{
				floors.map(floor => (
					
					<FloorCard key={floor.id} floor={floor} activeElevator={activeElevator} />
					
				))
			}

		</div>
	)
}
