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
                  <span className={["fab", "fa-github", "fa-2x", cssClass.Github].join(' ')}> </span>
                  <span className={["fab", "fa-facebook-square", "fa-2x", cssClass.Facebook].join(' ')}> </span>
                  <span className={["fab", "fa-twitter-square", "fa-2x", cssClass.Twitter].join(' ')}> </span>
                  <span className={["fab", "fa-linkedin", "fa-2x", cssClass.Linkedin].join(' ')}> </span>
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
