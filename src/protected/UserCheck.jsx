import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";
import axios from "axios";

function UserCheck() {
    const {token} = useContext(AuthContext);

    const config = {
        'method' : 'get',
        'url' : 'https://graceful-maamoul-7aee5e.netlify.app:5000/scope/protecteduser',
        'headers' : {
            'Authorization' : 'Bearer ${token}'
        }
    };

    useEffect(() => {
        axios(config).then((response) => {
            console.log("bien");
            console.log(response);
        }).catch((error) => {
            console.log("mal");
            console.log(error);
        })
    }, [])

    return (
        <h1>hola</h1>   
    )
}

export default UserCheck;