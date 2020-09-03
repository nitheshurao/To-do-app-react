import React from 'react';

export default props => (<div 
    style={{  textDecoration: 
        props.todo.complete ? "line-through" : " "}
      } 
      onClick={props.togglecomplete}
      >
          {props.todo.text}
          </div>);