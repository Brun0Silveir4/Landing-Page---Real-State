import "./App.scss";
import Header from "./components/header/Header";
import House1 from "./components/house1/House1";


function App() {
  return (
    <div className="container">
      <Header />
      <div className="main-content">
      <House1 />
      </div>
    </div>
  );
}

export default App;
