const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "5vFW0BwD#0R_YeMGVspWbuuX6rICReZDOYbGitbSkOY7KJD7tdmg",
MONGODB: process.env.MONGODB || "mongodb://mongo:GoAcDbePrmPNKPlSpKkGrraMHJQVHpcZ@autorack.proxy.rlwy.net:15164",
};
