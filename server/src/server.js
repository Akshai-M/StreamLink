import express from 'express'
import "dotenv/config"
import authRouter from './routes/auth.router.js'
import connectDB from './lib/db.js'
import cookieParser from 'cookie-parser'
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRouter)


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
    connectDB()
})