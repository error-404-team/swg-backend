const {
    setUser, setGEOLocation, setDateTime,
    createShareLocation, setOS
} = require('./body')

function routesConfig (app) {
app.post('/user/:id', setUser);
app.post('/geoLocation/:id', setGEOLocation)
// app.post('/dateTime/:id', setDateTime)
// app.post('/shareLocation/:id', createShareLocation)
// app.post('/os/:id', setOS)
}

module.exports = routesConfig;