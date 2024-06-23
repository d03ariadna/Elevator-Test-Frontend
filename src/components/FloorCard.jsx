/* This component is used to manage the floor card.
  *
  * floor - The floor object. (id)
  * activeElevator - The floor in which the elevator is. (0 to 7)
  * 
  *
  * Returns the FloorCard component.
  */
export const FloorCard = ({ floor, activeElevator = 0 }) => {
	
	
  return (
		<div key={floor.id} className=' mx-auto my-2'>
			
			<div className={ `alert ${ floor.id === activeElevator  ? 'alert-primary' : 'alert-secondary' } mb-0 py-2` }>
				Floor {floor.id}
			</div>
		</div>
  )
}
