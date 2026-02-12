import Form from 'next/form'

export default function home() {
    return (
        <Form action={''}>
            <label>Username:</label>
            <input id="username" name="username"></input>
            <br></br>
            <label>Password:</label>
            <input id="password"></input>

            <br></br>

            <button type="submit">Submit</button>
        </Form>
    )
}