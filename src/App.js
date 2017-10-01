import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const todos = [
	
];


class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			todos
		}
		this.handleAddTodo = this.handleAddTodo.bind(this);
	}
	
	handelRemoveTodo(index){
		this.setState({
			todos:this.state.todos.filter(function(e,i){
				return i !== index;
			})
		})
	}
	
	handleAddTodo(todo){
		this.setState({
			todos:[...this.state.todos,todo]
		})
	}
	
  render() {
    return (
      <div>
        <div className="container pull-left">
		<TodoInput onAddTodo={this.handleAddTodo}></TodoInput>
		<hr/>
		 <h4>Todo Count: <span className="badge">{this.state.todos.length}</span></h4>
		  <ul className="list-group">
		{this.state.todos.map((todo,index)=>
			<li className="list-group-item" key={index}>
			<h4 className="list-group-item-heading"> {todo.todoTitle} <small> <span className="label label-info"> {todo.todoPrior} </span> </small></h4>
			<p><span className="glyphicon glyphicon-user"> </span> {todo.todoRes}</p>
			<p>{todo.todoDesc}</p>
			<button className="btn btn-danger btn-sm" onClick={ this.handelRemoveTodo.bind(this,index)} ><span className="glyphicon glyphicon-trash"></span> Delete </button>
			</li>
		)}
		 </ul>
		</div>
	</div>
    );
  }
}


class TodoInput extends Component {
	constructor(props){
		super(props);
		this.state = {
			todoTitle:'',
			todoRes:'',
			todoDesc:'',
			todoPrior:'Lowest'
		}
		
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	 
	 
	 handleInputChange(event){
		 const target = event.target;
		 const value = target.value;
		 const name = target.name;
		 this.setState({
			 [name]:value
		 })
	 }
	 
	 handleSubmit(event){
		 event.preventDefault();
		 this.props.onAddTodo(this.state);
		 this.setState({
			 todoTitle:'',
			 todoRes:'',
			 todoDesc:'',
			 todoPrior:'Lowest'
		 });
	 }
	 
         render(){
			return(
			<div>
			  <h4>Add New todo</h4>
				<form className="form-horizontal" onSubmit={this.handleSubmit}>
				  <div className="form-group">
					<label htmlFor="inputTodoTitle" className="col-sm-2 control-label">Title</label>
					<div className="col-sm-10">
					 <input name="todoTitle"
							type="text"
							className="form-control"
							id="inputTodoTitle"
							value={this.state.todoTitle}
							onChange={this.handleInputChange}
							placeholder="Title"
					 ></input>
					</div>
				  </div>
				  
				   <div className="form-group">
					<label htmlFor="inputTodoRes" className="col-sm-2 control-label">Responsible</label>
					<div className="col-sm-10">
					 <input name="todoRes"
							type="text"
							className="form-control"
							id="inputTodoRes"
							value={this.state.todoRes}
							onChange={this.handleInputChange}
							placeholder="Resposible"
					 ></input>
					</div>
				  </div>
				  
				  
				   <div className="form-group">
					<label htmlFor="inputTodoDesc" className="col-sm-2 control-label">Description</label>
					<div className="col-sm-10">
					 <textarea name="todoDesc"
							className="form-control"
							row="3"
							id="inputTodoDesc"
							value={this.state.todoDesc}
							onChange={this.handleInputChange}
							placeholder="Description"
					 ></textarea>
					</div>
				  </div>
				  
				  
				   <div className="form-group">
					<label htmlFor="inputTodoPrior" className="col-sm-2 control-label">Priority</label>
					<div className="col-sm-10">
					 <select name="todoPrior"
							className="form-control"
							id="inputTodoPrior"
							value={this.state.todoPrior}
							onChange={this.handleInputChange}
							placeholder="priority"
					 >
					 <option>Lowest</option>
					 <option>Low</option>
					 <option>Medium</option>
					 <option>High</option>
					 <option>Highest</option>
					 </select>
					</div>
				  </div>
				  
				  
				  <div className="form-group">
				  <div className="col-sm-offset-2 col-sm-10">
				  <button type="submit" className="btn btn-success">
				  Add Todo
				  </button>
				  </div>
				  </div>
				  
				  
			    </form>
			</div>
			)
		}
		
	 
}


export default App;
