const cors = require("cors");
const { post, get } = require('./controller')

const corsOptions = {
    origin: true,
    methods: ["POST", "GET", "PUT", "OPTIONS"],
    credentials: true,
    maxAge: 3600
};

function routesConfig(app) {
    app.options("/users/:id/user", cors(corsOptions));
    app.options("/users/:id/location", cors(corsOptions));
    app.options("/users/:id/profile", cors(corsOptions));
    app.options("/users/:id/_log/user", cors(corsOptions));
    app.options("/users/:id/_log/location", cors(corsOptions));
    app.options("/users/:id/_log/profile", cors(corsOptions));
    app.options("/share/:id/location", cors(corsOptions));
    app.options("/share/:id/date", cors(corsOptions));
    app.options("/share/:id/max_number", cors(corsOptions));
    app.options("/share/:id/sex", cors(corsOptions));
    app.options("/share/:id/owner", cors(corsOptions));
    app.options("/share/:id/member", cors(corsOptions));
    app.options("/share/:id/chat", cors(corsOptions));
    app.options("/share/:id/_log/location", cors(corsOptions));
    app.options("/share/:id/_log/date", cors(corsOptions));
    app.options("/share/:id/_log/max_number", cors(corsOptions));
    app.options("/share/:id/_log/sex", cors(corsOptions));
    app.options("/share/:id/_log/owner", cors(corsOptions));
    app.options("/share/:id/_log/member", cors(corsOptions));
    app.options("/share/:id/_log/chat", cors(corsOptions));
    app.options("/status/:id/process", cors(corsOptions));
    app.options("/status/:id/share", cors(corsOptions));
    app.options("/status/:id/share", cors(corsOptions));
    app.options("/status/:id/owner", cors(corsOptions));
    app.options("/status/:id/member", cors(corsOptions));
    app.options("/status/:id/alert", cors(corsOptions));
    app.options("/status/:id/_log", cors(corsOptions));


    app.post("/users/:id/user", cors(corsOptions), post.users.user);
    app.post("/users/:id/location", cors(corsOptions), post.users.location);
    app.post("/users/:id/profile", cors(corsOptions), post.users.profile);
    app.post("/users/:id/_log/user", cors(corsOptions), post.users.log.user);
    app.post("/users/:id/_log/location", cors(corsOptions), post.users.log.location);
    app.post("/users/:id/_log/profile", cors(corsOptions), post.users.log.profile);
    app.post("/share/:id/location", cors(corsOptions), post.share.location);
    app.post("/share/:id/date", cors(corsOptions), post.share.date);
    app.post("/share/:id/max_number", cors(corsOptions), post.share.max_number);
    app.post("/share/:id/sex", cors(corsOptions), post.share.sex);
    app.post("/share/:id/owner", cors(corsOptions), post.share.owner);
    app.post("/share/:id/member", cors(corsOptions), post.share.member);
    app.post("/share/:id/chat", cors(corsOptions), post.share.chat);
    app.post("/share/:id/_log/location", cors(corsOptions), post.share.log.location);
    app.post("/share/:id/_log/date", cors(corsOptions), post.share.log.date);
    app.post("/share/:id/_log/max_number", cors(corsOptions), post.share.log.max_number);
    app.post("/share/:id/_log/sex", cors(corsOptions), post.share.log.sex);
    app.post("/share/:id/_log/owner", cors(corsOptions), post.share.log.owner);
    app.post("/share/:id/_log/member", cors(corsOptions), post.share.log.member);
    app.post("/share/:id/_log/chat", cors(corsOptions), post.share.log.chat);
    app.post("/status/:id/process", cors(corsOptions));
    app.post("/status/:id/share", cors(corsOptions));
    app.post("/status/:id/share", cors(corsOptions));
    app.post("/status/:id/owner", cors(corsOptions));
    app.post("/status/:id/member", cors(corsOptions));
    app.post("/status/:id/alert", cors(corsOptions));
    app.post("/status/:id/_log", cors(corsOptions));

    app.get("/users/:id", cors(corsOptions));
    app.get("/users/:id/location", cors(corsOptions), get.users.location);
    app.get("/users/:id/profile", cors(corsOptions), get.users.profile);
    app.get("/share/:id", cors(corsOptions));
    app.get("/status/:id", cors(corsOptions));

}

module.exports = routesConfig;