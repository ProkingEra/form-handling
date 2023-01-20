//import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Typography } from '@mui/material';
import Product from './components/Product';

function App() {
  var employees = [

    { empId: 1234, name: 'John', designation: 'SE'},
    { empId: 1234, name: 'John', designation: 'SEA'},
    { empId: 1234, name: 'John', designation: 'TA'}
    

  ];
  return (
    <div className='App'>
      <Form/>
      <Button variant="warning"> Click here </Button>
      ​​​​​​​<Typography variant="h4" gutterBottom>Welcome to React</Typography>
      <Product/>
      <table>
        <thead>
          <tr>
            <th>EmpId</th>
            <th>Name</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr key = {employee.empId}>
                <td>{employee.empId}</td>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

    </div>
  );
}

export default App;
