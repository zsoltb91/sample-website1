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

function MemoryGame() {
  const [randArr, setRandArr] = useState([]);
  const [cardClick, setCardClick] = useState("card-noclick");
  const [started, setStarted] = useState(false);
  const [solved, setSolved] = useState(0);
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

  function resetAll() {
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

  function reset(id) {
    switch (id) {
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
        break;
      case "id16":
        setId16H("h");
        break;
      default:
        break;
    }
  }
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

  function resetPushed() {
    setSolved(0);
    setStopped(false);
    setStarted(false);
    setTimerOn(false);
    setStime(0);
    setMtime(0);
    resetAll();
    setCardClick("card-noclick");
  }

  function stopPushed() {
    if (started === true) {
      setStarted(false);
      setStopped(true);
      setTimerOn(false);
      setCardClick("card-noclick");
    }
  }

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

  useEffect(() => {
    console.log(solved);
    if (compareCards.length === 2) {
      setCardClick("card-noclick");
      if (compareCards[0] !== compareCards[1]) {
        setCompareCards([]);
        setLogId([]);
        setTimeout(() => {
          reset(logId[0]);
        }, 800);
        setTimeout(() => {
          reset(logId[1]);
        }, 800);
        setTimeout(() => {
          setCardClick("card");
        }, 800);
      } else if (compareCards[0] === compareCards[1]) {
        setCardClick("card");
        setCompareCards([]);
        setLogId([]);
        setSolved((prev) => prev + 1);
        if (solved === 7) {
          setCardClick("card-noclick");
          setTimeout(() => {
            alert("Congratulations!");
          }, 800);
          setTimerOn(false);
          setStopped(false);
          setStarted(false);
          setTimeout(() => {
            resetAll();
          }, 800);
          setTimeout(() => {
            setStime(0);
          }, 800);
          setTimeout(() => {
            setMtime(0);
          }, 800);
        }
      }
    }
  });

  let clickedCard = {
    id1: function () {
      setId1H("");
      setCompareCards([...compareCards, randArr[0]]);
      setLogId([...logId, "id1"]);
    },
    id2: function () {
      setId2H("");
      setCompareCards([...compareCards, randArr[1]]);
      setLogId([...logId, "id2"]);
    },
    id3: function () {
      setId3H("");
      setCompareCards([...compareCards, randArr[2]]);
      setLogId([...logId, "id3"]);
    },
    id4: function () {
      setId4H("");
      setCompareCards([...compareCards, randArr[3]]);
      setLogId([...logId, "id4"]);
    },
    id5: function () {
      setId5H("");
      setCompareCards([...compareCards, randArr[4]]);
      setLogId([...logId, "id5"]);
    },
    id6: function () {
      setId6H("");
      setCompareCards([...compareCards, randArr[5]]);
      setLogId([...logId, "id6"]);
    },
    id7: function () {
      setId7H("");
      setCompareCards([...compareCards, randArr[6]]);
      setLogId([...logId, "id7"]);
    },
    id8: function () {
      setId8H("");
      setCompareCards([...compareCards, randArr[7]]);
      setLogId([...logId, "id8"]);
    },
    id9: function () {
      setId9H("");
      setCompareCards([...compareCards, randArr[8]]);
      setLogId([...logId, "id9"]);
    },
    id10: function () {
      setId10H("");
      setCompareCards([...compareCards, randArr[9]]);
      setLogId([...logId, "id10"]);
    },
    id11: function () {
      setId11H("");
      setCompareCards([...compareCards, randArr[10]]);
      setLogId([...logId, "id11"]);
    },
    id12: function () {
      setId12H("");
      setCompareCards([...compareCards, randArr[11]]);
      setLogId([...logId, "id12"]);
    },
    id13: function () {
      setId13H("");
      setCompareCards([...compareCards, randArr[12]]);
      setLogId([...logId, "id13"]);
    },
    id14: function () {
      setId14H("");
      setCompareCards([...compareCards, randArr[13]]);
      setLogId([...logId, "id14"]);
    },
    id15: function () {
      setId15H("");
      setCompareCards([...compareCards, randArr[14]]);
      setLogId([...logId, "id15"]);
    },
    id16: function () {
      setId16H("");
      setCompareCards([...compareCards, randArr[15]]);
      setLogId([...logId, "id16"]);
    },
  };

  function startPushed() {
    setStopped(false);
    setStarted(true);
    if (stopped === false) {
      setSolved(0);
    }
    if (timerOn === false && stopped === false) {
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
    }

    setTimerOn(true);

    //Set the cards clickable
    setCardClick("card");

    //Game Started
  }

  return (
    <div className="game-main">
      <div className="game-container">
        <div className="game-title">
          <h1 id="Memgame">Memory Game</h1>
        </div>
        <GameCard
          className={cardClick}
          onClick={clickedCard.id1}
          id={`id1${id1h}`}
          src={randArr[0]}
        />
        <GameCard
          className={cardClick}
          onClick={clickedCard.id2}
          id={`id2${id2h}`}
          src={randArr[1]}
        />
        <GameCard
          className={cardClick}
          onClick={clickedCard.id3}
          id={`id3${id3h}`}
          src={randArr[2]}
        />
        <GameCard
          className={cardClick}
          onClick={clickedCard.id4}
          id={`id4${id4h}`}
          src={randArr[3]}
        />
        <GameCard
          className={cardClick}
          onClick={clickedCard.id5}
          id={`id5${id5h}`}
          src={randArr[4]}
        />
        <GameCard
          className={cardClick}
          onClick={clickedCard.id6}
          id={`id6${id6h}`}
          src={randArr[5]}
        />
        <GameCard
          className={cardClick}
          onClick={clickedCard.id7}
          id={`id7${id7h}`}
          src={randArr[6]}
        />
        <GameCard
          className={cardClick}
          onClick={clickedCard.id8}
          id={`id8${id8h}`}
          src={randArr[7]}
        />
        <GameCard
          className={cardClick}
          onClick={clickedCard.id9}
          id={`id9${id9h}`}
          src={randArr[8]}
        />
        <GameCard
          className={cardClick}
          onClick={clickedCard.id10}
          id={`id10${id10h}`}
          src={randArr[9]}
        />
        <GameCard
          className={cardClick}
          onClick={clickedCard.id11}
          id={`id11${id11h}`}
          src={randArr[10]}
        />
        <GameCard
          className={cardClick}
          onClick={clickedCard.id12}
          id={`id12${id12h}`}
          src={randArr[11]}
        />
        <GameCard
          className={cardClick}
          onClick={clickedCard.id13}
          id={`id13${id13h}`}
          src={randArr[12]}
        />
        <GameCard
          className={cardClick}
          onClick={clickedCard.id14}
          id={`id14${id14h}`}
          src={randArr[13]}
        />
        <GameCard
          className={cardClick}
          onClick={clickedCard.id15}
          id={`id15${id15h}`}
          src={randArr[14]}
        />
        <GameCard
          className={cardClick}
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
        <Button id="btn-restart" title="Reset" onClick={resetPushed} />
        <Counter
          secs={stime < 10 ? "0" + stime : stime}
          mins={mtime < 10 ? "0" + mtime : mtime}
        />
      </div>
    </div>
  );
}

export default MemoryGame;
