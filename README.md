# server-middleware-mongoose

## The issue

For some reason, hot reload doesnt work properly when the application has serverMiddleware.

**Note. This issue is not only mongoose related but the entire script written in serverMiddleware is being reinstantiated.**

**ServerMiddleware Error: Cannot overwrite User model once compiled.**

Simply do the following 
```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```

And then navigate to /api/index.js and try to save the script again.

There was also a case when a telegram bot was connected to my application, at the first run it was working okay but when i saved it said that only one instance can be connected. I think this issue happens because instead of completely reloading the serverMiddleware it tries to patch everything up instead which causes duplicate instances of different classes/functions.
