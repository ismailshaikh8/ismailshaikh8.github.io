import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/ismail804/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: props.theme.secondaryText,
              textDecoration: "underline",
            }}
          >
            Ismail Shaikh
          </a>
        </p>
      </Fade>
    </div>
  );
}
