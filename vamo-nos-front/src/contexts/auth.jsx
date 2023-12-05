import React, { createContext, useState, useEffect } from "react";
export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    //Login
    const login = (email, password, type, access_token) => {
        setUser({email, password, type, access_token});
        localStorage.setItem(
            "user",
            JSON.stringify({
                email: email,
                password: password,
                type: type,
                access_token: access_token,
            })
        )
        return;
    }

    //Logout
    const logout = () => {
        setUser(null);
        localStorage.setItem("user", null);
        return;
    }

    useEffect(() => {
        const userSaved = JSON.parse(localStorage.getItem("user"));
        if (user === null) {
            setUser(userSaved);
        }
    });

    return (
        <AuthContext.Provider
            value={{ user, logged: user, logout, login }}
        >
            {children}
        </AuthContext.Provider>
    );
};