#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

cp -r ./dist/* ./../pandyasdhaval.github.io_DEPLOY/pandyasdhaval.github.io/

# navigate into the build output directory
# cd dist
cd ./../pandyasdhaval.github.io_DEPLOY/pandyasdhaval.github.io/

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:pandyasdhaval/pandyasdhaval.github.io.git deploy

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd ..
