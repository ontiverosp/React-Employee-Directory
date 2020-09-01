import React from "react";

class Table extends React.Component {
  render(){
    return(
    <div>
      <table>
  <tr>
    <th>First</th>
    <th>Last</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Dep</th>
    <th>Position</th>
  </tr>
  <tr>
    <td>Bob</td>
    <td>Lance</td>
    <td>bob@email.com</td>
    <td>1234567890</td>
    <td>Sales</td>
    <td>Sales Manager</td>
  </tr>
</table>
    </div>
    )}; 
}

export default Table;
