import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";
import axios from "axios";
import API_URL from "../config";

function UserCheck() {
    const {token} = useContext(AuthContext);

    const config = {
        'method' : 'get',
        'url' : `${API_URL}/scope/protecteduser`,
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