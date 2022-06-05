#!/bin/bash
node server.js &
chromium-browser --kiosk client.html
