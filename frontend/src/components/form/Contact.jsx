import { useRef, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"
import "./contact.scss"

function Contact() {
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const emailRef = useRef(null)
  const subjectRef = useRef(null)
  const messageRef = useRef(null)
    

  const submitHandler = async (e) => {
    e.preventDefault()
    if (!email || !subject || !message) {
      return toast.error("Please fill email, subject and message")
    }
    try {
      setLoading(true)
      const { data } = await axios.post(`/api/email`, {
        email,
        subject,
        message,
      })
      setLoading(false)
      toast.success(data.message)
    } catch (err) {
      setLoading(false)
      console.log("ERROR", err)
      toast.error(
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
      )
    }

    emailRef.current.value = ""
    subjectRef.current.value = ""
    messageRef.current.value = ""
  }
  return (
    <>
      <section className='contact-form'>
      <div className='contact-container'>
          
            <h1>LET'S WORK TOGETHER</h1>
          <p>I'd love to chat about your next project.</p>
      </div>
      <ToastContainer position="top-right" limit={1} />
      <div>
        <form onSubmit={submitHandler}>
          <div>
            <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                ref={emailRef}
              />
          </div>
          <div>
            <input
                id="subject"
                type="text"
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
                ref={subjectRef}
              />
          </div>
          <div>
            <textarea
                id="message"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                rows="4"
                ref={messageRef}
              />
          </div>
          <div>
            <button disabled={loading} type="submit" className='btn'>
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
    </>
  )
}

export default Contact;



