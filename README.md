# Shopping Basket README

This code test solution was written in React/JavaScript and built with Webpack. Styling was done with Semantic UI React and CSS.

# Before running the program

Clone the repository onto your local machine. Then, run `npm install` in the command line to install all dependencies.

# Running the program

To run the program, execute `npm start` in the command line. It will start the local server and open up the app in a browser window.

# Architecture

This app is made up of five components. They are located in the `src/components` folder.

  `App.js`
  The main parent component.

  `Container.js`
  The container for all other components. Keeps track of items added and renders child components inside a grid. Holds functions for adding/removing items and removing all items.

  `Item.js`
  This component represents a grocery item and is contained within the 'basket'. It has state to keep track of its amount, as well as functions to increase or decrease its amount.

  `ItemForm.js`
  Form for adding an item to the basket. Allows a user to enter information about the type of item they want to add. When submitted, the item is added to the state in Container.js and rendered by ItemList.js.

  `ItemList.js`
  Stateless functional component that renders Item components to a list.

# Directory structure

  `src`
  Contains components, index.html, index.js, and stylesheet.

  `src/components`
  Contains React components.

  `root`
  package.json, webpack.config.js, README.md, and Node modules folder are contained at the root level.
