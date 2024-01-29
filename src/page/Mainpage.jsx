import { React, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./mainpage.css";
import Title from "../component/Title";
import challenge from "../Img/Icons/challenge.png";
import exploration from "../Img/Icons/exploration.png";
import entyusiasm from "../Img/Icons/entyusiasm.png";
import combination from "../Img/Icons/combination.png";
import IntroList from "../component/Card/IntroList";
import Button from "../component/Button/Button";
import Header from "../component/Header/Header";
import Section from "../component/Section/Section";
import Carousel from "../component/Carousel/Carousel";
import SixCarousel from "../component/Carousel/Sixcarousel";
import MoreCards from "../component/Card/MoreCards";
import Footer from "../component/Footer/Footer";

export default function Mainpage() {
  const Identity = [
    {
      Symbol: exploration,
      title: "Exploration",
      information: "사람을 탐구하고 새로운 경험을 만들어 나갑니다. ",
    },
    {
      Symbol: entyusiasm,
      title: "Enthusiasm",
      information: "열정적인 MIXER 들과 함께합니다.",
    },
    {
      Symbol: challenge,
      title: "Challenge",
      information: "실패와 도전으로 디자인의 경계를 넓혀 나갑니다. ",
    },
    {
      Symbol: combination,
      title: "Combination",
      information: "기술과 디자인의 결합을 통해서 혁신적 경험을 만들어냅니다.",
    },
  ];

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const nav = useNavigate();

  const myRef = useRef(null);

  //버튼을 누르면 스크롤이 이동될 수 있도록 제작중
  const scrollToTarget = () => {
    if (myRef.current) {
      var headerOffset = 180;
      const elementPosition = myRef.current.getBoundingClientRect().top;
      const offestPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offestPosition, behavior: 'smooth' });
    }
  }

  
  return (
    <div className="PageWrapper">
      <div className="mainContainer">
        <div className="textContainer">
          <div className="hero">
            <div className="title">
              <h1>MIX LAB</h1><h2>,Interactive media : EH</h2>
            </div>
            <p>
              우리는 디자인(Design)과 구현(Making)을 통해 인터랙티브 미디어에
              의한 사용자 경험을 연구합니다.
              <br />
              한국공학대학교 디자인공학부의 인터랙티브 미디어 Engineering House,
              MIX LAB <br />” Make Intelligent eXperience ”
            </p>
          </div>
          <Button onClick={scrollToTarget} title={'more view'} />
        </div>
        <div className="gradient"></div>
        <div className="mainbanner"></div>
      </div>
      <div className="PageContainer">
        <Section
          ref={myRef}
          className={"identity"}
          subText={"MIX Lab`s Identity"}
          h2={"MIX LAB 추진방향"}
          information={[
            "MIX LAB의 아이덴티티는 탐구와 열정, 도전, 결합으로 ",
            <br />,
            " 총 4가지로 구성되어 있습니다.",
          ]}
          align={"center"}
          type={"center"}
          children={<IntroList data={Identity}></IntroList>}
        />

        <Section
          className={"works"}
          subText={"Our Works"}
          h2={"MIX LAB의 작품"}
          type={"right"}
          align={"left"}
          // align={"center"}
          // alignItems={"center"}
          information={[
            "MIX LAB에서 진행된 MIXER들의 프로젝트 작품들을 ",
            <br />,
            "볼 수 있습니다.",
          ]}
          width={"408px"}
          onClick={function () {
            nav("/project?scrollToTarget=true")
          }}
          buttonText={"프로젝트 보기"}
          children={<Carousel />}
        />
        {/* 버튼으로 이동했을때, 스크롤이 될 수 있도록 url에 쿼리문자열 적용*/}

        <Section
          className={"recentnews"}
          subText={"RecentNews"}
          h2={"MIX LAB의 최근 소식"}
          information={[
            "MIXER들의 내외부 활동 및 MIX LAB에서",
            <br />,
            "진행된 연구관련 새로운 소식입니다.",
          ]}
          align={"center"}
          type={"center"}
          children={<SixCarousel />}
        />

        <Section
          className={"information"}
          subText={"More Information"}
          h2={"MIX LAB 더 알아보기"}
          information={["MIX LAB의 구성원과 지원 방법, F&Q입니다."]}
          align={"center"}
          type={"center"}
          children={<MoreCards 
            onClick_people={function () {
              nav("/people?focusToPeople=true")
            }}
            onClick_apply={function () {
              nav("/intro?focusToApply=true")
            }}
            onClick_qna={function () {
              nav("/intro?focusToFnq=true")
            }}/>}
        />
      </div>
    </div>
  );
}
