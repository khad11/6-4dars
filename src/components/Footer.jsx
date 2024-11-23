import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-main">
            <div className="footer-links">
              <a href="">
                <img src="./fb.svg" alt="instagram" />
              </a>
              <a href="#">
                <img src="./Group.svg" alt="facebook" />
              </a>
              <a href="#">
                <img src="./insta.svg" alt="twitter" />
              </a>
              <a href="#">
                <img src="./Linkedin.svg" alt="linkidin" />
              </a>
            </div>
            <p>Copyright ©2020 All rights reserved </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
