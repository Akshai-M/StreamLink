import User from "../models/User"

export async function getRecommendedUser(req, res) {

    try {
        const currentUserId = req.user.id
        const currentUser = await req.user
        
    } catch (error) {
        console.error('Error in getRmd controller', error.message)
        res.status(500).json({ message: "Internal Server Error"})
    }

}

export async function getMyFriends(req, res) {}