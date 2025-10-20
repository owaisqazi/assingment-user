import React, { Component } from "react";


class Social extends Component {
  render() {

    return (
      <div className="ltn__social-media">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100066920298893"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          {/* <li>
            <a
              href="#index"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
            >
              <i className="fab fa-twitter" />
            </a>
          </li> */}
          <li>
            <a
              href="https://www.linkedin.com/company/assignmenthelps/about/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              title="Linkedin"
            >
              <i className="fab fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/assignmenthelps.official/" title="Instagram">
              <i className="fab fa-instagram" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Social;
