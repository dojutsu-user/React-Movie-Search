import React from "react";
import cssClass from "./Footer.css";

const footer = () => {
  return (
    <React.Fragment>
      <div className={cssClass.footer}>
        <div className={cssClass.button} />
        <div className={cssClass.container}>
          <div className={cssClass.cont}>
            <div className={cssClass.footer_center}>
              <div className={cssClass.FooterContent}>
                Made With <span style={{ color: "red" }}>&#10084;</span> By
                Vaibhav Gupta
                <div className={cssClass.Social}>
                  <a href="https://github.com/dojutsu-user/React-Movie-Search" rel="noopener noreferrer" target="_blank"><span className={["fab", "fa-github", "fa-2x", cssClass.Github].join(' ')}> </span></a>
                  <a href="https://www.facebook.com/vaib79" rel="noopener noreferrer" target="_blank"><span className={["fab", "fa-facebook-square", "fa-2x", cssClass.Facebook].join(' ')}> </span></a>
                  <a href="https://twitter.com/VaibhavGupta079" rel="noopener noreferrer" target="_blank"><span className={["fab", "fa-twitter-square", "fa-2x", cssClass.Twitter].join(' ')}> </span></a>
                  <a href="https://www.linkedin.com/in/vaibhavgupta79/" rel="noopener noreferrer" target="_blank"><span className={["fab", "fa-linkedin", "fa-2x", cssClass.Linkedin].join(' ')}> </span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default footer;
