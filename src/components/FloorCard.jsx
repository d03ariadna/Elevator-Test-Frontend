import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

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
		<div key={floor.id} className='row align-items-center md:w-75 mx-auto my-2'>
			<div className="col-2 d-flex justify-content-center align-items-center">
				{
					floor.id === activeElevator ?
						<FontAwesomeIcon icon={ faCircle } className='text-primary fs-3' />
						:
						null
				}
			</div>
			<div className='col-10'>
				<div className={ `alert ${ floor.id === activeElevator  ? 'alert-primary' : 'alert-secondary' } mb-0 py-2` }>
					Floor {floor.id}
				</div>
			</div>
		</div>
  )
}
