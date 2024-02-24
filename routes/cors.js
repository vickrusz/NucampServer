const cors = require('cors');

const whitelist = ['http://localhost:3000', 'https://localhost:3443'];
/**
 * Function to generate CORS options based on the request and callback.
 *
 * @param {Object} req - The request object
 * @param {Function} callback - The callback function
 * @return {undefined} 
 */
const corsOptionsDelegate = (req, callback) => {
    let corsOptions;
    console.log(req.header('Origin'));
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };
    } else {
        corsOptions = { origin: false };
    }
    callback(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);