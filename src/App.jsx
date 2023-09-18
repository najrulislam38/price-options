import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import PriceOptions from "./components/PriceOptions/PriceOptions";
// import DaisyNav from "./components/DaisyNavv/DaisyNav";

function App() {
  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <NavBar></NavBar>
      <h1 className="text-7xl text-center py-2">Price Options</h1>
      <PriceOptions></PriceOptions>
    </>
  );
}

export default App;