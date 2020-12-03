import React from 'react'

const Projects = (props)=>{
  // console.log(props.match.params)
  return(
    <div>
      <h2>ID: {props.match.params.id}</h2>
    </div>
  )
}


export default Projects