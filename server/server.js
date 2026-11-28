import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json())
app.use(cors())
await connectDB()

app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)

app.get('/', (req, res) => res.send('API Working'));

// Public, non-secret runtime config for the frontend — keeps the Google
// client ID out of the static client build.
app.get('/api/config', (req, res) => res.json({ googleClientId: process.env.GOOGLE_CLIENT_ID }));

app.listen(PORT, ()=> console.log('Server running on port ' + PORT));