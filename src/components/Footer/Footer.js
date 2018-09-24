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
              <p>
                Made With <span style={{ color: "red" }}>&#10084;</span> By
                Vaibhav Gupta
                <div>
                  <span className="fa fa-github"> </span>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default footer;
