import { StreamChat } from "stream-chat"
import "dotenv/config"

const apiKey = process.env.STREAM_KEY
const apiSecret = process.env.STREAM_SECRET

if (!apiKey || !apiSecret){
    console.error("Invalid Api creds")
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret)

export const upsertStreamUser  = async (userData) => {
try {
    
    await streamClient.upsertUsers([userData])
    return userData
} catch (error) {
    console.log(`Error upserting stream user`, error);
    
}
}

export const generateStreamToken = (userId) => {}