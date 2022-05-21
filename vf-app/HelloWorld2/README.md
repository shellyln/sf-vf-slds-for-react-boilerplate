# HelloWorld2

* "Lightning Design System for React" + "Create React App" + "React Router" with TypeScript example
  * Dynamic chunk loading

## Problems and Solutions

* SLDS React is requesting a Webpack configuration change (to perform a conversion under node_modules), but I don't want to eject it.
  * Using CRACO. CRACO v6 is not compatible with CRA v5, so v7-alpha is installed.
  * The configuration file is copied from `react-scripts/config/webpack.config.js`.
* Unable to successfully retrieve the built script files and styles.
  * In `package.json`, set `homepage` to the path of the static resource.
  * It is safe to remove the hash of static resource given by Salesforce.
* The SLDS assets will be 404.
  * Get it in Visualforce using `{!URLFOR($Asset.SLDS, 'assets')}` and set it to a global variable.
* Source map does not load.
  * Edit tail of `force-app/main/default/staticresources/HelloWorld2/static/main.js`:
    ```js
    //# sourceMappingURL=main.??????.js.map
    ```
    to
    ```js
    //# sourceMappingURL=main.js.map
    ```

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
