import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Typography } from '@mui/material';
import Product from './components/Product';

function App() {
  return (
    <div className='App'>
      <Form/>
      <Button variant="warning"> Click here </Button>
      ​​​​​​​<Typography variant="h4" gutterBottom>Welcome to React</Typography>
      <Product/>
    </div>
  );
}

export default App;
