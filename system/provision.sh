#!/usr/bin/env bash

# Add MongoDB setup stuff
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list

# Update
sudo apt-get update
sudo apt-get install -y python-software-properties
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update

# Install MongoDB
sudo apt-get install -y mongodb-org
# sudo apt-get install -y nodejs npm
# 
# sudo npm install --global gulp

