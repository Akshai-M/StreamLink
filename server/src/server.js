import express from 'express'
import "dotenv/config"
import authRouter from './routes/auth.router.js'
import connectDB from './lib/db.js'
// dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

app.use("/api/auth", authRouter)


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
    connectDB()
})