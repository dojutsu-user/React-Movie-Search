import React, { Component } from "react";
import cssClass from "./Card.css";

class Card extends Component {
  render() {
    const posterUrl = "http://image.tmdb.org/t/p/w300" + this.props.posterPath;
    return (
      <div className={cssClass.Card}>
        <div
          className={[cssClass.blogCard, cssClass.springFever].join(" ")}
          style={{
            background: `url(${posterUrl}) no-repeat`,
          }}
        >
          <div className={cssClass.titleContent}>
            <h3 className={cssClass.h3}>{this.props.name}</h3>
            <hr className={cssClass.hr} />
            <div className={cssClass.intro}>
              {new Date(this.props.releaseDate).toDateString()}
            </div>
          </div>
          <div className={cssClass.cardInfo}>{this.props.overview}</div>
          <div className={cssClass.utilityInfo}>
            <ul className={cssClass.utilityList}>
              <li className={cssClass.date}>
                <i className="fa fa-language fa-lg"> </i>
                {"  "}
                {this.props.originalLanguage.toUpperCase()}
              </li>
            </ul>
          </div>
          <div className={cssClass.gradientOverlay} />
          <div className={cssClass.colorOverlay} />
        </div>
      </div>
    );
  }
}

export default Card;
