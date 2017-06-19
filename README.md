# node-social-auth
This is a starting point for my node applications that will use Facebook and twitter to authenticate

To install:

1) clone this repository
2) Create a new config file in like so:

app/config/development.json

...this should look like this:

```json
{
	"host": "http://localhost:3000",
	"dbURI": "<your mongoLab.com database URI>",
	"sessionSecret": "catscanfly",
	"fb": {
		"clientID": "<facebook app ID key>",
		"clientSecret": "<facebook app secret key>",
		"callbackURL": "//localhost:3000/auth/facebook/callback",
		"profileFields": ["id", "displayName", "photos"]
	},
	"twitter": {
		"consumerKey": "<twitter consumer key>",
		"consumerSecret": "<twitter consumer secret key>",
		"callbackURL": "//localhost:3000/auth/twitter/callback",
		"profileFields": ["id", "displayName", "photos"]
	}
}
```

3) Create a new database at https://mlab.com and add details to the config file. 
4) Register your app with Facebook and twitter adding your api details to the config
5) Install and run yarn
6) Run 'yarn start' and visit http://localhost:3000
