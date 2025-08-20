import {Schema,model} from "mongoose"

const HomePageSchema = new Schema({
    image:{
        type:String,
        required:true,
    },
    text:{
        type:String,
        required:true
    }
},{timestamps:true})

const HomePage = model("HomePage",HomePageSchema);
export default HomePage;