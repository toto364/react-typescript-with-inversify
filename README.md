# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# How this repo was composed

This repo was created as followings:
1. Created a new [ReactJS](https://reactjs.org) app
```
npx create-react-app
```
2. Installed [TypeScript](https://www.typescriptlang.org)
```
npm install --save-dev typescript ts-loader source-map-loader
npm install @types/react @types/react-dom
npx tsc --init
```
3. Converted `js,jsx` files to `ts,tsx` files, and also fixed code as compiler instructed
4. Created `./src/types.d.ts` file
```ts
declare module "*.svg"
```
5. Installed [inversifyJS](https://inversify.io)
```
npm install inversify reflect-metadata --save
```
6. Updated `tsconfig.json` as followings:
```json
{
    "compilerOptions": {
        "target": "es5",
        "lib": ["es6", "dom"],
        "types": ["reflect-metadata"],
        "module": "commonjs",
        "moduleResolution": "node",
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true
    }
}
```
8. Followed an example at https://inversify.io (some ninja warrior stuffs)
9. Installed [react-app-rewired](https://www.npmjs.com/package/react-app-rewired) and [customize-cra](https://github.com/arackaf/customize-cra)
```
npm install --save-dev react-app-rewired customize-cra 
```
10. Updated scripts in `package.json`
```json
{
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  }
}
```
11. Installed babel plugins to use decorators and to enable metadata transforming
```
npm install --save-dev @babel/plugin-proposal-decorators @babel/preset-typescript babel-plugin-transform-typescript-metadata
```
- ref: https://github.com/leonardfactory/babel-plugin-transform-typescript-metadata#readme
12. Created `.babelrc`
```json
{
    "presets": [
        [
            "@babel/preset-typescript",
            {
                "onlyRemoveTypeImports": true
            }
        ]
    ],
    "plugins": [
        "babel-plugin-transform-typescript-metadata",
        [
            "@babel/plugin-proposal-decorators",
            {
                "version": "legacy"
            }
        ],
        [
            "@babel/plugin-proposal-class-properties",
            {
                "loose": true
            }
        ]
    ]
}
```
13. Created `config-overrides.js`
```js
const {
    useBabelRc,
    override,
} = require("customize-cra");

module.exports = override(
    useBabelRc(),
);
```
14. To prevent an enormous amount of warning from `rca` with `webpack`, added `GENERATE_SOURCEMAP` variable in `.env`
```
GENERATE_SOURCEMAP=false
```
15. and **Voila !!**