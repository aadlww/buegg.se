export APPLICATION_NAME="hammarobygg" &&
  heroku create --stack cedar --buildpack https://github.com/AdmitHub/meteor-buildpack-horse.git --region eu $APPLICATION_NAME &&
  heroku addons:create mongolab:sandbox -a $APPLICATION_NAME &&
  heroku config:add MONGO_URL=`heroku config:get MONGOLAB_URI -a $APPLICATION_NAME` &&
  heroku config:add ROOT_URL=http://$APPLICATION_NAME.herokuapp.com/ -a $APPLICATION_NAME &&
  heroku labs:enable http-session-affinity -a $APPLICATION_NAME
