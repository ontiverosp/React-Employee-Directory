import React from "react";
import data from "../../db/data.json"
import Row from "../Row"
class Table extends React.Component {
  state = {
    employees: []
  }

  componentDidMount() {
    this.setState({ employees: data })
    console.log(this.state.employees)
  }

  sort(value){
    // console.log(this.state.employees)
    const tempEmployees = this.state.employees
    tempEmployees.sort((a,b) => (a[value] > b[value]) ? 1 : ((b[value] > a[value]) ? -1 : 0));
    this.setState({employees: tempEmployees})
    // console.log(this.state.employees)
  }

  render() {
    const data = this.state.employees;
    console.log(data)
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th onClick={()=>this.sort('first')}>First</th>
              <th onClick={()=>this.sort('last')}>Last</th>
              <th onClick={()=>this.sort('email')}>Email</th>
              <th onClick={()=>this.sort('phone')}>Phone</th>
              <th onClick={()=>this.sort('dep')}>Dep</th>
              <th onClick={()=>this.sort('position')}>Position</th>
            </tr>
          </thead>
          <tbody>
            {data.map((employees, index) => (
              <Row key={index} employee={employees} />
            ))}
          </tbody>
        </table>
      </div>
    )
  };
}

export default Table;
