import { createContext, useReducer } from "react";
{/** useReducer = Fazer alterações no projeto, por meio das ações*/}
import question from '../data/questions';

const STAGES = ["start", "Playing", "End"];

const initialState = {
    gameStage: STAGES[0],
    questions
}

const quizReducer = (state, action) => {

    switch (action.type) {
        case "CHANGE_STATE":
            return state;

            default:
                return state;
    }
}



export const QuizContext = createContext()
{/**Ele não pode ser vazio */}

export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialState);
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}


{/**
   Children = usado quando queremos utilizar um componente 
   dentro de outro componente. 
    */}