import "./App.scss";
import Header from "./components/header/Header";
import HouseCard from "./components/houseCard/HouseCard";
import chat from "../public/images/message.svg";
import email from "../public/images/email.svg";
import pen from "../public/images/pen.svg";
import CardInfo from "./components/card-infos/CardInfo";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { Rating } from "@mui/material";
import project1 from "../public/images/project1.svg";
import project2 from "../public/images/project2.svg";
import project3 from "../public/images/project3.svg";
import statisticImage from "../public/images/statistic.svg";
import house1 from "../public/images/House1.png"
import house2 from "../public/images/house2.svg"
import RecentProjects from "./components/recent-projects/RecentProjects";
import Button from "./components/button/Button";
import MiniCard from "./components/StatisticMiniCard/MiniCard";
import { useState } from "react";

function App() {

  const [form, setForm] = useState({
    property: "",
    newsLetter: ""
  })

  const handleChange = (campo, valor) => {
    setForm((prev) => ({ ...prev, [campo]: valor }));
  };


  return (
    <div className="container">
      <Header />
      <div className="main-content">
        <HouseCard
          heightContainer={550}
          paddingContainer={"0px 10px"}
          textTop
          widthImage={648}
          widthText={479}
          widthLabel={438}
          value={form.property}
          onChange={handleChange}
          inputName="property"
          title={"Manage Your Property"}
          subtitle={"Your will have everything nearby supermarket, buses, station, thecarmen neighborhood, etc"}
          image={house1}
          gap={23}
          gapHeading={20}
          titleSize={67}
          subtitleWidth={435}
        />
        <div className="informations">
          <div className="title-info">
            <div className="small-title">
              <p>Three steps. Three minutes.</p>
            </div>
            <div className="btn-teste"></div>
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

          <div className="statistics">
            <div className="statistics-title">
              <p>We are a global, boutique real estate brokerage</p>
            </div>
            <div className="statistics-content">
              <div className="statistics-infos">
                <div className="infos-heading">
                  <div className="infos-title">
                    <p>The transfer of real estate</p>
                  </div>
                  <div className="infos-subtitle">
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet
                      sit pellentesque sollicitudin. Egestas faucibus lacus diam
                      in senectus consectetur. Mattis elit adipiscing quisque
                      tellus scelerisque vehicula ante nunc. Tellus consequat
                      nisl quis nisl justo.
                    </p>
                  </div>
                </div>
                <div className="infos-btn-group">
                  <Button text={"Book Now!"} dark />
                  <Button text={"Read More"} />
                </div>
                <div className="statistics-group-items">
                  <MiniCard title={"12"} subtitle={"Customers"} />
                  <MiniCard title={"14"} subtitle={"Offices"} />
                  <MiniCard title={"10"} subtitle={"Students"} />
                </div>
              </div>
              <div className="statistics-image">
                <img src={statisticImage} alt="" />
              </div>
            </div>
          </div>

          <div className="newsLetter">
          <HouseCard
          heightContainer={479}
          paddingContainer={"0px 25px"}
          widthImage={522}
          widthText={642}
          widthLabel={464}
          value={form.newsLetter}
          onChange={handleChange}
          inputName="newsLetter"
          title={"Subscribe Our Newsletter"}
          subtitle={"Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. Egestas faucibus lacus diam in senectus consectetur. Mattis elit adipiscing quisque tellus scelerisque vehicula ante nunc."}
          image={house2}
          gap={45}
          gapHeading={20}
          titleSize={50}
          subtitleWidth={526}
        />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
