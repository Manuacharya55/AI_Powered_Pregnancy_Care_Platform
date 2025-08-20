import { Schema,model } from "mongoose";

const WeeksSchema = new Schema({
    program:{
        type:Schema.Types.ObjectId,
        ref:"Program",
        required:true
    },
    weekNumber:{
        type:Number,
        required:true
    },
    details:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
},{timestamps:true});

const Weeks = model("Weeks",WeeksSchema);
export default Weeks;