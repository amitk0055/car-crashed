import React, { useState } from 'react';
import moment from 'moment';

const AppContext = React.createContext({});
export default AppContext;
export const AppConsumer = AppContext.Consumer;


export const AppProvider = (props) => {
    const [selectedTime,setSelectedTime]= useState(moment().format('YYYY-MM-DD'))
    const appData = {
        selectedTime,
        setSelectedTime
    };

    return <AppContext.Provider value={{
        ...appData,
    }} > {props.children} </ AppContext.Provider>
}