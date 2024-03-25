import './App.css';
import Mensaje from './Mensaje.js'
import Description from './Description.js';


const App = () => {
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando' />
      <Mensaje color='yellow' message='en un curso' />
      <Mensaje color='blue' message='de React' />

      <Description />
    </div>
  );
}

export default App; 