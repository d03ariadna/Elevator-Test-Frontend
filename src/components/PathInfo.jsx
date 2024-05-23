import React from 'react'

/* This component is used to manage the path info.
  *
  * path - The path of the elevator. (array of integers)
  * 
  *
  * Returns the PathInfo component.
  */

export const PathInfo = ({path}) => {
  return (
    <div>
       {
				// If there is a path, show it, if not show a message
				path && path.length > 0 ?
					<div className="alert alert-success animate__animated animate__fadeInRight">
						{path.join(' - ')}
					</div>
					:
					<div className="alert alert-primary animate__animated animate__fadeInRight">
						No path available
					</div>
			}   
    </div>
  )
}
