const express = require("express");
const router = express.Router();
const moment = require('moment');

module.exports = router;

const {JebaoDevice, JebaoDiscovery, JebaoActions} = require('jebao-dosing-pump-md-4.4');
let deviceConnected = false
let jebaoState = {}
let jebaoStateDate = null
let device = null;
const deviceIp = process.env.DEVICE_IP

device = new JebaoDevice(deviceIp, {autoReconnect: true})

device.on('error', err => {
    console.log('Error: ' + err);
    jebaoState = {}
    jebaoStateDate = null
});

device.on('data', data => {
    jebaoState = data
    jebaoStateDate = moment().format('yyyy-mm-dd hh:mm:ss');
    console.log('Received new data.')
    // console.log('Data: ' + JSON.stringify(data));
});

device.on('sent', async data => {
    // console.log('Data: ' + JSON.stringify(data));
    console.log(`Sent emitted`);
    // await processAction(device, actions.shift());
});

device.on('disconnected', async data => {
    deviceConnected = false
    jebaoState = {}
    jebaoStateDate = null
});

device.on('connected', async () => {
    console.log(`CONNECT 🚀`);
    await device.login();
    deviceConnected = true
    await device.retrieveData();
    console.log('DONE 🔥');
});

device.connect();

function _resReconnect(res) {
    device.connect();
    res.status(422)
        .json({
            message: "Not connected"
        });
}

function _resBadParameter(res) {
    res.status(422)
        .json({
            message: "Bad parameter"
        });
}

function _resSent(res) {
    res.json({
        message: "sent",
    });
}

router
    .get("/", async (req, res) => {
        if(!deviceConnected) {
            return _resReconnect(res)
        }
        await device.retrieveData();
        res.json({
            message: "status",
            data: jebaoState
        });
    })
    .get("/enable", async (req, res) => {
        if(!deviceConnected) {
            return _resReconnect(res)
        }
        await device.sendAction(JebaoActions.pump_enable);
        return _resSent(res)
    })
    .get("/disable", async (req, res) => {
        if(!deviceConnected) {
            return _resReconnect(res)
        }
        await device.sendAction(JebaoActions.pump_disable);
        return _resSent(res)
    })
    .get("/pump/:pump/start", async (req, res) => {
        if(!deviceConnected) {
            return _resReconnect(res)
        }
        console.log(`Start pump #${req.params.pump}`)
        if (req.params.pump == 1) {
            await device.sendAction(JebaoActions.pump1_start);
        } else if (req.params.pump == 2) {
            await device.sendAction(JebaoActions.pump2_start);
        } else if (req.params.pump == 3) {
            await device.sendAction(JebaoActions.pump3_start);
        } else if (req.params.pump == 4) {
            await device.sendAction(JebaoActions.pump4_start);
        } else {
            return _resBadParameter(res)
        }
        return _resSent(res)
    })
    .get("/pump/:pump/stop", async (req, res) => {
        if(!deviceConnected) {
            return _resReconnect(res)
        }
        console.log(`Stop pump #${req.params.pump}`)
        if (req.params.pump == 1) {
            await device.sendAction(JebaoActions.pump1_stop);
        } else if (req.params.pump == 2) {
            await device.sendAction(JebaoActions.pump2_stop);
        } else if (req.params.pump == 3) {
            await device.sendAction(JebaoActions.pump3_stop);
        } else if (req.params.pump == 4) {
            await device.sendAction(JebaoActions.pump4_stop);
        } else {
            return _resBadParameter(res)
        }
        return _resSent(res)
    })
    .get("/pump/:pump/enable_cron", async (req, res) => {
        if(!deviceConnected) {
            return _resReconnect(res)
        }
        console.log(`Enable cron for pump #${req.params.pump}`)
        if (req.params.pump === "1") {
            await device.sendAction(JebaoActions.pump1_cron_enable);
        } else if (req.params.pump === "2") {
            await device.sendAction(JebaoActions.pump2_cron_enable);
        } else if (req.params.pump === "3") {
            await device.sendAction(JebaoActions.pump3_cron_enable);
        } else if (req.params.pump === "4") {
            await device.sendAction(JebaoActions.pump4_cron_enable);
        } else {
            return _resBadParameter(res)
        }
        return _resSent(res)
    })
    .get("/pump/:pump/disable_cron", async (req, res) => {
        if(!deviceConnected) {
            return _resReconnect(res)
        }
        console.log(`Disable cron for pump #${req.params.pump}`)
        if (req.params.pump === "1") {
            await device.sendAction(JebaoActions.pump1_cron_disable);
        } else if (req.params.pump === "2") {
            await device.sendAction(JebaoActions.pump2_cron_disable);
        } else if (req.params.pump === "3") {
            await device.sendAction(JebaoActions.pump3_cron_disable);
        } else if (req.params.pump === "4") {
            await device.sendAction(JebaoActions.pump4_cron_disable);
        } else {
            return _resBadParameter(res)
        }
        return _resSent(res)
    });