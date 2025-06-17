import "./App.scss";
import Header from "./components/header/Header";
import House1 from "./components/house1/House1";
import chat from "../public/images/message.svg";
import email from "../public/images/email.svg";
import pen from "../public/images/pen.svg";
import CardInfo from "./components/card-infos/CardInfo";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { Rating } from "@mui/material";
import project1 from "../public/images/project1.svg";
import project2 from "../public/images/project2.svg";
import project3 from "../public/images/project3.svg";
import RecentProjects from "./components/recent-projects/RecentProjects";

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
              text={
                "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdietbibendum in in vestibulum"
              }
            />

            <CardInfo
              img={email}
              title={"Select a quote"}
              text={
                "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdietbibendum in in vestibulum"
              }
            />

            <CardInfo
              img={pen}
              title={"Get registered"}
              text={
                "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdietbibendum in in vestibulum"
              }
            />
          </div>

          <div className="recents">
            <div className="info-recent">
              <p>Best Project of the Years</p>
            </div>

            <div className="title-recent">
              <p>Our recent projects</p>
              <div className="arrows-group">
                <div className="arrow">
                  <MdOutlineArrowBackIos size={24} cursor={"pointer"} />
                </div>
                <div className="arrow reverse">
                  <MdOutlineArrowBackIos size={24} color="white" />
                </div>
              </div>
            </div>

            <div className="projects-items-group">
              <RecentProjects
                image={project1}
                title={"Sobha Hearland I Villas"}
                description={
                  "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdietbibendum"
                }
                rating={4.6}
                ratingNumber={"4.84"}
              />

              <RecentProjects
                image={project2}
                title={"Sobha Hearland II Villas"}
                description={
                  "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum."
                }
                rating={4.6}
                ratingNumber={"4.83"}
              />

              <RecentProjects
                image={project3}
                title={"Sobha Hearland III Villas"}
                description={
                  "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum."
                }
                rating={4.6}
                ratingNumber={"4.83"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
