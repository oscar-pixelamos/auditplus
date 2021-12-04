import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from "reactstrap"

export default class RolTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteRol = this.deleteRol.bind(this);
        }
        deleteRol() {
            axios.delete('http://localhost:4000/api/:id' + this.props.obj._id)
        .   then((res) => {
                console.log('Rol successfully deleted!')
            }).catch((error) => {
            console.log(error)
            })
        }

    render() {
    return (
    <tr>
        <td>{this.props.obj.codrol}</td>
        <td>{this.props.obj.nombrerol}</td>
    <td>
        <Link className="edit-link" to={"/editRol/" + this.props.obj._id}>Edit
        </Link>
        <Button onClick={this.deleteRol} size="sm" variant="danger">Eliminar</Button>
    </td>
    </tr>
    );
}
}