import mongoose from 'mongoose'
import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:5173'
}))

mongoose.connect("mongodb://localhost:27017/interndb") 

const userDataSchema = new mongoose.Schema({
   email:{
      type:String,
      required:[true,'please check ur data entry no email specified']
  },
     password:{
      type:String,
      required:[true,'please check ur data entry no password specified']
  },
     skills:{
      type:Array,
  }

})
    

const User = mongoose.model('User', userDataSchema);

app.post('/login', async (req,res)=>{
    const {email, password} = req.body
    const foundUser = await User.findOne({email,password})
    if (!foundUser) {
        return res.status(402).json({error:'Invalid email or password'})
    }
    res.json({user:foundUser})
    res.sendStatus(200);
    
})

app.post('/signup', async (req, res) => {
  const { email, password, skills } = req.body;
  const existing = await User.findOne({ email });
  if (existing) {
    return res.status(400).json({ error: 'User already exists' });
  }
  const newUser = new User({ email, password, skills });
  await newUser.save();
  res.status(201).json({ user: newUser });
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});