import './App.css';
import MainContainer from "./MainContainer"

let BASE_URL = "http://localhost:3000/"
let PRESCRIPTIONS_URL = `${BASE_URL + 'prescriptions'}`
let USER_URL = `${BASE_URL + 'users'}`

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <MainContainer PRESCRIPTIONS_URL={PRESCRIPTIONS_URL} USER_URL={USER_URL}/>
    </div>
  );
}

export default App;
