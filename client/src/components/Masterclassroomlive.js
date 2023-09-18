import React from "react";
import {render} from "react-dom/profiling";
import {Link} from "react-router-dom";
const Masterclassroomlive = () => {
    return <div>
        <div className="text-center-live">
            <p>Choissisez le cours que vous voulez voir en direct</p>
        </div>

        <div className="caroussel">
            <img src="../Footer_img/arrow_left_live.svg" alt="flèche gauche" />
                <div className="img-carouss">
                    <img src="../Footer_img/saxophone-visio.svg" alt="image saxophone"/>
                    <img src="../Footer_img/guitar-visio.svg" alt="image guitar"/>
                    <img src="../Footer_img/music-visio.svg" alt="image violon"/>
                </div>
            <img src="../Footer_img/arro_right_live.svg" alt="flèche droite"/>
        </div>

        <div className="text-center-live">
            <div></div>
            <p>Vous souhaitez voir plus de cours en direct, cliquez ici</p>
        </div>
    </div>
};
export default Masterclassroomlive;