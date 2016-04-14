export APPLICATION_NAME="hammarobygg" &&
  heroku create --stack cedar --buildpack https://github.com/tvararu/heroku-buildpack-meteorite.git --region eu $APPLICATION_NAME &&
  heroku addons:add mongolab:sandbox -a $APPLICATION_NAME &&
  heroku config:add MONGO_URL=`heroku config:get MONGOLAB_URI -a $APPLICATION_NAME` ROOT_URL=http://$APPLICATION_NAME.herokuapp.com/ -a $APPLICATION_NAME &&
  heroku labs:enable websockets -a $APPLICATION_NAME
