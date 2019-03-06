const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');
const server = express();
const configGuestRoutes = require('../Config/routes/guestRoute');
const configureUserRoutes = require('../Config/routes/userRoute');

server.use(
    express.json(),
    logger('dev'),
    cors(),
    helmet()
);
configureUserRoutes(server);

server.get('/', (req, res) => {
    res.status(200).json({
            api: "WOW welcome to the JoinOurBigDay API!"
        })
        .catch(err => {
            res.status(500).send({
                error: err
            })
        })
});

module.exports = server;