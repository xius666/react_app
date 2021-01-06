import './App.css';
import requests from './requests';
import Row from './Row';

function App() {

  return (
    <div className="App">
      <Row title="Netflix Original" fetchUrl={requests.fetchOriginal}/>   
    </div>
  );
}

export default App;
