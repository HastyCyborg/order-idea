import Navbar from "./components/Navbar";
import "./App.css";
import Mcol from "./components/MenuCollection";

function App() {
  return (
    <div className="App">
      <Navbar />
      Keep refreshing page to see updated values
      <Mcol />
    </div>
  );
}

export default App;
