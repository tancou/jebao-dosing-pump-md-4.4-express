const express = require("express");
const router = require('./router');
const debug = require('debug');

const morgan = require('morgan');
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 8000;

if (process.env.DEVICE_IP === undefined || process.env.DEVICE_IP === null) {
    console.error('You must define a device IP')
    console.log('Use DEVICE_IP=192.168.0.x node start')
    process.exit(1)
}

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(router); // Requests processing will be defined in the file router
app.listen(port, () => {
    console.log('Server app on http://127.0.0.1:' + port)
    console.log('Enable on http://127.0.0.1:' + port + '/enable')
    console.log('Disable on http://127.0.0.1:' + port + '/disable')
    console.log('Start Pump 1 on http://127.0.0.1:' + port + '/pump/1/start')
    console.log('Start Pump 2 on http://127.0.0.1:' + port + '/pump/2/start')
    console.log('Start Pump 3 on http://127.0.0.1:' + port + '/pump/3/start')
    console.log('Start Pump 4 on http://127.0.0.1:' + port + '/pump/4/start')
    console.log('Stop Pump 1 on http://127.0.0.1:' + port + '/pump/1/stop')
    console.log('Stop Pump 2 on http://127.0.0.1:' + port + '/pump/2/stop')
    console.log('Stop Pump 3 on http://127.0.0.1:' + port + '/pump/3/stop')
    console.log('Stop Pump 4 on http://127.0.0.1:' + port + '/pump/4/stop')
    console.log('Enable cron for Pump 1 on http://127.0.0.1:' + port + '/pump/1/enable_cron')
    console.log('Enable cron for Pump 2 on http://127.0.0.1:' + port + '/pump/2/enable_cron')
    console.log('Enable cron for Pump 3 on http://127.0.0.1:' + port + '/pump/3/enable_cron')
    console.log('Enable cron for Pump 4 on http://127.0.0.1:' + port + '/pump/4/enable_cron')
    console.log('Disable cron for Pump 1 on http://127.0.0.1:' + port + '/pump/1/disable_cron')
    console.log('Disable cron for Pump 2 on http://127.0.0.1:' + port + '/pump/2/disable_cron')
    console.log('Disable cron for Pump 3 on http://127.0.0.1:' + port + '/pump/3/disable_cron')
    console.log('Disable cron for Pump 4 on http://127.0.0.1:' + port + '/pump/4/disable_cron')
});

// const actions = [
//     {
//         message: 'Start Pump 2 👍',
//         action: JebaoActions.pump2_start,
//         delay: 3000 // applied before action
//     },
//     {
//         message: 'Stop Pump 2 👎',
//         action: JebaoActions.pump2_stop,
//         delay: 5000
//     }
// ];