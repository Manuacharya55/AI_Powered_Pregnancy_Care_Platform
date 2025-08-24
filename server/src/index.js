import express from "express";
import "dotenv/config";
import cors from "cors";

// DataBase and Error Handler Import
import { GlobalError } from "./utils/GlobalError.js";
import { connectDB } from "./database/db.js";

// Routes Import
import AuthRouter from "./routes/Auth.router.js";
import BlogRouter from "./routes/Blog.Router.js";
import AdminRouter from "./routes/Admin.Router.js";
import ProgramRouter from "./routes/Program.Router.js";
import PaymentRouter from "./routes/Payment.Router.js";

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
app.use(express.json());
app.use(cors())


app.get("/api/v1/auth",(req,res)=>{
    res.send("hiii")
})

app.use("/api/v1/auth",AuthRouter)
app.use("/api/v1/blog",BlogRouter)
app.use("/api/v1/admin",AdminRouter)
app.use("/api/v1/program",ProgramRouter)
app.use("/api/v1/payment",PaymentRouter)



app.use(GlobalError)
app.listen(PORT,()=>{
    console.log(`server running at : http://localhost:${PORT}/api/v1/`)
})