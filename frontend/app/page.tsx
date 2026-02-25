"use client";
import Form from 'next/form'
import hello from './hello/page';
import { useRef, useState } from 'react';

export default function home() {

    const url = "http://localhost:8080/login";

    async function sendGetCheck() {

        try {
            const res = await fetch("http://localhost:8080/ping");
            const data = await res.json();
            console.log(data);
            window.alert("Connection check successful")
        } catch (e) {
            console.log(e);
            window.alert("Error during connection check")
        }
    }

    async function login(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        const username = formData.get("username");
        const password = formData.get("password");

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "username": username,
                    "password": password
                })
            })

            console.log("POST request sent")
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <form onSubmit={login}>

            <dialog id="connectionCheckDialog">
                <p>Connection check successful</p>
                <button>Close</button>
            </dialog>

            <label>Username:</label>
            <input id="username" name="username"></input>
            <br></br>
            <label>Password:</label>
            <input id="password" name="password" type='password'></input>

            <br></br>

            <button type="submit">Submit</button>
            <br></br>
            <button type="button" onClick={sendGetCheck}> Check connection</button>
        </form>
    )
}