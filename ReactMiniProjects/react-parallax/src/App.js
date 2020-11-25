
import './App.css';
import Animated from './Animated';

function App() {
  return (
    <div className="App">
      <div className="balloon-animation">
      <Animated 
      className='flying-cloud'
      src='/cloud.png'
      ratioX='0.26'
      ratioY='0.34'
      />
            <Animated 
      className='flying-cloud'
      src='/cloud.png'
      ratioX='0.1'
      ratioY='0.11'
      />
            <Animated 
      className='flying-cloud'
      src='/cloud.png'
      ratioX='0.13'
      ratioY='0.53'
      />
            <Animated 
      className='flying-cloud'
      src='/cloud.png'
      ratioX='0.41'
      ratioY='0.23'
      />
            <Animated 
      className='flying-cloud'
      src='/cloud.png'
      ratioX='0.36'
      ratioY='0.34'
      />
            <Animated 
      className='flying-balloon'
      src='/balloon.png'
      ratioX='0.07'
      ratioY='0.3'
      />
      </div>
    </div>
  );
}

export default App;
