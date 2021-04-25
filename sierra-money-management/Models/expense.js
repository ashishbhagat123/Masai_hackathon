import mongoose, {Model, Schema} from 'mongoose'

const Model_Name = "Expense"

const schema = new Schema({
    category: { type: String, required: true},
    amount: { type: Number, required: true},
    note: { type: String, required: true},
    account: { type: String, required: true},
    user :  {type: mongoose.Schema.Types.ObjectId, ref:"users", required : true},
}, {
    timestamps: true,
})

export default mongoose.models[Model_Name] || mongoose.model(Model_Name, schema, "expenses")