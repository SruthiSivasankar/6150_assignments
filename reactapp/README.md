`react map` is used in the jobs.js to map to each heading when the job link is clickedeach heading

How to run the code?

`npx create-react-app reactapp` : used to create a structure for the react app
`npm start`:Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

`npm test`:Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`npm run build` :Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

`Schema ` :defined in the index.js file
`Bycrtion` : is done for the password in "post"

Your app is ready to be deployed!

requirements: Mongodb should be installed properly.
Step1: Start by connecting the mongodb first. this happens in the index.js file using "mongoose.connect"

Step2: after the connection is sucessfull run the react app using npm start, it will start the react app on port 3000.

Step3: Connect to database using either atlas or Mongodb compass software
Mongodb compass is used to connect to database and we can save our collection here .
the given schema name is users, we can see the data created through the postman in this collection or database in the json format.

Step4: once connection is done open the postman for using the html like tags

Step5: "POST" will enter the data in the datbase, as we post validations are being checked in the index.js, the index.js uses validations.js to validate the given inputs,
"PUT" we can update the data using put and

    working of excepting the values from login page : in index.js ,a route for a POST request to "/user/login". When the route is accessed, it expects to receive the user's email and password as part of the request body.

Step6: when you add the data in the datbase we check that if such a email and password is present in the datbase or not.
IF NO SUCH DATA SFOUND THEN sshow popup as login unsuccessfull else shoe login successfull
