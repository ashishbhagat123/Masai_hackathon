import mongoose from 'mongoose'

export async function dbConnect(){
    console.log("here")
    if (mongoose.connection.readyState >=1){
        return
    }

    return mongoose.connect('mongodb://127.0.0.1:27017/hackathon',{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    } )
}

export function jsonify(obj){
    return JSON.parse(JSON.stringify(obj))
}

export default async function dbMiddleware(req, res, next){
    try {
        if(!global.mongoose){
            global.mongoose = dbConnect()
        }
    }catch(e){
        console.log(e)
    }
    return next()
}