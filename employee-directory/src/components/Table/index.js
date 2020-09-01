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

  sort(value) {
    const tempEmployees = this.state.employees
    tempEmployees.sort((a, b) => (a[value] > b[value]) ? 1 : ((b[value] > a[value]) ? -1 : 0));
    this.setState({ employees: tempEmployees })
  }

  filter(value) {
    let filterTerm = value.target.value;
    if (filterTerm === ''){
      this.setState({employees: data});
      return ;
    }
    let i = 0;
    const allEmployees = data;
    const tempEmployees = [];
    for(i=0;i<allEmployees.length;i++){
      if (allEmployees[i].first.toLowerCase() === filterTerm.toLowerCase()){
        tempEmployees.push(allEmployees[i])
      }
    }
    console.log(tempEmployees)
    this.setState({ employees: tempEmployees })
  }

  render() {
    const data = this.state.employees;
    return (
      <div>
        <form>
          <label for="search">First name:</label>
          <input type="text" id="search" onChange={(event) => this.filter(event)}></input>
        </form>
          <table>
            <thead>
              <tr>
                <th onClick={() => this.sort('first')}>First</th>
                <th onClick={() => this.sort('last')}>Last</th>
                <th onClick={() => this.sort('email')}>Email</th>
                <th onClick={() => this.sort('phone')}>Phone</th>
                <th onClick={() => this.sort('dep')}>Dep</th>
                <th onClick={() => this.sort('position')}>Position</th>
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
