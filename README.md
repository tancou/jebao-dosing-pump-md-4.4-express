![Logo](https://raw.githubusercontent.com/tancou/jebao-dosing-pump-md-4.4-express/main/dosing-pump-jebao-md-44.png)

# Jebao Dosing Pump MD 4.4 Express Server

This project exposes web endpoints using express to interact locally with Jebao Dosing Pump MD 4.4.

It use https://github.com/tancou/jebao-dosing-pump-md-4.4 library

## Device details

The Jebao Dosing Pump MD 4.4 device is internally an ESP which uses the GizWits platform. With this the device offers two ways of communication:
* The device connects to the gizwits cloud via MQTT and publishs the device data there, where the Android app gets the data from
* The device also offers local options via UDP for discovery and setup (Onboarding) and also a TCP interface for communication with the device and to request data

This project aims to connect, query the status of and send commands to the device.

## Usage

```bash
DEVICE_IP=192.168.0.xx npm start
```

You can change the port too
```bash
PORT=8000 DEVICE_IP=192.168.0.xx npm start
```

## Endpoints

- Server app on http://127.0.0.1:8000
- Enable on http://127.0.0.1:8000/enable
- Disable on http://127.0.0.1:8000/disable
- Start Pump 1 on http://127.0.0.1:8000/pump/1/start
- Start Pump 2 on http://127.0.0.1:8000/pump/2/start
- Start Pump 3 on http://127.0.0.1:8000/pump/3/start
- Start Pump 4 on http://127.0.0.1:8000/pump/4/start
- Stop Pump 1 on http://127.0.0.1:8000/pump/1/stop
- Stop Pump 2 on http://127.0.0.1:8000/pump/2/stop
- Stop Pump 3 on http://127.0.0.1:8000/pump/3/stop
- Stop Pump 4 on http://127.0.0.1:8000/pump/4/stop
- Enable cron for Pump 1 on http://127.0.0.1:8000/pump/1/enable_cron
- Enable cron for Pump 2 on http://127.0.0.1:8000/pump/2/enable_cron
- Enable cron for Pump 3 on http://127.0.0.1:8000/pump/3/enable_cron
- Enable cron for Pump 4 on http://127.0.0.1:8000/pump/4/enable_cron
- Disable cron for Pump 1 on http://127.0.0.1:8000/pump/1/disable_cron
- Disable cron for Pump 2 on http://127.0.0.1:8000/pump/2/disable_cron
- Disable cron for Pump 3 on http://127.0.0.1:8000/pump/3/disable_cron
- Disable cron for Pump 4 on http://127.0.0.1:8000/pump/4/disable_cron

## Todo

- Add tests
- Dockerize the project

## Changelog

### 1.0.0 (2023-09-03)
* (tancou) Release v1.0.0