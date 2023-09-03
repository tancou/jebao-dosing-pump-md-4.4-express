![Logo](https://raw.githubusercontent.com/tancou/jebao-dosing-pump-md-4.4-express/main/dosing-pump-jebao-md-44.png)

# Jebao Dosing Pump MD 4.4 Express Server

This project exposes web endpoints using express to interact locally with Jebao Dosing Pump MD 4.4.

It use https://github.com/tancou/jebao-dosing-pump-md-4.4 library

## Device details

The Jebao Dosing Pump MD 4.4 device is internally an ESP which uses the GizWits platform. With this the device offers two ways of communication:
* The device connects to the gizwits cloud via MQTT and publishs the device data there, where the Android app gets the data from
* The device also offers local options via UDP for discovery and setup (Onboarding) and also a TCP interface for communication with the device and to request data

This library is focussing on the local LAN interface via UDP and TCP.

## LAN communication protocol

Please see [Protocol page](PROTOCOL.md).

## Usage

The library is documented in code (Apidoc) and example scripts show the usage

Available examples (see example folder):
* data.js: Script to connect to a device via IP, authenticate and retrieve data
* discovery.js: Script to discover devices in the network

## Todo

- Add send command tests
- Improve Protocol.md file
- Create a function to create custom send request instead of hard written strings
- Reverse cron requests
- Reverse calibration command

## Changelog

### 1.0.2 (2023-09-03)
* (tancou) Release v1.0.2 in order to test Github Actions

### 1.0.1 (2023-09-03)
* (tancou) Release v1.0.1
* (tancou) Fix typo and version

### 1.0.0 (2023-09-03)
* (tancou) Release v1.0.0

### 0.1.0 (2023-08-30)
* (tancou) Proof of concept to retrieve and send the correct data to the device.

### 0.0.0 (2023-08-30)
* (tancou) cloned from Apollon77 repo. Thanks to him for his work.

