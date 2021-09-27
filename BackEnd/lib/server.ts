
import express from "express";
const app = express()
import router from "./routes/routes";

app.use(express.json());
    
app.use('/api', router)

app.listen(3000)
