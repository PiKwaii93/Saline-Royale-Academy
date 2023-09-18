import React from "react";
import {Link} from "react-router-dom";
const Masterclassroombatterie = () => {
    return <div>
        <div className="cont-room">
            <p className="typo-masterclassroom">Cours Batterie</p>
        </div>

        <div className="">
            <div className="">
                <div className="">
                    <Link to="">
                        <img src="/img/batterie-cours.svg" alt="batterie cours" className=""/>
                    </Link>
                </div>

                <div>
                    <p>Principes d'utilisation de la batterie</p>
                    <p>Pour accorder votre guitare, serrez ou déserrez les vis devant la batterie</p>
                </div>

                <div>
                    <p>Appliquez ce que vous venez d'apprendre</p>
                </div>

                <div>
                    <p>Comment se nomme cet ensemble ?</p>
                    <input/>
                    <p>Comment se nomme cet accord ?</p>
                    <input/>
                    <p>Comment se nomme cet accord ?</p>
                    <p>Vrai ou Faux ?</p>
                    <input/>
                </div>
            </div>
        </div>
    </div>
};
export default Masterclassroombatterie;