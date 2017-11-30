#!/bin/bash

tar czf food2molec.tar.gz main.js package.json public deploy.sh
scp food2molec.tar.gz root@165.227.189.182:~

rm food2molec.tar.gz

ssh root@165.227.189.182 << 'ENDSSH'
pm2 stop all
rm -rf food2molec
mkdir food2molec
tar xf food2molec.tar.gz -C easyio
rm food2molec.tar.gz
cd food2molec 
sudo npm install
pm2 start --name food2molec main.js
ENDSSH
