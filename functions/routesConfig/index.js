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
    app.options("/status/:id/owner", cors(corsOptions));
    app.options("/status/:id/member", cors(corsOptions));
    app.options("/status/:id/alert", cors(corsOptions));
    app.options("/status/:id/_log/process", cors(corsOptions));
    app.options("/status/:id/_log/share", cors(corsOptions));
    app.options("/status/:id/_log/owner", cors(corsOptions));
    app.options("/status/:id/_log/member", cors(corsOptions));
    app.options("/status/:id/_log/alert", cors(corsOptions));


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
    app.post("/status/:id/process", cors(corsOptions), post.status.process);
    app.post("/status/:id/share", cors(corsOptions), post.status.share);
    app.post("/status/:id/owner", cors(corsOptions), post.status.owner);
    app.post("/status/:id/member", cors(corsOptions), post.status.member);
    app.post("/status/:id/alert", cors(corsOptions), post.status.alert);
    app.post("/status/:id/_log/process", cors(corsOptions), post.status.log.process);
    app.post("/status/:id/_log/share", cors(corsOptions), post.status.log.share);
    app.post("/status/:id/_log/owner", cors(corsOptions), post.status.log.owner);
    app.post("/status/:id/_log/member", cors(corsOptions), post.status.log.member);
    app.post("/status/:id/_log/alert", cors(corsOptions), post.status.log.alert);


    app.get("/users/:id/user", cors(corsOptions), get.users.user);
    app.get("/users/:id/location", cors(corsOptions), get.users.location);
    app.get("/users/:id/profile", cors(corsOptions), get.users.profile);
    app.get("/users/:id/_log/user", cors(corsOptions), get.users.log.user);
    app.get("/users/:id/_log/location", cors(corsOptions), get.users.log.location);
    app.get("/users/:id/_log/profile", cors(corsOptions), get.users.log.profile);
    app.get("/share/:id/location", cors(corsOptions), get.share.location);
    app.get("/share/:id/date", cors(corsOptions), get.share.date);
    app.get("/share/:id/max_number", cors(corsOptions), get.share.max_number);
    app.get("/share/:id/sex", cors(corsOptions), get.share.sex);
    app.get("/share/:id/owner", cors(corsOptions), get.share.owner);
    app.get("/share/:id/member", cors(corsOptions), get.share.member);
    app.get("/share/:id/chat", cors(corsOptions), get.share.chat);
    app.get("/share/:id/_log/location", cors(corsOptions), get.share.log.location);
    app.get("/share/:id/_log/date", cors(corsOptions), get.share.log.date);
    app.get("/share/:id/_log/max_number", cors(corsOptions), get.share.log.max_number);
    app.get("/share/:id/_log/sex", cors(corsOptions), get.share.log.sex);
    app.get("/share/:id/_log/owner", cors(corsOptions), get.share.log.owner);
    app.get("/share/:id/_log/member", cors(corsOptions), get.share.log.member);
    app.get("/share/:id/_log/chat", cors(corsOptions), get.share.log.chat);
    app.get("/status/:id/process", cors(corsOptions), get.status.process);
    app.get("/status/:id/share", cors(corsOptions), get.status.share);
    app.get("/status/:id/owner", cors(corsOptions), get.status.owner);
    app.get("/status/:id/member", cors(corsOptions), get.status.member);
    app.get("/status/:id/alert", cors(corsOptions), get.status.alert);
    app.get("/status/:id/_log/process", cors(corsOptions), get.status.log.process);
    app.get("/status/:id/_log/share", cors(corsOptions), get.status.log.share);
    app.get("/status/:id/_log/owner", cors(corsOptions), get.status.log.owner);
    app.get("/status/:id/_log/member", cors(corsOptions), get.status.log.member);
    app.get("/status/:id/_log/alert", cors(corsOptions), get.status.log.alert);

}

module.exports = routesConfig;