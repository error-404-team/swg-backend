const cors = require("cors");
const { post, get, d } = require('./controller')

const corsOptions = {
    origin: true,
    methods: ["POST", "GET", "PUT", "OPTIONS, DELETE"],
    credentials: true,
    maxAge: 0
};

function routesConfig(app) {
    app.options("/users/all", cors(corsOptions));
    app.options("/users/:id", cors(corsOptions));
    app.options("/users/:id/user", cors(corsOptions));
    app.options("/users/:id/location", cors(corsOptions));
    app.options("/users/:id/profile", cors(corsOptions));
    app.options("/users/:id/_log/user", cors(corsOptions));
    app.options("/users/:id/_log/location", cors(corsOptions));
    app.options("/users/:id/_log/profile", cors(corsOptions));
    app.options("/share/all", cors(corsOptions));
    app.options("/share/:id", cors(corsOptions));
    app.options("/share/:id/location", cors(corsOptions));
    app.options("/share/:id/date", cors(corsOptions));
    app.options("/share/:id/max_number", cors(corsOptions));
    app.options("/share/:id/sex", cors(corsOptions));
    app.options("/share/:id/owner", cors(corsOptions));
    app.options("/share/:id/member", cors(corsOptions));
    app.options("/share/:id/member/:uid", cors(corsOptions));
    app.options("/share/:id/chat", cors(corsOptions));
    app.options("/share/:id/_log/location", cors(corsOptions));
    app.options("/share/:id/_log/date", cors(corsOptions));
    app.options("/share/:id/_log/max_number", cors(corsOptions));
    app.options("/share/:id/_log/sex", cors(corsOptions));
    app.options("/share/:id/_log/owner", cors(corsOptions));
    app.options("/share/:id/_log/member/:uid", cors(corsOptions));
    app.options("/share/:id/_log/chat", cors(corsOptions));
    app.options("/status/all", cors(corsOptions));
    app.options("/status/:id", cors(corsOptions));
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
    app.options("/history/:id", cors(corsOptions));
    app.options("/history/all", cors(corsOptions));
    app.options("/history/:id/_log", cors(corsOptions));


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
    app.post("/history/:id", cors(corsOptions), post.history.id);
    app.post("/history/:id/_log", cors(corsOptions), post.history.log);

    app.get("/users/all", cors(corsOptions), get.users.all);
    app.get("/users/:id", cors(corsOptions), get.users.id);
    app.get("/users/:id/user", cors(corsOptions), get.users.user);
    app.get("/users/:id/location", cors(corsOptions), get.users.location);
    app.get("/users/:id/profile", cors(corsOptions), get.users.profile);
    app.get("/users/:id/_log/user", cors(corsOptions), get.users.log.user);
    app.get("/users/:id/_log/location", cors(corsOptions), get.users.log.location);
    app.get("/users/:id/_log/profile", cors(corsOptions), get.users.log.profile);
    app.get("/share/all", cors(corsOptions), get.share.all);
    app.get("/share/:id", cors(corsOptions), get.share.id);
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
    app.get("/status/all", cors(corsOptions), get.status.all);
    app.get("/status/:id", cors(corsOptions), get.status.id);
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
    // app.get("/history/:id", cors(corsOptions), get.history.id);
    // app.get("/history/all", cors(corsOptions), get.history.all);
    // app.get("/history/:id/_log", cors(corsOptions), get.history.log);

    app.delete("/users/:id/user", cors(corsOptions), d.users.user);
    app.delete("/users/:id/location", cors(corsOptions), d.users.location);
    app.delete("/users/:id/profile", cors(corsOptions), d.users.profile);
    app.delete("/users/:id/_log/user", cors(corsOptions), d.users.log.user);
    app.delete("/users/:id/_log/location", cors(corsOptions), d.users.log.location);
    app.delete("/users/:id/_log/profile", cors(corsOptions), d.users.log.profile);
    app.delete("/share/:id/location", cors(corsOptions), d.share.location);
    app.delete("/share/:id/date", cors(corsOptions), d.share.date);
    app.delete("/share/:id/max_number", cors(corsOptions), d.share.max_number);
    app.delete("/share/:id/sex", cors(corsOptions), d.share.sex);
    app.delete("/share/:id/owner", cors(corsOptions), d.share.owner);
    app.delete("/share/:id/member", cors(corsOptions), d.share.member);
    app.delete("/share/:id/member/:uid", cors(corsOptions), d.share.member);
    app.delete("/share/:id/chat", cors(corsOptions), d.share.chat);
    app.delete("/share/:id/_log/location", cors(corsOptions), d.share.log.location);
    app.delete("/share/:id/_log/date", cors(corsOptions), d.share.log.date);
    app.delete("/share/:id/_log/max_number", cors(corsOptions), d.share.log.max_number);
    app.delete("/share/:id/_log/sex", cors(corsOptions), d.share.log.sex);
    app.delete("/share/:id/_log/owner", cors(corsOptions), d.share.log.owner);
    app.delete("/share/:id/_log/member", cors(corsOptions), d.share.log.member);
    app.delete("/share/:id/_log/chat", cors(corsOptions), d.share.log.chat);
    app.delete("/status/:id/process", cors(corsOptions), d.status.process);
    app.delete("/status/:id/share", cors(corsOptions), d.status.share);
    app.delete("/status/:id/owner", cors(corsOptions), d.status.owner);
    app.delete("/status/:id/member", cors(corsOptions), d.status.member);
    app.delete("/status/:id/alert", cors(corsOptions), d.status.alert);
    app.delete("/status/:id/_log/process", cors(corsOptions), d.status.log.process);
    app.delete("/status/:id/_log/share", cors(corsOptions), d.status.log.share);
    app.delete("/status/:id/_log/owner", cors(corsOptions), d.status.log.owner);
    app.delete("/status/:id/_log/member", cors(corsOptions), d.status.log.member);
    app.delete("/status/:id/_log/alert", cors(corsOptions), d.status.log.alert);


}

module.exports = routesConfig;