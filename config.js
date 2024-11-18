const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Vy12lawY#jjuzzjMFXYN3ES0ovg34hJfx0OTE8sLAdB75nsYwDmo",
MONGODB: process.env.MONGODB || "mongodb://mongo:EdhPLwBbfhyOLwmgdkRatAcogBsKbakN@autorack.proxy.rlwy.net:23902",
};
