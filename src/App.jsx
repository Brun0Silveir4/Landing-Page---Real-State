import "./App.scss";
import Header from "./components/header/Header";
import House1 from "./components/house1/House1";
import chat from "../public/images/message.svg";
import email from "../public/images/email.svg"
import pen from "../public/images/pen.svg"
import CardInfo from "./components/card-infos/CardInfo";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="main-content">
        <House1 />
        <div className="informations">
          <div className="title-info">
            <div className="small-title">
              <p>Three steps. Three minutes.</p>
            </div>
            <div className="big-title">
              <p>Everything should be this easy</p>
            </div>
          </div>

          <div className="card-items">
            <CardInfo
              img={chat}
              title={"Answer Questions"}
              text={"Lorem ipsum dolor sit amet consectetur. Adipiscing imperdietbibendum in in vestibulum"}/>
            
            <CardInfo
              img={email}
              title={"Select a quote"}
              text={"Lorem ipsum dolor sit amet consectetur. Adipiscing imperdietbibendum in in vestibulum"}/>

            <CardInfo
              img={pen}
              title={"Get registered"}
              text={"Lorem ipsum dolor sit amet consectetur. Adipiscing imperdietbibendum in in vestibulum"}/>              
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
