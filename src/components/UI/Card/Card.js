import React, { Component } from "react";
import cssClass from "./Card.css";

class Card extends Component {
  render() {
    return (
      <div className={cssClass.Card}>
        <div
          class={[cssClass.blogCard, cssClass.springFever].join(" ")}
          style={{
            background:
              "url('http://image.tmdb.org/t/p/w300/qNs0HRSEvSKmtcMiVa2O1yWUKCk.jpg') no-repeat"
          }}
        >
          <div class={cssClass.titleContent}>
            <h3 className={cssClass.h3}>Grizzly Man</h3>
            <hr className={cssClass.hr} />
            <div class={cssClass.intro}>
              One man spent the last 13 years of his life crossing them.
            </div>
          </div>
          <div class={cssClass.cardInfo}>
            Werner Herzog's documentary film about the \"Grizzly Man\" Timothy
            Treadwell and what the thirteen summers in a National Park in Alaska
            were like in one man's attempt to protect the grizzly bears. The
            film is full of unique images and a look into the spirit of a man
            who sacrificed himself for nature.
          </div>
          <div class={cssClass.utilityInfo}>
            <ul class={cssClass.utilityList}>
              <li class={cssClass.comments}>
                <span className="fas fa-clock fa-lg"> </span>
                {"  "}
                103 Minutes
              </li>
              <li class={cssClass.date}>
                <i className="fa fa-language fa-lg"> </i>
                {"  "}
                English
              </li>
            </ul>
          </div>
          <div class={cssClass.gradientOverlay} />
          <div class={cssClass.colorOverlay} />
        </div>
      </div>
    );
  }
}

export default Card;
