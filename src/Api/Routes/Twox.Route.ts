import express from 'express';
const twoxRouter = express.Router();
import { spinner } from '../Controllers/Twox.Controller';


//!get
twoxRouter.get('/api/v1/twox/spin',spinner);

export default twoxRouter;