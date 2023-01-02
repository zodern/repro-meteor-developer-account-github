Repro for issue with signing using meteor developer account with GitHub

Repro steps:
1. Clone repo
2. Run `npm install`
3. Go to https://cloud.meteor.com/authorized-domains and create a new domain.  Set the redirect URL to `http://localhost:3000/_oauth/meteor-developer`
4. Create a settings.json file, using the client id and secret from the previous step

```
{
  "meteor-developer-accounts": {
    "clientId": "<client id>",
    "secret": "<secret>"
  }
}
```
5. Start the app with `npm start`

It works if you login using a Meteor account you are already logged in to, or login using email/password. If you instead login using GitHub, it doesn't work, and has no error.
