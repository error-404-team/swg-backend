const cors = require("cors");
const {
    setUser, setGEOLocation, setDateTime,
    createShareLocation, setOS
} = require('./body')

const corsPostOptions = {
    origin: true,
    methods: ["POST"],
    credentials: true,
    maxAge: 3600
};

function routesConfig(app) {
    app.options("/user/:id", cors(corsPostOptions));
    app.options("/geoLocation/:id", cors(corsPostOptions));

    app.post('/user/:id', cors(corsPostOptions), setUser);
    app.post('/geoLocation/:id', cors(corsPostOptions), setGEOLocation)
    // app.post('/dateTime/:id', setDateTime)
    // app.post('/shareLocation/:id', createShareLocation)
    // app.post('/os/:id', setOS)
}

module.exports = routesConfig;