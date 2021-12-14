import Navbar from "./components/Navbar";
import "./App.css";
import Mcol from "./components/MenuCollection";
import ShowOrders from "./components/ShowOrders";
import Credits from "./components/Credits";
import AddItem from "./components/AddItem";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div ><p>Have patience after pressing the add button.</p> Pickout eveythin u want! Don't forget soup!</div>      
      <br />
      <Mcol />
      <AddItem />
      <ShowOrders />
      <Credits />
    </div>
  );
}

export default App;
