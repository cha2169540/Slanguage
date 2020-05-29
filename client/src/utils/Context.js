import React, { useState, createContext } from 'react';

export const UserContext = createContext("");


export default ({ children }) => {

    const [user, setUser] = useState({
        username:"jrstanle", _id:"5ecaf507bc4a93071b3c5c17"
    });
    
    const [currentLang, setCurrentLang] = useState("Navajo");

    return <UserContext.Provider value={{ user, setUser, currentLang, setCurrentLang }}>{children}</UserContext.Provider>
}


// import React, { useState, createContext, useEffect } from 'react';



// // const localStateLang = JSON.parse(localStorage.getItem("currentLang"));

// export const UserContext = createContext("");


// export default ({ children }) => {
//     const [user, setUser] = useState();
//     const [currentLang, setCurrentLang] = useState();

//     useEffect(() => {
//         const userInfo = localStorage.getItem("user");
//         if (userInfo) {
//             setUser(JSON.parse(userInfo));
//         }
//     }, []);

//     useEffect(() => {
//         localStorage.setItem("user", JSON.stringify(user));
//     });

//     return (
//         <UserContext.Provider value={{ user, setUser, currentLang, setCurrentLang }}>
//             {children}
//         </UserContext.Provider>
//     )
// }

// import React, { useReducer, createContext, useEffect } from 'react';


// let reducer = (user, newUser) => {
//     if (newUser === null) {
//         localStorage.removeItem("user");
//         return initialState;
//     }
//     return { ...user, ...newUser };
// };

// const initialState = "";

// const localState = JSON.parse(localStorage.getItem("user"));

// export const UserContext = createContext("");

// export default ({ children }) => {

//     const [user, setUser] = useReducer(reducer, localState || initialState);
//     const [currentLang, setCurrentLang] = useReducer(((lang, newLang) => { return { ...lang, ...newLang } }, ""));

//     useEffect(() => {
//         localStorage.setItem("user", JSON.stringify(user));
//     }, [user]);

//     return <UserContext.Provider value={{ user, setUser, currentLang, setCurrentLang }}>{children}</UserContext.Provider>
// }