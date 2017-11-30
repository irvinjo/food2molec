#!/bin/bash

tar czf easyio.tar.gz main.js package.json yarn.lock public LICENSE deploy.sh
scp easyio.tar.gz root@165.227.189.182:~

rm easyio.tar.gz

ssh root@165.227.189.182 << 'ENDSSH'
pm2 stop all
rm -rf easyio
mkdir easyio
tar xf easyio.tar.gz -C easyio
rm easyio.tar.gz
cd easyio 
yarn install
pm2 start --name easyio main.js
ENDSSH
