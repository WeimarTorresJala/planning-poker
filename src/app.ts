import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import router from './routes/index';

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', router);

export default app;