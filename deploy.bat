ECHO Starting Deployment Script

ECHO Removing dist local folder
rmdir /s /q .\dist\
ECHO Cleaned up dist folder

ECHO Building Vue App
call npm run build
ECHO Finshed building App

ECHO Setting up git subtree...
git add dist && git commit -m "deploying dist to gh-pages"

ECHO Pushing branch to gh-pages
git subtree push --prefix dist origin gh-pages

ECHO Finished Deploying