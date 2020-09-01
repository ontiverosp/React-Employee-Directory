import React from "react";
import data from "../../db/data.json"
import Row from "../Row"
class Table extends React.Component {
  state = {
    employees: []
  }

  componentDidMount() {
    this.setState({ employees: data })
  }

  render() {
    const data = this.state.employees;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>First</th>
              <th>Last</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Dep</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {data.map((employee, index) => (
              <Row key={index} employee={employee} />
            ))}
          </tbody>
        </table>
      </div>
    )
  };
}

export default Table;
