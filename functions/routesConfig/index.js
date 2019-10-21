const cors = require("cors");
const {
    postUser, postGEOLocation,postStatusProcess,postBaseShareLocation,
    postShareLocationChat,putShareLocationJoin,getShareLocationPrivate,
    getShareLocationPublic,postProfile,putProfile,getProfile,getGEOLocation
} = require('./module')

const corsPostOptions = {
    origin: true,
    methods: ["POST","GET","PUT","OPTIONS"],
    credentials: true,
    maxAge: 3600
};

function routesConfig(app) {
    app.options("/user/:id", cors(corsPostOptions));
    app.options("/geolocation/:id", cors(corsPostOptions));
    app.options("/status_process/:id", cors(corsPostOptions));
    app.options("/base_share_location/:id", cors(corsPostOptions));
    app.options('/share_location/:hid/join/:uid', cors(corsPostOptions));
    app.options("/share_location/:hid/chat", cors(corsPostOptions));
    app.options("/share_location_private/:id", cors(corsPostOptions));
    app.options("/share_location_public", cors(corsPostOptions));
    app.options("/profile/:id", cors(corsPostOptions));

    app.post('/user/:id', cors(corsPostOptions), postUser);
    app.post('/geolocation/:id', cors(corsPostOptions), postGEOLocation);
    app.post('/status_process/:id', cors(corsPostOptions), postStatusProcess);
    app.post('/base_share_location/:id', cors(corsPostOptions), postBaseShareLocation);
    app.post('/share_location/:hid/chat', cors(corsPostOptions), postShareLocationChat);
    app.post('/profile/:id', cors(corsPostOptions), postProfile);

    app.put('/share_location/:hid/join/:uid', cors(corsPostOptions), putShareLocationJoin);
    app.put('/profile/:id', cors(corsPostOptions), putProfile);

    app.get('/share_location_private/:id', cors(corsPostOptions), getShareLocationPrivate);
    app.get('/share_location_public', cors(corsPostOptions), getShareLocationPublic);
    app.get('/profile/:id', cors(corsPostOptions), getProfile);
    app.get('/geolocation/:id', cors(corsPostOptions), getGEOLocation);

}

module.exports = routesConfig;