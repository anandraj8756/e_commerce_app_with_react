# E-commerce-app-with-React
Build a massive E-commerce app with React, Redux, Node, Express, MongoDB, Mongoose.


1. Create React App
   1. npx create-react-app e-commerce
   2. npm start
   3. Remove unused files
   
2. Create Rating and Product Component
   1. create components/Rating.js
   2. create div.rating
   3. style div.rating, span and last span
   4. Create Product component
   5. Use Rating component

3. Build Product Screen
   1. Install react-router-dom
   2. Use BrowserRouter and Route for Home Screen
   3. Create HomeScreen.js
   4. Add product list code there
   5. Create ProductScreen.js
   6. Add new Route from product details to App.js
   7. Create 3 columns for product image, info and action

4. Create Node.JS Server
   1. run npm init in root folder
   2. Update package.json set type: module
   3. Add .js to imports
   4. npm install express
   5. create server.js
   6. add start command as node backend/server.js
   7. require express
   After That your backend is ready but we need 
   to run backend server always wehen run the command

   run the command: npm install --save-dev nodemon

   npm start so we have to change in root package.json file

   Go to package.json and replace: 
   "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },

  To This 

  "scripts": {
    "start": "nodemon --watch backend --exec node --experimental-modules backend/server.js"
  },

   
   8. create route for / return backend is ready.
   9. move products.js from frontend to backend
   10. create route for /api/products
   11. return products
   12. run npm start   


5. Load Products From Backend
    1. edit HomeScreen.js
    2. define products, loading and error.
    3. create useEffect
    4. define async fetchData and call it
    5. install axios
    6. get data from /api/products
    7. show them in the list
    8. create Loading Component
    9. create Message Box Component
    10. use them in HomeScreen   


