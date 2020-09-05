import React from 'react'
import App from './App'
import Todo from './Todo.js'
export default class Todolist extends React.Component {
    state = {

        todos: [],
        todoshow: "all",
        toggleAllComplete:true
    };
    addTodo = (todo) => {

        this.setState({
            todos: [todo, ...this.state.todos]
        });
    };
    togglecomplete = id  => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,

                        complete: !todo.complete
                    };
                } else {
                    return todo;
                }
            })

        });
    };
     handleDeleteTodo =(id)=> {
         this.setState ({
             todos: this.state.todos.filter(todo => todo.id !== id)
         });
     };


     removeAllTodoThatAreComplete =( )=> {
        this.setState ({
            todos: this.state.todos.filter(todo => !todo.complete)
        });
    };
    updateTodoshow= (s) => {
        this.setState({
        todoshow:s
        })
    };

    render() {
        let todos = [];
        if (this.state.todoshow === 'all') {
            todos = this.state.todos;
        } else if (this.state.todoshow === 'active') {

            todos = this.state.todos.filter(todo => !todo.complete);
        }
        else if (this.state.todoshow === 'complete ') {

            todos = this.state.todos.filter(todo => todo.complete);
        }

        return (
            <div>
                <App onSubmit={this.addTodo} />

                {todos.map(todo => (
                    <Todo key={todo.id} togglecomplete={() => this.togglecomplete(todo.id) }
                    onDelete = {() => this.handleDeleteTodo(todo.id)}
                        todo={todo}
                    />
                ))}
                <div>  todoleft: { this.state.todos.filter(todo => !todo.complete).length}
                </div>
                <div>
                    <button onClick={()=> this.updateTodoshow("all")} >all</button>
                    <button onClick={()=> this.updateTodoshow("active") }>active </button>
                    <button onClick={()=> this.updateTodoshow("complete")} >complete </button>
                </div>
                { this.state.todos.filter(todo => todo.complete).length ? (
<div>
    <button onClick={this.removeAllTodoThatAreComplete}>remove all comple todos</button>
</div> ) :null}
<div>
                <button onClick={() => this.setState({
                    todos: this.state.todos.map( todo => ({
                        ...todo,
                        complete: this.state.toggleAllComplete
                    })),
                    toggleAllComplete: !this.state.toggleAllcomplete
                })}
                
                >Toggle all complete : {`${this.state.toggleAllComplete}`}</button>
</div>
            </div>
        );
    }
}