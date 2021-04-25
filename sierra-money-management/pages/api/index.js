import createHandler from "../../middleware/index"
const handler = createHandler();

handler.get(async (req, res)=>{
    const users = await User.find({}).exec()
    res.status(200).json(users)
})

handler.post(async (req,res)=> {
    try {
        const user = await User.create(req.body)
        res.status(201).json(user)
    } catch (error) {
        res.status(501).json(error)
    }
})

export default handler