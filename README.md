# Ingredient Inheritance:
Made using React.js and Node.js, complete with testing.
Node.js backend found here: [Ingredient Inheritance Server Github](https://github.com/thinkful-ei19/megan-ing-inheritance-server)

## Table of Contents:
* Description
* Link to Deployed Version
* Api Documentation
* Screenshots
* Brief Overview of Components
* Instructions
* Tech Used

### Description:
Ingredient Inheritance is a web app made to store secret family recipes. It is a password-protected site with protected endpoints so that users are only able to view their own recipes/no one outside the family can see them.

As a user, you are able to register, login, logout, create new recipes, view saved recipes, edit saved recipes, and delete saved recipes.  The nav bar also contains an instructions button for the user so you have guided/step-by-step instructions on how to use the app. 

As long as the user remains active on the page, their JWT will automatically refresh just before every hour (JWT expires in an hour on server side unless refreshed), allowing the user to remain on the main page with all their recipes.

If the user is inactive for an hour, the app will log them out on the client side, not refresh their JWT on the server side, and also prompt them 1 minute before the logout.  However, if they click the "Stay on Page" button in the prompt, the client will send off the request to refresh their JWT and the user will be able to remain on the page.

### Link to Deployed Version:
[Ingredient Inheritance](https://ingredient-inheritance.netlify.com/)

### API Documentation:

* /login creates auth token
* /refresh refreshes auth token before it expires
* /users creates a new user based on username and password from request body
* /recipes get request gets all recipes for a specific user based on userId
* /recipes post request posts a new recipe based on a users id
* /recipes/:id get request gets a specific recipe based on recipe id (in params) and userId
* /recipes/:id put request updates a specific recipe based on recipe id (in params) and userID
* /recipes/:id delete request deletes a specific recipe based on recipe id (in params) and userId

### Screenshots:

![ing-inh](https://user-images.githubusercontent.com/35779012/42347578-ea776b02-806b-11e8-9e09-5891195e7700.jpg)

![ing-inh-instructions](https://user-images.githubusercontent.com/35779012/42347580-ebad2a84-806b-11e8-82fa-323201c49604.jpg)

![ing-inh-loggedin](https://user-images.githubusercontent.com/35779012/42347584-edb9b2d4-806b-11e8-9ef6-02aa8bf6cc1c.jpg)


### Brief Overview of Components:

#### Main Component: src/App.js

##### Secondary Main Component: src/component/main-page.js

#### Login Screen (Route='/'):
    -User login form:  src/components/login.js
    -Redirect to Registration Screen Button: src/components/register-button.js

#### Registration Screen (Route='/'):
    -Registration Form: src/components/register-form.js
    -Redirect to Login Screen Button: src/components/login-button.js

#### Main Page (Route='/mainpage'):
    -Main Page Main Component: src/components/recipe-page.js
    -Header: src/components/header.js
    -Instruction Button: src/components/button.js
    -Create New Recipe Button: src/components/create-button.js
    -Logout Button: src/components/logout-button.js
    -Recipe Form: src/components/form.js
    -Recipe List (Saved Recipes): src/components/recipe-list.js

#### Instruction Page:
    -Instruction Text: src/components/instructions.js
    -Back to Main Page Button: src/components/instr-button.js

#### Timeout Warning:
    -Timeout Logic: src/App.js
    -Timeout Warning Text/Button to Stay on Page:src/components/timer-alert.js


### Instructions:
    -[Clone Server Repo](https://github.com/thinkful-ei19/megan-ing-inheritance-server) and follow the README.md instructions
    -Clone this repo
    -run npm install
    -**Double Check package.json for the following:**
            "dependencies": {
            "enzyme": "^3.3.0",
            "enzyme-adapter-react-16": "^1.1.1",
            "jwt-decode": "^2.2.0",
            "react": "^16.3.2",
            "react-dom": "^16.3.2",
            "react-redux": "^5.0.7",
            "react-router-dom": "^4.2.2",
            "react-scripts": "1.1.4",
            "react-test-renderer": "^16.3.2",
            "redux": "^4.0.0",
            "redux-form": "^7.3.0",
            "redux-thunk": "^2.2.0"
        },
        "scripts": {
            "start": "react-scripts start",
            "build": "react-scripts build",
            "test": "react-scripts test --env=jsdom",
            "eject": "react-scripts eject"
        }
    -npm start to start dev client (default: localhost:3000)
    
###Tech Used

#### Front-End
* React
* Redux
* HTML
* CSS

#### Back-End
* Node
* Express
* MongoDB
* Mongoose
* Passport
* Bcrypt

    
