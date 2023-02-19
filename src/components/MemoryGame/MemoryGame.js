import "./MemoryGame.css";
import GameCard from "../GameCard/GameCard";
import Button from "../Button/Button";
import Counter from "../Counter/Counter";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";
import img7 from "../../assets/7.png";
import img8 from "../../assets/8.png";

import { useState, useEffect } from "react";

// Array storing clicked IDs
let arr = [];

function MemoryGame() {
  const [randArr, setRandArr] = useState([]);
  const [started, setStarted] = useState(false);
  const [reset, setReset] = useState(false);
  const [stopped, setStopped] = useState(false);
  const [timerOn, setTimerOn] = useState(false);
  const [stime, setStime] = useState(0);
  const [mtime, setMtime] = useState(0);
  const [compareCards, setCompareCards] = useState([]);
  const [logId, setLogId] = useState([]);
  const [id1h, setId1H] = useState("h");
  const [id2h, setId2H] = useState("h");
  const [id3h, setId3H] = useState("h");
  const [id4h, setId4H] = useState("h");
  const [id5h, setId5H] = useState("h");
  const [id6h, setId6H] = useState("h");
  const [id7h, setId7H] = useState("h");
  const [id8h, setId8H] = useState("h");
  const [id9h, setId9H] = useState("h");
  const [id10h, setId10H] = useState("h");
  const [id11h, setId11H] = useState("h");
  const [id12h, setId12H] = useState("h");
  const [id13h, setId13H] = useState("h");
  const [id14h, setId14H] = useState("h");
  const [id15h, setId15H] = useState("h");
  const [id16h, setId16H] = useState("h");

  const [clCard1, setClCard1] = useState("card-noclick");
  const [clCard2, setClCard2] = useState("card-noclick");
  const [clCard3, setClCard3] = useState("card-noclick");
  const [clCard4, setClCard4] = useState("card-noclick");
  const [clCard5, setClCard5] = useState("card-noclick");
  const [clCard6, setClCard6] = useState("card-noclick");
  const [clCard7, setClCard7] = useState("card-noclick");
  const [clCard8, setClCard8] = useState("card-noclick");
  const [clCard9, setClCard9] = useState("card-noclick");
  const [clCard10, setClCard10] = useState("card-noclick");
  const [clCard11, setClCard11] = useState("card-noclick");
  const [clCard12, setClCard12] = useState("card-noclick");
  const [clCard13, setClCard13] = useState("card-noclick");
  const [clCard14, setClCard14] = useState("card-noclick");
  const [clCard15, setClCard15] = useState("card-noclick");
  const [clCard16, setClCard16] = useState("card-noclick");

  let imgD = {
    imgK1: img1,
    imgK2: img2,
    imgK3: img3,
    imgK4: img4,
    imgK5: img5,
    imgK6: img6,
    imgK7: img7,
    imgK8: img8,
  };

  function resetAll(){
    arr=[];
    reHideAll();
    updatedm=0;
    updateds=0;
    setStime(0);
    setMtime(0);
    setCompareCards([]);
    setLogId([]);
    setTimerOn(false);
    setStarted(false);
    setStopped(false);
    setReset(true);
    disableClickReset();
  }

  function disableClickReset(){
    setClCard1("card-noclick");
    setClCard2("card-noclick");
    setClCard3("card-noclick");
    setClCard4("card-noclick");
    setClCard5("card-noclick");
    setClCard6("card-noclick");
    setClCard7("card-noclick");
    setClCard8("card-noclick");
    setClCard9("card-noclick");
    setClCard10("card-noclick");
    setClCard11("card-noclick");
    setClCard12("card-noclick");
    setClCard13("card-noclick");
    setClCard14("card-noclick");
    setClCard15("card-noclick");
    setClCard16("card-noclick");
  }

  function enableClickAll(){
    setClCard1("card");
    setClCard2("card");
    setClCard3("card");
    setClCard4("card");
    setClCard5("card");
    setClCard6("card");
    setClCard7("card");
    setClCard8("card");
    setClCard9("card");
    setClCard10("card");
    setClCard11("card");
    setClCard12("card");
    setClCard13("card");
    setClCard14("card");
    setClCard15("card");
    setClCard16("card");
  }

  function disableClickAll(){
    if (!arr.includes('id1')){setClCard1("card-noclick")};
    if (!arr.includes('id2')){setClCard2("card-noclick")};
    if (!arr.includes('id3')){setClCard3("card-noclick")};
    if (!arr.includes('id4')){setClCard4("card-noclick")};
    if (!arr.includes('id5')){setClCard5("card-noclick")};
    if (!arr.includes('id6')){setClCard6("card-noclick")};
    if (!arr.includes('id7')){setClCard7("card-noclick")};
    if (!arr.includes('id8')){setClCard8("card-noclick")};
    if (!arr.includes('id9')){setClCard9("card-noclick")};
    if (!arr.includes('id10')){setClCard10("card-noclick")};
    if (!arr.includes('id11')){setClCard11("card-noclick")};
    if (!arr.includes('id12')){setClCard12("card-noclick")};
    if (!arr.includes('id13')){setClCard13("card-noclick")};
    if (!arr.includes('id14')){setClCard14("card-noclick")};
    if (!arr.includes('id15')){setClCard15("card-noclick")};
    if (!arr.includes('id16')){setClCard16("card-noclick")};
    
  }

  function reEnableClickAll(){
    if(!arr.includes('id1'))setClCard1("card");
    if(!arr.includes('id2'))setClCard2("card");
    if(!arr.includes('id3'))setClCard3("card");
    if(!arr.includes('id4'))setClCard4("card");
    if(!arr.includes('id5'))setClCard5("card");
    if(!arr.includes('id6'))setClCard6("card");
    if(!arr.includes('id7'))setClCard7("card");
    if(!arr.includes('id8'))setClCard8("card");
    if(!arr.includes('id9'))setClCard9("card");
    if(!arr.includes('id10'))setClCard10("card");
    if(!arr.includes('id11'))setClCard11("card");
    if(!arr.includes('id12'))setClCard12("card");
    if(!arr.includes('id13'))setClCard13("card");
    if(!arr.includes('id14'))setClCard14("card");
    if(!arr.includes('id15'))setClCard15("card");
    if(!arr.includes('id16'))setClCard16("card");
    
  }

  function disableClickId(id){
    switch(id){
      case "id1":
        setClCard1("disabled");
        break;
      case "id2":
        setClCard2("disabled");
        break;
      case "id3":
        setClCard3("disabled");
        break;
      case "id4":
        setClCard4("disabled");
        break;
      case "id5":
        setClCard5("disabled");
        break;
      case "id6":
        setClCard6("disabled");
        break;
      case "id7":
        setClCard7("disabled");
        break;
      case "id8":
        setClCard8("disabled");
        break;
      case "id9":
        setClCard9("disabled");
        break;
      case "id10":
        setClCard10("disabled");
        break;
      case "id11":
        setClCard11("disabled");
        break;
      case "id12":
        setClCard12("disabled");
        break;
      case "id13":
        setClCard13("disabled");
        break;
      case "id14":
        setClCard14("disabled");
        break;
      case "id15":
        setClCard15("disabled");
      case "id16":
        setClCard16("disabled");
        break;
      default:
          break;

    }
  }

//Rehide specific cards

  function reHideId(id){
    switch(id){
      case "id1":
        setId1H("h");
        break;
      case "id2":
        setId2H("h");
        break;
      case "id3":
        setId3H("h");
        break;
      case "id4":
        setId4H("h");
        break;
      case "id5":
        setId5H("h");
        break;
      case "id6":
        setId6H("h");
        break;
      case "id7":
        setId7H("h");
        break;
      case "id8":
        setId8H("h");
        break;
      case "id9":
        setId9H("h");
        break;
      case "id10":
        setId10H("h");
        break;
      case "id11":
        setId11H("h");
        break;
      case "id12":
        setId12H("h");
        break;
      case "id13":
        setId13H("h");
        break;
      case "id14":
        setId14H("h");
        break;
      case "id15":
        setId15H("h");
      case "id16":
        setId16H("h");
        break;
      default:
          break;

    }
  }

  //Hide all cards
  function reHideAll() {
    setId1H("h");
    setId2H("h");
    setId3H("h");
    setId4H("h");
    setId5H("h");
    setId6H("h");
    setId7H("h");
    setId8H("h");
    setId9H("h");
    setId10H("h");
    setId11H("h");
    setId12H("h");
    setId13H("h");
    setId14H("h");
    setId15H("h");
    setId16H("h");
  }

  function stopPushed(){
    setStopped(true);
    setTimerOn(false);
    setStarted(false);
    setReset(false);
    disableClickAll();
  }

//Timer logic 

  let updateds = stime;
  let updatedm = mtime;
  const timer = () => {
    if (updateds === 59) {
      updatedm++;
      updateds = 0;
      setStime(updateds);
      setMtime(updatedm);
    } else {
      updateds++;
      setStime(updateds);
    }
  };


  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        timer();
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);


  useEffect(()=>{

    if (compareCards.length === 2){
      disableClickAll();
      if (compareCards[0] !== compareCards[1]){
        console.log(arr);
        setTimeout(()=>reHideId(logId[0]),800);
        setTimeout(()=>reHideId(logId[1]),800);
        setTimeout(()=>reEnableClickAll(),800);
        setCompareCards([]);
        setLogId([]);
      }else if(compareCards[0] === compareCards[1]){
        arr = [...arr,logId[0],logId[1]]
        console.log(arr);
        setTimeout(()=>disableClickId(logId[0]),200);
        setTimeout(()=>disableClickId(logId[1]),200);
        setTimeout(()=>reEnableClickAll(),800);
        setCompareCards([]);
        setLogId([]);
        if (arr.length === 16){
          arr=[];
          setStarted(false);
          setTimeout(()=>alert("Congratulations!"),500);
          setTimeout(()=>resetAll(),1000);
        }
      }
    }
  })
  
// Clicks on cards
  let clickedCard = {
    id1: function () {
      setId1H("");
      setCompareCards([...compareCards, randArr[0]]);
      setLogId([...logId, "id1"]);
      setClCard1("card-noclick");
    },
    id2: function () {
      setId2H("");
      setCompareCards([...compareCards, randArr[1]]);
      setLogId([...logId, "id2"]);
      setClCard2("card-noclick");
    },
    id3: function () {
      setId3H("");
      setCompareCards([...compareCards, randArr[2]]);
      setLogId([...logId, "id3"]);
      setClCard3("card-noclick");
    },
    id4: function () {
      setId4H("");
      setCompareCards([...compareCards, randArr[3]]);
      setLogId([...logId, "id4"]);
      setClCard4("card-noclick");
    },
    id5: function () {
      setId5H("");
      setCompareCards([...compareCards, randArr[4]]);
      setLogId([...logId, "id5"]);
      setClCard5("card-noclick");
    },
    id6: function () {
      setId6H("");
      setCompareCards([...compareCards, randArr[5]]);
      setLogId([...logId, "id6"]);
      setClCard6("card-noclick");
    },
    id7: function () {
      setId7H("");
      setCompareCards([...compareCards, randArr[6]]);
      setLogId([...logId, "id7"]);
      setClCard7("card-noclick");
    },
    id8: function () {
      setId8H("");
      setCompareCards([...compareCards, randArr[7]]);
      setLogId([...logId, "id8"]);
      setClCard8("card-noclick");
    },
    id9: function () {
      setId9H("");
      setCompareCards([...compareCards, randArr[8]]);
      setLogId([...logId, "id9"]);
      setClCard9("card-noclick");
    },
    id10: function () {
      setId10H("");
      setCompareCards([...compareCards, randArr[9]]);
      setLogId([...logId, "id10"]);
      setClCard10("card-noclick");
    },
    id11: function () {
      setId11H("");
      setCompareCards([...compareCards, randArr[10]]);
      setLogId([...logId, "id11"]);
      setClCard11("card-noclick");
    },
    id12: function () {
      setId12H("");
      setCompareCards([...compareCards, randArr[11]]);
      setLogId([...logId, "id12"]);
      setClCard12("card-noclick");
    },
    id13: function () {
      setId13H("");
      setCompareCards([...compareCards, randArr[12]]);
      setLogId([...logId, "id13"]);
      setClCard13("card-noclick");
    },
    id14: function () {
      setId14H("");
      setCompareCards([...compareCards, randArr[13]]);
      setLogId([...logId, "id14"]);
      setClCard14("card-noclick");
    },
    id15: function () {
      setId15H("");
      setCompareCards([...compareCards, randArr[14]]);
      setLogId([...logId, "id15"]);
      setClCard15("card-noclick");
    },
    id16: function () {
      setId16H("");
      setCompareCards([...compareCards, randArr[15]]);
      setLogId([...logId, "id16"]);
      setClCard16("card-noclick");
    },
  };


  function startPushed() {

    if ((stopped === true) && (reset === false)){
    setTimerOn(true);
    setStarted(true);
    setStopped(false);
    reEnableClickAll();
    }

    if ((timerOn === false) && (stopped === false)) {
      setLogId([]);
    setCompareCards([]);
      // Get starter shuffled array of images
      let startArray = [
        imgD.imgK1,
        imgD.imgK2,
        imgD.imgK3,
        imgD.imgK4,
        imgD.imgK5,
        imgD.imgK6,
        imgD.imgK7,
        imgD.imgK8,
        imgD.imgK1,
        imgD.imgK2,
        imgD.imgK3,
        imgD.imgK4,
        imgD.imgK5,
        imgD.imgK6,
        imgD.imgK7,
        imgD.imgK8,
      ];
      let randArrBase = startArray.sort(() => Math.random() - 0.5);
      setRandArr([...randArrBase]);
      setTimerOn(true);

      enableClickAll();
    }
    setReset(false);
    setStarted(true);
  }

  return (
    <div className="game-main">
      <div className="game-container">
        <div className="game-title">
          <h1 id="Memgame">Memory Game</h1>
        </div>
        <GameCard
        className={clCard1}
          onClick={clickedCard.id1}
          id={`id1${id1h}`}
          src={randArr[0]}
        />
        <GameCard
        className={clCard2}
          onClick={clickedCard.id2}
          id={`id2${id2h}`}
          src={randArr[1]}
        />
        <GameCard
        className={clCard3}
          onClick={clickedCard.id3}
          id={`id3${id3h}`}
          src={randArr[2]}
        />
        <GameCard
        className={clCard4}
          onClick={clickedCard.id4}
          id={`id4${id4h}`}
          src={randArr[3]}
        />
        <GameCard
        className={clCard5}
          onClick={clickedCard.id5}
          id={`id5${id5h}`}
          src={randArr[4]}
        />
        <GameCard
        className={clCard6}
          onClick={clickedCard.id6}
          id={`id6${id6h}`}
          src={randArr[5]}
        />
        <GameCard
         className={clCard7}
          onClick={clickedCard.id7}
          id={`id7${id7h}`}
          src={randArr[6]}
        />
        <GameCard
          className={clCard8}
          onClick={clickedCard.id8}
          id={`id8${id8h}`}
          src={randArr[7]}
        />
        <GameCard
          className={clCard9}
          onClick={clickedCard.id9}
          id={`id9${id9h}`}
          src={randArr[8]}
        />
        <GameCard
          className={clCard10}
          onClick={clickedCard.id10}
          id={`id10${id10h}`}
          src={randArr[9]}
        />
        <GameCard
          className={clCard11}
          onClick={clickedCard.id11}
          id={`id11${id11h}`}
          src={randArr[10]}
        />
        <GameCard
          className={clCard12}
          onClick={clickedCard.id12}
          id={`id12${id12h}`}
          src={randArr[11]}
        />
        <GameCard
          className={clCard13}
          onClick={clickedCard.id13}
          id={`id13${id13h}`}
          src={randArr[12]}
        />
        <GameCard
          className={clCard14}
          onClick={clickedCard.id14}
          id={`id14${id14h}`}
          src={randArr[13]}
        />
        <GameCard
          className={clCard15}
          onClick={clickedCard.id15}
          id={`id15${id15h}`}
          src={randArr[14]}
        />
        <GameCard
          className={clCard16}
          onClick={clickedCard.id16}
          id={`id16${id16h}`}
          src={randArr[15]}
        />
        <Button
          id={started === false ? "btn-start-inactive" : "btn-start-active"}
          title={started === false ? "Start" : "Started"}
          onClick={startPushed}
        
        />
        <Button
          id={stopped === false ? "btn-stop-inactive" : "btn-stop-active"}
          title={stopped === false ? "Stop" : "Stopped"}
          onClick={stopPushed}
          
        />
        <Button id="btn-restart" title="Reset" onClick={resetAll}/>
        <Counter
          secs={stime < 10 ? "0" + stime : stime}
          mins={mtime < 10 ? "0" + mtime : mtime}
        />
      </div>
    </div>
  );
}

export default MemoryGame;
