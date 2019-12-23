import express  from 'express';
import cors from 'cors'

import { conf } from './config/config'

const app = express();

import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded({ limit: '50mb',extended: true }));
app.use(bodyParser.json());


// console.log(__dirname);
app.set('views', 'src/tpl');
app.set('view engine', 'twig');
app.disable('view cache');

// This section is optional and can be used to configure twig.
app.set("twig options", {
    allow_async: true, // Allow asynchronous compiling
    strict_variables: false,
    cache:false,
    auto_reload:true,
    optimizations:0
});


/*для подкл к API*/
app.use(cors());
app.options('*', cors());

/* LEGO ошибок */


import * as route from './server/route';
app.use(route.router);


// Обработчик ошибок

console.log(`server start at ${conf.common.baseURL}:${conf.port}`);
app.listen(conf.port);
