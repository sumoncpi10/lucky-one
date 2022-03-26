
import './App.css';
import Header from './components/Header/Header';
import Quiestion from './components/Quiestion/Quiestion';
import Shop from './components/Shop/Shop';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Quiestion></Quiestion>
    </div>
  );
}

export default App;
