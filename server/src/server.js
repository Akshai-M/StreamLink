import express from 'express'
import "dotenv/config"
import authRouter from './routes/auth.route.js'
import userRoute from './routes/user.route.js'
import chatRoute from './routes/chat.route.js'
import connectDB from './lib/db.js'
import cookieParser from 'cookie-parser'
import cors from "cors"
const app = express()
const PORT = process.env.PORT || 3000

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRouter)
app.use('/api/users', userRoute)
app.use("/api/chat", chatRoute)


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
    connectDB()
})