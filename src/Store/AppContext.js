import React, { useState,useReducer } from 'react';
const AppContext = React.createContext({});
export default AppContext;
export const AppConsumer = AppContext.Consumer;


export const AppProvider = (props) => {
    const [selectedTime,setSelectedTime]= useState("2021-10-12")
    const appData = {
        selectedTime,
        setSelectedTime
    };

    return <AppContext.Provider value={{
        ...appData,
    }} > {props.children} </ AppContext.Provider>
}