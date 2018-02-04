# webapp-EAN
## A web application, which uses (or will) Express, Angular, and Node.

### Modules (also located in package.json)
1.  Express <br>
    * [Express API](https://expressjs.com/en/4x/api.html)
    * this is the standard web framework for NodeJS <br>
    * it is a Routing and Middleware framework.  Middleware is any functions that have access to the request object (req), the response object (res), and the next (next, which isn't always required) middleware function in the application’s request-response cycle

2. Nodemon <br>
    * this makes restarting the NodeJs server easier.  It will do it automatically when you type 'nodemon start' instead of 'node' <br>
    * I actually used a script in the package.json to run easier with 'npm start'

3. EJS <br>
    * [EJS API](https://www.npmjs.com/package/ejs)
    * Extended JS, which is a templating engine for Express, but is the closest one to HTML I could find.  I enjoy the syntax and am used to HTML, so I chose this over something like PUG, which is default for Express Generators. <br>

4. Path <br>
    * [Path API](https://nodejs.org/docs/latest/api/path.html)
    * provides utilities for working with file and directory paths <br>
