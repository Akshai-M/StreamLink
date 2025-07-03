import User from "../models/User"

export async function getRecommendedUser(req, res) {

    try {
        const currentUserId = req.user.id
        const currentUser = await req.user
        const rmdUsers = await User.find({
            $and:[
                {_id: {$ne: currentUserId}},
                {$id: {$nin: currentUser.friends}},
                { isOnboarded: true}
            ]
        })
        res.status(200).json(rmdUsers)
    } catch (error) {
        console.error('Error in getRmd controller', error.message)
        res.status(500).json({ message: "Internal Server Error"})
    }

}

export async function getMyFriends(req, res) {}