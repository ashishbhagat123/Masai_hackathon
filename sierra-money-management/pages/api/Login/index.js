import createHandler from "../../../middleware/index"
import User from "../../../Models/user"
const handler = createHandler();

handler.get(async (req, res)=>{
    const users = await User.find({}).exec()
    res.status(200).json(users)
})

handler.post(async (req,res)=> {
    try {
        console.log(req)
        const user = await User.create(req.body)
        console.log(user)
        res.status(201).json(user)
    } catch (error) {
        res.status(501).json(error)
    }
})
export default handler