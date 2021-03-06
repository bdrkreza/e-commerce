import React from "react";
import "./footer.css";
/**
 * @author
 * @function Footer
 **/

export const Footer = (props) => {
  return (
    <div>
      <footer class="page-footer #ffcdd2 red lighten-4 black-text">
        <div class="container-fluid">
          <div class="col x12 s12 m12 l12">
            <div class="container">
              <div class="row">
                <div class="col l6 s12">
                  <h5>Footer Content</h5>
                  <p class="text-lighten-4">
                    You can use rows and columns here to organize your footer
                    content.
                  </p>
                </div>
                <div class="col l4 offset-l2 s12">
                  <h5>Links</h5>
                  <ul>
                    <li>
                      <a class="text-lighten-3" href="#!">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a class="text-lighten-3" href="#!">
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a class="text-lighten-3" href="#!">
                        Link 3
                      </a>
                    </li>
                    <li>
                      <a class="text-lighten-3" href="#!">
                        Link 4
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="footer-copyright">
              <div class="container black-text">
                © 2014 Copyright Text
                <a class=" text-lighten-4 right" href="#!">
                  More Links
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
