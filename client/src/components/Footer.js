import React from "react";
import {Link} from "react-router-dom";

export default class Footer extends React.Component {

    render() {
        return (
          <div>
              <div className="footer-container">
                  <div className="text-footer-tag">
                      <span className="text-footer">Vous voulez rester en contact avec nous ? Suivez-nous sur nos réseaux sociaux et abonnez-vous à notre newsletter</span>
                      <div className="clickable">
                          <input className="enter-mail"/>
                          <button className="btn-color-newslet">S'abonner à la newsletter</button>
                      </div>
                      <div className="reseaux-footer">
                          <Link to="/"><img className="facebook" src="/img/Facebook.svg" alt="logo-facebook" /></Link>
                          <Link to="/"><img className="instagram" src="/img/Instagram.svg" alt="logo-instagram" /></Link>
                          <Link to="/"><img className="linkedin" src="/img/Linkedin.svg" alt="logo-linkedin" /></Link>
                          <Link to="/"><img className="youtube" src="/img/Youtube.svg" alt="logo-youtube" /></Link>
                      </div>
                  </div>
              </div>

              <div className="footer-container2">
                  <div className="content-footer">
                      <img className="logo_saline_footer" src="/img/Saline_logo_footer.svg" alt="logo_saline"/>
                  </div>
                  <div className="text-container">
                      <div className="triple-content">
                          <div className="container-left">
                              <p><Link to="/">Masterclasses</Link></p>
                              <p><Link to="/">Offres</Link></p>
                              <p><Link to="/">FAQ</Link></p>
                              <p><Link to="/">Professeurs</Link></p>
                          </div>

                          <div className="container-center">
                              <p><Link to="/">Academies</Link></p>
                              <p><Link to="/">Informations</Link></p>
                              <p><Link to="/">Programme</Link></p>
                              <p><Link to="/">Registration</Link></p>
                          </div>

                          <div className="container-right">
                              <p>Saline Royale Académie</p>
                              <p>Contact</p>
                          </div>
                      </div>

                      <div className="container-text">
                          <p className="text-saline">La Saline Royale Académie a pour but de participer aux formations des meilleures musiciens de demain. Pour ce faire, nous offrons en ligne ou personnellement des à la Saline Royale à Arc et Senans, données par les meilleures maîtres de musique. La Saline Royale Academy est un institut privé</p>
                      </div>
                  </div>
              </div>

              <div className="footer-container3">
                  <div className="text-align">
                      <Link to="/Conditionsgenerales" className="gcu">CGU</Link>
                      <img className="separateur" src="/img/fluent_separator.svg" alt="séparateur"/>
                      <Link to="cgv" className="rgpd">CGV</Link>
                      <img className="separateur" src="/img/fluent_separator.svg" alt="séparateur"/>
                      <Link to="/Politiqueconfidentialite" className="polit-conf">Politique de confidentialité</Link>
                      <img className="separateur" src="/img/fluent_separator.svg" alt="séparateur"/>
                      <Link to="cvp" className="cookies">Cookies et vie privée</Link>
                  </div>
              </div>
          </div>
        );
    }
}
