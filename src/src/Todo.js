import React from 'react';

export default props => (

<div >
<div 
    style={{  textDecoration: 
        props.todo.complete ? "line-through" : " "}
      } 
      onClick={props.togglecomplete}
      >
          {props.todo.text}
          </div>
          <button onClick={props.onDelete }>X</button>
          
          </div>);