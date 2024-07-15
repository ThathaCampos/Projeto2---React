import { createContext } from "react";

{/** Fazer alterações no projeto, por meio das ações*/}
import question from '../data/questions';


export const QuizContext = createContext()
{/**Ele não pode ser vazio */}

export const QuizProvider = ({ children }) => {
    const value = {};
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}


{/**
   Children = usado quando queremos utilizar um componente 
   dentro de outro componente. 
    */}