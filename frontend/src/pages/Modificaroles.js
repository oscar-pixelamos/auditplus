import React, { Component } from "react";
import axios from 'axios';
import RolTableRow from './RolTableRow';
import { Table } from "reactstrap";

export default class Modificaroles extends Component {
    constructor(props) {
    super(props)
    this.state = {
        Rol: []
    };
}

componentDidMount() {
    axios.get('http://localhost:4000/api/rol')
    .then(res => {
    this.setState({
        Rol: res.data
    });
    })

    .catch((error) => {
    console.log(error);
    })
}
    DataTable() {
        return this.state.Rol.map((res, i) => {
            return <RolTableRow obj={res} key={i} />;
        });
    }

render() {
    return (<div className="table-wrapper">
        <Table striped bordered hover>
    <thead>
    <tr>
        <th>Código</th>
        <th>Descripción</th>
        <th>Action</th>
    </tr>
    </thead>
    <tbody>
        {this.DataTable()}
    </tbody>

    </Table>
        </div>);
}
}