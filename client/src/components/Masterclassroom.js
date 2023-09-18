import React from "react";
import {Link} from "react-router-dom";
const Masterclassroom = () => {
    return <div>
        <div className="cont-room">
            <p className="typo-masterclassroom">Masterclasses</p>
            <div className="recherche">
                <input className="text-piano recherche2" id="recherche"/>
            </div>
        </div>

        <div className="container-cours">
            <div className="container-1">
                <div className="resp-saxo">
                    <Link to="../Masterclassroomsaxo">
                        <img src="/img/saxophone-cours.svg" alt="saxophone cours" className="saxophone-cours"/>
                    </Link>
                    <p>Saxophone</p>
                    <p>15h de cours avec exercices, épreuves</p>
                </div>

                <div className="resp-guitar">
                    <Link to="../Masterclassroomguitare">
                        <img src="/img/guitar-cours.svg" alt="guitar cours" className="guitar-cours"/>
                    </Link>
                    <p>Guitare</p>
                    <p>19h de cours avec exercices, épreuves</p>
                </div>

                <div className="resp-violon">
                    <Link to="../Masterclassroomviolon">
                        <img src="/img/violon-cours.svg" alt="violon cours" className="violon-cours"/>
                    </Link>
                    <p>Violon</p>
                    <p>21h de cours avec exercices, épreuves</p>
                </div>
            </div>

            <div className="container-2">
                <div>
                    <Link to="../Masterclassroomclarinette">
                        <img src="/img/clarinette-cours.svg" alt="clarinette cours" className="clarinette-cours"/>
                    </Link>
                    <p>Clarinette</p>
                    <p>12h de cours avec exercices, épreuves</p>
                </div>

                <div>
                    <Link to="../Masterclassroombatterie">
                        <img src="/img/batterie-cours.svg" alt="batterie cours" className="batterie-cours" />
                    </Link>
                    <p>Batterie</p>
                    <p>17h de cours avec exercices, épreuves</p>
                </div>

                <div>
                    <Link to="../Masterclassroompiano">
                        <img src="/img/piano-cours.svg" alt="piano cours" className="piano-cours" />
                    </Link>
                    <p>Piano</p>
                    <p>15h de cours avec exercices, épreuves</p>
                </div>
            </div>
        </div>
    </div>
};
export default Masterclassroom;