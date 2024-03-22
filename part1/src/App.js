 import './App.css';
import Mensaje from './Mensaje.js'

const Description = () => {
  return <p>Esta es la app del curso fullStack</p>
}

const  App = () => {
  return (
    <div className="App">
     <Mensaje/>
     <Mensaje/>
     <Mensaje/>

     <Description/>
    </div>
  );
}

export default App; 