import React, { useState, useEffect } from "react";
import axios from "axios";

function Forum() {
  const [forumData, setForumData] = useState([]);

  useEffect(() => {
    axios.get("/client/forum").then((response) => {
      setForumData(response.data);
    });
  }, []);

  const handleSubmit = (newQuestionOrAnswer) => {
    axios.post("/client/forum", newQuestionOrAnswer).then((response) => {
      // Faites quelque chose avec la réponse si nécessaire
    });
  };

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-center text-6xl text-black font-roboto">
      <div className="absolute top-[170px] left-[33px] rounded-[7px] bg-lightsteelblue box-border w-[1376px] h-[79px] border-[1px] border-solid border-black" />
      <div className="absolute top-[198px] left-[394px] font-medium text-white inline-block w-[82px] h-[31px]">
        Sujet
      </div>
      <div className="absolute top-[197px] left-[57px] font-medium text-white inline-block w-[82px] h-9">
        Date
      </div>
      <div className="absolute top-[198px] left-[790px] font-medium text-white inline-block w-[82px] h-9">
        Auteur
      </div>
      <div className="absolute top-[198px] left-[923px] font-medium text-white inline-block w-[82px] h-9">
        Statut
      </div>
      <div className="absolute top-[194px] left-[1071px] font-medium text-white inline-block w-[82px] h-9">
        Tags
      </div>
      <div className="absolute top-[198px] left-[1230px] font-medium text-white inline-block w-40 h-9">
        Réponse total
      </div>
      <img
        className="absolute top-[187px] left-[126px] w-[46px] h-[46px] overflow-hidden"
        alt=""
        src="/materialsymbolsarrowdropdown.svg"
      />
      <div className="absolute top-[280.5px] left-[32.5px] box-border w-[1377px] h-px border-t-[1px] border-solid border-black" />
      <div className="absolute top-[569.5px] left-[37.5px] box-border w-[1377px] h-px border-t-[1px] border-solid border-black" />
      <div className="absolute top-[353.5px] left-[32.5px] box-border w-[1377px] h-px border-t-[1px] border-solid border-black" />
      <div className="absolute top-[422.5px] left-[37.5px] box-border w-[1377px] h-px border-t-[1px] border-solid border-black" />
      <div className="absolute top-[493.5px] left-[37.5px] box-border w-[1377px] h-px border-t-[1px] border-solid border-black" />
      <div className="absolute top-[303px] left-[38px] font-medium inline-block w-[119px] h-[29px]">
        11/05/23
      </div>
      <div className="absolute top-[303px] left-[185px] font-medium inline-block w-[532px] h-[29px]">
        Comment positionner ses doigts sur un piano ?
      </div>
      <div className="absolute top-[304px] left-[776px] font-medium inline-block w-[109px] h-[29px]">
        Charles
      </div>
      <div className="absolute top-[304px] left-[907px] font-medium inline-block w-[109px] h-[29px]">
        Publié
      </div>
      <div className="absolute top-[304px] left-[1253px] font-medium inline-block w-[109px] h-[29px]">
        25
      </div>
      <div className="absolute top-[303px] left-[1024px] font-medium inline-block w-44 h-[29px]">
        piano, positon
      </div>
      <div className="absolute top-[375px] left-[38px] font-medium inline-block w-[119px] h-[29px]">
        18/04/23
      </div>
      <div className="absolute top-[375px] left-[185px] font-medium inline-block w-[532px] h-[29px]">
        Comment accorder sa guitare ?
      </div>
      <div className="absolute top-[376px] left-[776px] font-medium inline-block w-[109px] h-[29px]">
        Sam
      </div>
      <div className="absolute top-[376px] left-[907px] font-medium inline-block w-[109px] h-[29px]">
        Publié
      </div>
      <div className="absolute top-[376px] left-[1253px] font-medium inline-block w-[109px] h-[29px]">
        12
      </div>
      <div className="absolute top-[375px] left-[1024px] font-medium inline-block w-44 h-[29px]">
        guitare, accord
      </div>
      <div className="absolute top-[517px] left-[38px] font-medium inline-block w-[119px] h-[29px]">
        29/01/23
      </div>
      <div className="absolute top-[517px] left-[185px] font-medium inline-block w-[532px] h-[29px]">
        Quel est votre instrument préféré ?
      </div>
      <div className="absolute top-[518px] left-[776px] font-medium inline-block w-[109px] h-[29px]">
        Jack
      </div>
      <div className="absolute top-[518px] left-[907px] font-medium inline-block w-[109px] h-[29px]">
        Publié
      </div>
      <div className="absolute top-[518px] left-[1253px] font-medium inline-block w-[109px] h-[29px]">
        19
      </div>
      <div className="absolute top-[517px] left-[1024px] font-medium inline-block w-44 h-[29px]">
        instrument
      </div>
      <div className="absolute top-[442px] left-[38px] font-medium inline-block w-[119px] h-[29px]">
        05/03/23
      </div>
      <div className="absolute top-[442px] left-[185px] font-medium inline-block w-[532px] h-[29px]">
        Aidez-moi, je ne sais pas faire de la harpe
      </div>
      <div className="absolute top-[443px] left-[776px] font-medium inline-block w-[109px] h-[29px]">
        Lea
      </div>
      <div className="absolute top-[443px] left-[907px] font-medium inline-block w-[109px] h-[29px]">
        Publié
      </div>
      <div className="absolute top-[443px] left-[1253px] font-medium inline-block w-[109px] h-[29px]">
        7
      </div>
      <div className="absolute top-[442px] left-[1024px] font-medium inline-block w-44 h-[29px]">
        harpe
      </div>
      <div className="absolute top-[115px] left-[62px] font-medium inline-block w-[265px] h-[33px]">
        Créer un nouveau sujet
      </div>
      <div className="absolute top-[112px] left-[1209px] font-medium inline-block w-[198px] h-[33px]">
        Modifier un sujet
      </div>
      <img
        className="absolute h-[1.95%] w-[1.39%] top-[11.52%] right-[95.97%] bottom-[86.52%] left-[2.64%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
      <div className="absolute top-[0px] left-[0px] bg-main-first-background-color box-border w-[1438px] h-[76px] overflow-hidden flex flex-row py-[15px] px-0 items-center justify-between text-base text-white font-typography-menu-title-text border-b-[1px] border-solid border-black">
        <div className="overflow-hidden flex flex-col py-0 pr-0 pl-[25px] items-start justify-start z-[2]">
          <img
            className="relative w-[171.94px] h-[42.19px]"
            alt=""
            src="/clip-path-group.svg"
          />
        </div>
        <div className="flex flex-row py-0 pr-[25px] pl-0 items-center justify-center gap-[55px] z-[0]">
          <div className="flex flex-row items-center justify-center gap-[4px]">
            <div className="relative leading-[16px]">FR</div>
            <img
              className="relative w-[11.96px] h-[6.85px]"
              alt=""
              src="/vector1.svg"
            />
          </div>
          <img
            className="relative w-[157.87px] h-[76px]"
            alt=""
            src="/searchnormal.svg"
          />
          <img
            className="relative w-[35px] h-[35px]"
            alt=""
            src="/vector2.svg"
          />
        </div>
      </div>
    </div>
  );
}

export default Forum;
