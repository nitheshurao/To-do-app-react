import React from 'react'
import App from './App'
import Todo from './Todo.js'
export default class Todolist extends React.Component {
state = {

  todos:[],
  todoshow:"all"
};
addTodo = (todo) => {
    
this.setState({
    todos: [ todo, ...this.state.todos]
});
};
 togglecomplete = (id) => {
this.setState({
    todos : this.state.todos.map(todo => {
if(todo.id === id){
 return{
     ...todo,
   
     complete: !todo.complete
 }  ; 
}else{
    return todo;
}
    })
 
})
 }

render(){
    let todos=[];
    if(this.state.todoshow === "all"){
todos =this.state.todos;
    }else if ( this.state.todoshow === "active" ) {

        todos =this.state.todoshow.filter(todo => !todo.complete);
    }
    else if ( this.state.todoshow === "complete " ) {

        todos =this.state.todoshow.filter(todo => todo.complete);
    }

    return (
         <div>
             <App onSubmit={this.addTodo}/>
             
              {this.state.todos.map(todo => (
              <Todo key={todo.id} togglecomplete={() => 
                this.togglecomplete(todo.id)
            } 
                  todo={todo}
                  />
                  ))}
                  <div>  todoleft: {
                  this.state.todos.filter(todo => 
                    
        !todo.complete ).length }
                  </div>
                  <div>
                      <button>all</button>
                      <button>active</button>
                      <button>complete</button>
                  </div>
         </div>
    );
}
}