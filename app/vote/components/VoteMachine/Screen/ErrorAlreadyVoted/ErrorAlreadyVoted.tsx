import { useEffect } from "react";
import styles from "./error-already-voted.module.scss";


export function ErrorAlreadyVoted() {


  useEffect(() => {
    const audio = new Audio("./Plililim.mp3");
    audio.play();

  
  }, [])


  return (
    <div className={styles.ErrorAlreadyVoted}>
      {/* <img src="brasaooficialcolorido.png" alt="brasão ministério público" /> */}
      <p>O Voto deste eleitor já foi cadastrado!</p>
    </div>
  )
}
