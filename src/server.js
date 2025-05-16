import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import passport from 'passport';
import passportLocalMongoose from 'passport-local-mongoose';
import cors from 'cors';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS: Allow frontend to communicate with backend
app.use(cors({
  origin: 'http://localhost:5173', // Frontend origin
  credentials: true
}));

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/interndb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Session Setup
app.use(session({
  secret: 'yourSecretKey',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // Set to true if using HTTPS
}));

// Passport Setup
app.use(passport.initialize());
app.use(passport.session());

// Schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true
  },
  password: String,
  skills: [String]
});

// Plugin for passport-local-mongoose
userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email'
});

const User = mongoose.model('User', userSchema);

// Passport Configuration
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Helper Middleware to protect routes
function ensureAuth(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.status(401).json({ error: 'Unauthorized' });
}

// Signup Route
app.post('/signup', async (req, res) => {
  const { email, password, skills } = req.body;

  // Basic password validation
  if (!password || password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    const user = await User.register(new User({ email, skills }), password);

    // Auto-login after signup
    req.login(user, (err) => {
      if (err) return res.status(500).json({ error: 'Login after signup failed' });
      res.status(200).json({ message: 'Signup successful', user });
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login Route
app.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!user) return res.status(401).json({ error: 'Invalid email or password' });

    req.login(user, (err) => {
      if (err) return res.status(500).json({ error: 'Login failed' });
      res.status(200).json({ message: 'Login successful', user:req.user });
    
    });
  })(req, res, next);
});

// Protected Profile Route
app.get('/profile', ensureAuth, (req, res) => {
  res.status(200).json({ message: 'Authenticated', user: req.user });
});

// Logout Route
app.post('/logout', (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).json({ error: 'Logout failed' });
    res.status(200).json({ message: 'Logged out' });
  });
});

// Server Start
app.listen(5000, () => {
  console.log('Server started on port 5000');
});
