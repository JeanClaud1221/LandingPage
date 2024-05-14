import { useState, useRef } from "react"
import axios from "axios"
function EmailSender() {
    const emailArea = useRef(null)
    const [emailMessage, setEmailMessage] = useState("")
    const [email, setEmail] = useState("")
    function textChange(e) {
        emailArea.current.style.height = `auto`
        emailArea.current.style.height = `${emailArea.current.scrollHeight + 4}px`
        setEmailMessage(e.target.value)
    }
    function mailSetter(e) {
        setEmail(e.target.value)

    }
    async function submitEmail() {
        try {
            const emailObj = {
                emailR: email,
                messageR: emailMessage
            }
            const res = await axios.post(`http://localhost:3007/mail`, emailObj)
            if (res) {
                console.log("Email Success")
            } else {
                console.log("Email Error")
            }
        } catch (error) {
            console.log(error)
        }

    }



    return (

        <div className="max-w-lg mx-3 w-3/4">

            <form className="flex flex-col space-y-2">
                <label htmlFor="eMailInput">Email</label>
                <input type="text" id="eMailInput" className="border-2 rounded-lg" name="Email" onChange={mailSetter} />
                <label htmlFor="messageInput">Message</label>
                <textarea ref={emailArea} id="messageInput" name="Message" className=" resize-none border-2 rounded-lg" onChange={textChange}></textarea>
                <div>
                    <button className="rounded-full border-2 px-6 bg-blue-700 text-white py-1" onClick={submitEmail}>Send</button>
                </div>
            </form>
        </div>
    )

}
export default EmailSender