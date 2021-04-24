import createHandler from "../../../middleware/index"
import User from "../../../Models/user"
const handler = createHandler();

handler.get(async (req, res)=>{
    const users = await User.find({}).exec()
    res.status(200).json(users)
})

export default handler