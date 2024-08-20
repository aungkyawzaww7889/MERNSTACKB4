// eslint-disable-next-line no-unused-vars
import React from "react";
import { createContext, useState } from "react";

export const FirstContext = createContext(null);

const FirstContextProvider = (props)=>{

    const [userName]  = useState("Codehub Myanmar");
    const city = useState("Yangon");
    const age = 30;
    const [ num,setnum ] = useState(0);

    return (
        <FirstContext.Provider value ={{ userName,city,age,num,setnum }}>
            {props.children}
        </FirstContext.Provider>
    );  
}

export default FirstContextProvider;