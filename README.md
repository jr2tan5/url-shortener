## Demo webapp link
Publicly Accessible Hosting Site: [Click Here](https://url-shortener-exercise.herokuapp.com/ "URL-Shortener Website")

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run test`

Run the built-in backend util unit test case

### `npm run start`
Used in production on heroku. This starts the backend server which is automatically interfaced with the frontend build folder under production environment. 

### `npm run heroku-prebuild`
Used in production on heroku. Install the dependencies of both the frontend and backend codes and additionally run the example unit test cases for backend utils. Automatically runned when uploaded to heroku.

### `npm run heroku-prebuild`
Used in production on heroku. Builds the production version of the frontend by removing unnecessary spaces and new lines. This optimized frontend folder will then be moved to the backend folder where it is found and serviced by the backend when npm run start is called and the service environment is in production.

### `npm run dev`

Runs the backend server on localhost:5000 and the frontend server on localhost:3000. In addition, sets the node environment to development which makes it load the development environmental files

