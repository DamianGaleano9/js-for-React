 import './App.css';
import Mensaje from './Mensaje.js'

const Description = () => {
  return <p>Esta es la app del curso fullStack</p>
}

const  App = () => {
  return (
    <div className="App">
     <Mensaje message= 'Estamos trabajando'/>
     <Mensaje message= 'en un curso'/>
     <Mensaje message= 'de React'/>

     <Description/>
    </div>
  );
}

export default App; 