import mongoose, {Model, Schema} from 'mongoose'

const Model_Name = "User"

const schema = new Schema({
    full_name: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    income: { type: Number, required: true},
    expenditure : { type: Number, required: true}
}, {
    timestamps: true,
})

export default mongoose.models[Model_Name] || mongoose.model(Model_Name, schema, "users")   