import express from 'express';
import mongoose from   'mongoose';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.router.js';

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/EstateDB", {useNewUrlParser: true}).then(() => {
    console.log("success");
}).catch((err) => {
    console.log(err);
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);




app.listen(3000, function(req, res){
    console.log("App runnning on port 3000 !!");
});