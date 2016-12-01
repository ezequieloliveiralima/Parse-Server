var env             = process.env;
var express         = require('express');
var ParseServer     = require('parse-server').ParseServer;
var ParseDashboard  = require('parse-dashboard');
var app             = express();

var api = new ParseServer({
    databaseURI : env.OPENSHIFT_MONGODB_DB_URL + env.OPENSHIFT_APP_NAME
    , cloud     : __dirname + '/main.js'
    , appId     : env.PARSE_APPLICATION_ID
    , masterKey : env.PARSE_MASTER_KEY
    , serverURL : env.PROTOCOL + env.OPENSHIFT_APP_DNS + '/parse'
});


var dashboard = new ParseDashboard({
    "apps": [{
        "serverURL"   : env.PROTOCOL + env.OPENSHIFT_APP_DNS + '/parse'
        , "appId"     : env.PARSE_APPLICATION_ID
        , "masterKey" : env.PARSE_MASTER_KEY
        , "appName"   : env.PARSE_APP_NAME
        }]
    , "users": [{
        "user"  : env.PARSE_DASHBOARD_USER
        , "pass": env.PARSE_DASHBOARD_PASS
    }]
}, Boolean(env.ALLOW_INSECURE_HTTP));

app.use('/parse', api);
app.use('/dashboard', dashboard);

app.listen(env.NODE_PORT || 3000, env.NODE_IP || 'localhost', function () {
    console.log(`Application worker ${process.pid} started...`);
});
