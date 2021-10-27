import Cars from "./Route/Cars/Cars";
import { Router } from "@reach/router"
import CarsDetails from './Route/Cars/CarsDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/css/style.css'


function App() {

  return (
    <Router>
      <Cars path="/"/>
      <CarsDetails path="/card-details"/>
    </Router>
    
  );
}

export default App;
