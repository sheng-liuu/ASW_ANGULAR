const express = require('express')
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/hackernews-angular'));

app.listen(process.env.PORT || 8080);

// PathLocationStrategy
app.get('/*', function(req, resp) {
    resp.sendFile(path.join(__dirname + '/dist/hackernews-angular/index.html'));
});

console.log('Console listening');