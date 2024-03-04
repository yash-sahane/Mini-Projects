import { Children, createContext, useContext, useReducer } from "react";
import { AuthContext } from "./AuthContextProvider";

export const ChatContext = createContext();

export const ChatContextProvider = ({ Children }) => {
    const { currentUser } = useContext(AuthContext);
    const INITIAL_STATE = {
        chatId: '',
        user: {}
    }

    const chatReducer = (state, action) => {
        switch (action.type) {
            case 'CHANGE_USER':
                return {
                    user: action.payload,
                    chatID: currentUser.uid > action.payload.uid ?
                        currentUser.uid + action.payload.uid :
                        action.payload.uid + currentUser.uid
                }
        }
    }

    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

    return <ChatContext.Provider value={{ data: state, dispatch }}>
        <Children />
    </ChatContext.Provider>
}