"use client";
import Form from 'next/form'
import hello from './hello/page';

export default function home() {
    function helloWorld() {
        console.log("hello world")
    }
    async function sendGetCheck() {
        console.log("function call")
        try {
            const res = await fetch("http://localhost8080/ping");
            const data = await res.json();
            console.log(data)
        } catch (e) {
            console.log(e);
            console.log("Error during check");
        }
    }
    return (
        <form>
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