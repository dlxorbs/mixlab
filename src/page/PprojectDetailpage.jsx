import { React, useState, useEffect } from "react";
import "./projectpage.css";
import { useNavigate, useParams } from "react-router-dom";
import Section from "../component/Section/Section";
import IntroList from "../component/Card/IntroList";
import Title from "../component/Title";
import { db, storage } from "../firebase";
import CardList from "../component/Card/CardList";

export default function ProjectDetailpage() {
  const postId = useParams().id;

  const [post, setPost] = useState({
    id: "",
    engtitle: "",
    title: "",
    info: "",
    link1: "",
    link2: "",
    subimg: "",
    mainimg: "",
    thumbnail: "",
  });

  const link1open = () => {
    const url = post.link1;
    window.open(url, "_blank");
  };

  const link2open = () => {
    const url = post.link2;
    window.open(url, "_blank");
  };
  //포스트의 데이터를 생성될때 받아옴
  useEffect(() => {
    db.collection("project_works")
      .doc(postId)
      .get()
      .then((doc) => {
        setPost(doc.data());
      });
  }, []);


  console.log(post);
  return (
    <div className="PageWrapper">
      <div className="PageContainer projectWork">
        <div className="projecttitlecontainer">
          <div className="projectworktitle">
            <h3>{post.title}</h3>
          </div>
          <div className="projectworkengtitle">
            <span>{post.engtitle}</span>
          </div>

          <div className="projectworkname">
            <span>{post.name}</span>
          </div>
        </div>

        <div className="projectimgcontainer">
          <div
            className="porjectimg mainImg"
            style={{
              backgroundImage: `url(${post.mainimg})`,
            }}
          ></div>
          <div
            className="porjectimg subimg"
            style={{
              backgroundImage: `url(${post.subimg})`,
            }}
          ></div>
        </div>

        <div className="projectworkinfo">
          <span>{post.info}</span>
        </div>

        <div className="linkcontainer">
          <div
            className="projectworklink"
            onClick={() => {
              link1open();
            }}
          >
            <span>{post.link1name}</span>
          </div>

          <div
            className="projectworklink"
            onClick={() => {
              link2open();
            }}
          >
            <span>{post.link2name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
