# [Create SSH Keys](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)
```
ssh-keygen -t rsa -b 4096 -C "568592315@qq.com"
eval "$(ssh-agent -s)"
ssh-add -K ~/.ssh/id_rsa
ls -a -l ~/.ssh
ssh -T git@github.com
```


# Publish application to Heroku.
1. Install Heroku CLI. by runing cmd: ```brew tap heroku/brew && brew install heroku```
2. Login (Sign up) Heroku account. by runing cmd: ```heroku login```
3. Create app on Heroku. by runing cmd: ```heroku create app_name```
4. Change listening port to 'process.env.PORT'
5. push to githu and then run cmd ```git push heroku master```