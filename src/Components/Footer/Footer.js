import React from "react";
import "../../CSS/footer.css";
import * as Icons from "react-bootstrap-icons";
import resume from "../../Source/PDF/Muhannadh_Resume.pdf";

const Footer = () => {
  return (
    <div className="footerSet">
      <div className="container lineOne">
        <span className="eduTopic d-flex">Contact</span>
        <div className="row">
          <div className="col-md-6 tbl">
            <table cellPadding={5} cellSpacing={5}>
              <tr>
                <td>
                  <Icons.EnvelopeFill className="myIcon" />
                </td>
                <td className="data">mrmuhannadh@gmail.com</td>
              </tr>
              <tr>
                <td>
                  <Icons.Phone className="myIcon" />
                </td>
                <td className="data">
                  +94 7666 49 866 <br />
                  +94 7540 92 934
                </td>
              </tr>
              <tr>
                <td>
                  <Icons.Download className="myIcon" />
                </td>
                <td className="data">
                  <a href={resume} className="resume" target="_blank">
                    Download My Resume
                  </a>
                </td>
              </tr>
            </table>
          </div>
          <div className="col-md-6">
            <div className="d-flex myLine">
              <div className="col">
                <a href="www.linkedin.com/in/razick-muhannadh" target="_blank">
                  <Icons.Linkedin className="myIcon" />
                </a>
              </div>
              <div className="col">
                <a href="https://github.com/mrmuhannadh" target="_blank">
                  <Icons.Github className="myIcon" />
                </a>
              </div>

              <div className="col">
                <a href="https://wa.me/+94766649866" target="_blank">
                  <Icons.Whatsapp className="myIcon" />
                </a>
              </div>
              <div className="col">
                <a href="" target="self">
                  <Icons.Instagram className="myIcon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row fixedFooter ">
        <div className="col-md-12 d-flex align-items-center justify-content-center">
          Muhannadh|Portfolio
        </div>
      </div>
    </div>
  );
};

export default Footer;
