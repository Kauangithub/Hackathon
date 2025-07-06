import express from 'express'
import cors from 'cors'

import { ReqUser } from './requests/user/index.js';
import { ReqProvider } from './requests/provider/index.js';
import { ReqEvent } from './requests/event/index.js';

const app = express();
app.use(express.urlencoded({ extend: true}));
app.use(express.json());
app.use(cors());
app.use

const PORT = 3333;

app.listen(PORT, () => 
{console.log("Tudo funcionando chefia 😎👍")}
);

ReqUser();
ReqProvider();
ReqEvent();

export {app};