import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
 <tr>
      <td>{props.todo.codrol}</td>
      <td>{props.todo.nombrerol}</td>
    <td>
       <Link to={"/edit/"+props.todo._id}>Edit</Link>
    </td>
 </tr>
)


export default class Modificaroles extends Component {
        constructor(props) {
        super(props);
        this.state = {todos: []};
}

componentDidMount() {
    axios.get('http://localhost:4000/api/rol')
    .then(response => {
        this.setState({ todos: response.data });
    })
    .catch(function (error){
        console.log(error);
    })
}

todoList() {
    return this.state.todos.map(function(currentTodo, i){
        return <Todo todo={currentTodo} key={i} />;
    })
}

render() {
    return (
    <div>
        <h3 id='titulo'>Lista de Roles</h3>
            <table className="table table-striped" style={{ marginTop: 20, marginLeft:100}} >
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Nombre</th>
                        <th>Action</th>
                        </tr>
                </thead>
                <tbody>
                    { this.todoList() }
                </tbody>
            </table>
    </div>
    )
}


   
}

 