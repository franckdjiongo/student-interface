import React from "react";
import "./introduction.css";

export function Introduction({ myImage }) {
  return (
    <figure class="center-intro">
      <img className="img-intro" src={myImage} alt="me" width="150" />
      <div className="div-intro">
        <blockquote>
          <p className="p-intro">
            “Very passionate about web development. This interface have being
            developed using React and vanilla CSS.”
            <br />
          </p>
          <p>
            <i>Note: The data comes dynamically from a public API.</i>
          </p>
          <p className="p-intro">You can :</p>
          <ol className="ol-intro">
            <li className="margin-bottom">
              Show or hide student's test results
            </li>
            <li className="margin-bottom">Add tags to students</li>
            <li className="margin-bottom">
              Search students by last name or first name.
            </li>
            <li className="margin-bottom">
              Search students by tag ( <em>not currently functioning</em> )
            </li>
          </ol>
        </blockquote>
        <figcaption className="fig-intro">
          <div>Armel Franck Djiongo</div>
          <div>
            <i>Full stack developer</i>
          </div>
        </figcaption>
      </div>
    </figure>
  );
}
