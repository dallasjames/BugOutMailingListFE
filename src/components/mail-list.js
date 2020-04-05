import React, { useState } from "react"
import api from "../utils/api"

function MailList() {
    const [email, setEmail] = useState({
        email: ""
    })

    const [error, setError] = useState(null)

    const handleChange = (e) => {
        setEmail({
            ...email,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
            e.preventDefault()
            if (email === "") {
                setError("You must enter an email address")
            }
            api()
                .post("/api/add", email)
                .then(res => {
                    console.log(res.data)
                    window.location.href = '/accepted'
                })
                .catch(err => {
                    console.log(err)
                    setError("This email is on the list already!")
                    return(
                        <>
                        <p>Email is already added to the list</p>
                        </>
                    )
                })

    }
    return (
        <form onSubmit={handleSubmit}>
            <p>This service is not yet available but enter your email to get put on the mailing list for when it is.</p>
            <p className="red">{error}</p>
            <input type="email" name="email" placeholder="Email" value={email.email} onChange={handleChange} />
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}

export default MailList