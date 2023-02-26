require("dotenv").config()

const path = require("path")
const express = require("express")
const compression = require("compression")
const { errorHandler } = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")
const PORT = process.env.PORT || 8080

const app = express()
const mg = require("mailgun-js")
const cors = require("cors")

connectDB()

app.use(
  compression({
    level: 6,
    threshold: 100 * 1024,
    filter: (req, res) => {
      if (req.headers["x-no-compression"]) {
        return false
      }
      return compression.filter(req, res)
    },
  }),
)
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/goals", require("./routes/goalRoutes"))
app.use("/api/users", require("./routes/userRoutes"))

/* Email Settings */

const mailgun = () =>
  mg({
    apiKey: process.env.MAILGUN_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  })

app.post("/api/email", (req, res) => {
  const { email, subject, message } = req.body
  mailgun()
    .messages()
    .send(
      {
        from: `${email}`,
        to: process.env.MAILGUN_TO,
        subject: `${subject}`,
        html: `<p>${message}</p>`,
      },
      (error, body) => {
        if (error) {
          console.log(error)
          res.status(500).send({ message: "Error in sending email" })
        } else {
          console.log(body)
          res.send({ message: "Email sent successfully" })
        }
      },
    )
})

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"))
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  })
}

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} 🍺`)
})
