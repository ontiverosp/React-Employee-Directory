import React from "react";


class Row extends React.Component {
    state = {
        employee: this.props.employee
    };

    render() {
        const employee = this.state.employee
        return (
            <tr>
                <td>{employee.first}</td>
                <td>{employee.last}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>{employee.dep}</td>
                <td>{employee.position}</td>
            </tr>
        )
    };
}

export default Row;
