import Expense from "../../Models/expense"

export default async (req, res) => {
    console.log(req.method)
    if(req.method === "GET"){
        const users = await Expense.find({}).exec()
        res.status(200).json(users)
    } else if (req.method === "POST"){
        try {
            const data = req.body
            console.log(data)
            const user = await Expense.create(data)         
            res.status(201).json(user)
        } catch (error) {
            res.status(501).json(error)
        }
    }
    
  }
  