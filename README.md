# It Happens

[![Dependencies](https://david-dm.org/garrettn/it-happens.svg?style=flat)](https://david-dm.org/garrettn/it-happens)
[![devDependencies](https://david-dm.org/garrettn/it-happens/dev-status.svg?style=flat)](https://david-dm.org/garrettn/it-happens#info=devDependencies)

It Happens is a simple app that helps you keep track of when things happen in your life. It was created specifically as a packaged app for Firefox OS.

## See a problem?

It Happens is an open-source project. If you see a problem or something that could be improved, please [create an issue](https://github.com/garrettn/it-happens/issues/new) or send a pull request. Help me make this app better!

## Development

To work on this app, you'll need [Node.js](https://nodejs.org/) ([io.js](https://iojs.org) probably works too) and [Bower](http://bower.io/) installed. In the root directory of the project, run

```sh
$ npm install && bower install
```

Once the dependencies are installed, you'll have four commands available for building the app:

- `npm run build-dev`: Create a development build, including source maps.
- `npm start`: Create a development build, watch files for changes, and rebuild automatically upon change.
- `npm run build`: Create a production build. Scripts and stylesheets are minified, and no source maps are included.
- `npm run pack`: Create a production build and then create a zip archive of the app for submission to the marketplace.

The app is built using [Webpack](http://webpack.github.io). The built app goes into the `dist` folder. Once you've created a build, open the **project root directory** in the Firefox WebIDE. The app is configured to have the WebIDE look in `dist` for the built app files (see [the WebIDE documentation](https://developer.mozilla.org/en-US/docs/Tools/WebIDE/Running_and_debugging_apps#Running_a_custom_build_step) for details on how this works). You can now push the app to a simulator or device.

## License

The source code is licensed under the [GNU GPLv3](LICENSE.txt). The app icon is a modified form of an icon found in a [flat icon set from Elegant Themes](http://www.elegantthemes.com/blog/freebie-of-the-week/beautiful-flat-icons-for-free), which is available under the GPL.
