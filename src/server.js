import mongoose from 'mongoose'
import express from 'express';
import cors from 'cors'
import passport from 'passport';
import passportLocalMongoose from 'passport-local-mongoose';
import session from 'express-session';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

mongoose.connect("mongodb://localhost:27017/interndb");

// Session
app.use(session({
  secret: 'yourSecretKey',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

app.use(passport.initialize());
app.use(passport.session());

// Schema
const userDataSchema = new mongoose.Schema({
   email: {
     type: String,
     required: [true, 'Please provide an email'],
     unique: true
   },
   password: {
     type: String
   },
   skills: {
     type: Array
   }
});

// Plugin
userDataSchema.plugin(passportLocalMongoose, {
  usernameField: 'email'
});

const User = mongoose.model('User', userDataSchema);

// Passport config
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Routes
app.post('/signup', async (req, res) => {
  try {
    const { email, password,skills } = req.body;
    const user = await User.register(new User({ email,skills }), password);
    res.status(200).json({ message: 'User registered', user });
  } catch (err) {
    console.log(err.message)
    res.status(400).json({ error: err.message });
  }
});

app.post('/login', passport.authenticate('local'), (req, res) => {
  res.status(200).json({ message: 'Login successful', user: req.user });
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
