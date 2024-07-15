import { useContext } from "react";
import PlanoFundo from "../assets/planoFundo.jpg"; {/*Para poder utilizar uma imagem, vc meio que vai criar uma "Variavel"
    para o armazenamento dela*/}
import "./welcome.css";
import { QuizContext } from "../context/quiz";

const welcome = () => {

  const [quizState, dispacth] = useContext(QuizContext);

  return (
    <div id='welcome'>
      <h2>Seja bem-vindo!</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispacth({type: "CHANGE_STATE"})}>Iniciar</button>
      <img src={PlanoFundo} alt="Inicio do Quiz" />
    </div>
  )
}

export default welcome
