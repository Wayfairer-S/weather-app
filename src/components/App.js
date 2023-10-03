import '../styles/App.css';
import LocationDetails from './LocationDetails';

function App(props) {
  return (
    <div className="App">
      <LocationDetails city={props.location.city} country={props.location.country} />
    </div>
  );
}



export default App;
