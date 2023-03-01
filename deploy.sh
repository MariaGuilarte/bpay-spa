#!/bin/bash
npm run build
cd dist
find ./assets -regextype posix-extended -regex '.*\.(jpeg|gif|png|svg)$' -delete
touch .nojekyll
git add .
git commit -m "deploy"
git push origin master
zip -r bpay.zip . -x '*.git*'
