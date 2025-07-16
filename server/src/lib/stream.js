import { StreamChat } from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STREAM_KEY;
const apiSecret = process.env.STREAM_SECRET;


export const upsertStreamUser = async (userData) => {
  try {
    await streamClient.upsertUsers([userData]);
    return userData;
  } catch (error) {
    console.log(`Error upserting stream user`, error);
  }
};
