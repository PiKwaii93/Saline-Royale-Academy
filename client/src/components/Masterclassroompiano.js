import React from "react";
import {Link} from "react-router-dom";
const Masterclassroompiano = () => {
    return <div>
        <div className="cont-room">
            <p className="typo-masterclassroom">Cours Piano</p>
        </div>

        <div className="">
            <div className="">
                <div className="">
                    <Link to="">
                        <img src="/img/piano-cours.svg" alt="piano cours" className=""/>
                    </Link>
                </div>

                <div>
                    <p>Principes d'utilisation du piano</p>
                    <p>Pour bien utiliser la piano, posez vos mains dessus. Elle ne doivent pas être posés à plat, surelevez les un petit peu</p>
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
export default Masterclassroompiano;