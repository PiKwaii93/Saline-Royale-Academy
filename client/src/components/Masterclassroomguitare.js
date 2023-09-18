import React from "react";
import {Link} from "react-router-dom";
const Masterclassroomguitare = () => {
    return <div>
        <div className="cont-room">
            <p className="typo-masterclassroom">Cours Guitare</p>
        </div>

        <div className="">
            <div className="">
                <div className="">
                    <Link to="">
                        <img src="/img/guitar-cours.svg" alt="guitar cours" className=""/>
                    </Link>
                </div>

                <div>
                    <p>Principes d'utilisation de la guitare</p>
                    <p>Pour accorder votre guitare, serrez ou déserrez les vis devant la guitare</p>
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
export default Masterclassroomguitare;