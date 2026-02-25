"use client";
import Form from 'next/form'
import hello from './hello/page';
import { useRef, useState } from 'react';

export default function home() {

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
    return (
        <form>

            <dialog id="connectionCheckDialog">
                <p>Connection check sucasdasdcessful</p>
                <button>Close</button>
            </dialog>

            <label>Username:</label>
            <input id="username" name="username"></input>
            <br></br>
            <label>Password:</label>
            <input id="password" name="password"></input>

            <br></br>

            <button type="submit">Submit</button>
            <br></br>
            <button type="button" onClick={sendGetCheck}> Check connection</button>
        </form>
    )
}