import { createContext, useState, useContext } from "react";

const AlertContext = createContext(undefined);

export const AlertProvider = ({children}) =>{
    const [alertState, setAlertState] = useState({
        isOpen: false,
        type: "success",
        message: ""
    });

    return (
        <AlertContext.Provider
            value ={{
                ...alertState,
                onOpen: (type, message) => setAlertState({ isOpen: true, type, message }),
                onClose: () => setAlertState({isOpen: false, type:"", message:""}),
            }}
        >
            {children}
        </AlertContext.Provider>
    );
};

export const useAlertContext = () => useContext(AlertContext);