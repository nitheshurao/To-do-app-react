import React from 'react'
import shortid from 'shortid'
export default class App extends React.Component {
state = {
  text:""
}

handlechange= (event) => {
  this.setState ({
    [event.target.name]: event.target.value
   
  });
  console.log( event.target.name)
}

handlesubmint=  event =>{
  event.preventDefault();
  //submit
  this.props.onSubmit({
    id:shortid.generate(),
    text : this.state.text,
    complete:false
  })
}

  render(){
    return(
      <form onSubmit={this.handlesubmint} >
      <input
      name="text"
      value={this.state.text}
      onChange={this.handlechange}
      placeholder ="todoo" />
      <button onClick={this.handlesubmint}>Add</button></form>
    );
    
      
  }
  
}