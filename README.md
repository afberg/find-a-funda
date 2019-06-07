# find-a-funda
This app will let you snerach for houses for sale on funda and lets you scroll through the initial pictures. It works best on mobile, (or in the mobile emulator in your browser), since the results slider relies on an X-axis scroll. It also hasn't been tested in older browsers, but as long as you stay away from internet explorer you should be fine.

## TODO
There are several things that should be done to make this setup work better, here are some that come to mind:
1. Add the possibility of keyboard control & buttons, for non touch devices
   
   Desktop support is very limited right now because of the reliance on swiping gestures. It works if you have a touchpad where you can scroll horizontally, but it's hardly an ideal solution. Ideally the slider should be navigateable via the keyboard arrows and with chevron-buttons attatched to the sides.
2. Add support for older browsers
   
   Many of the CSS rules used are not supported by older browsers and need polyfills or to be rewritten completetly.
3. Add build scripts
   
   Right now the script only runs in development mode via webpack-dev-server. The best way to deploy the application would be to export the minified static assets.
4. Error handling
   
   Right now the application is a happy-flow implementation. This should, obviously, be fixed.
5. Pagination

   Right now the application only retrieves the first 15 requests it can get from the API. It should retrieve more as the user scrolls through the list.
6. CORS handling
   
   _More info below_
7. The bugs

   As with all software this is riddled with small bugs, hopfully you won't come across any. Or maybe you will. Either way, they shouldn't be there.

## Installation

Simply clone the repository to a location of your choice, run an `npm install` and you are good to go... almost.

Since the funda API doesn't allow CORS (hrm hrm...) most modern browsers will block the application from receiving any requests. If all you're seeing is a spinning stroopwafel, then that means we're getting opaque responses from the server or they are being blocked.

A more permanent solution would be to proxy any API requests via a web-server on the local machine, but for now you will have to run your browser with the `--disable-web-security` -flag. For chrome on a mac this can be done with the following command 

*Make sure all browser windows are closed*

`<Chrome Installation Folder>/Google Chrome --args --user-data-dir=/tmp/chrome_dev_test --disable-web-security`

On my own laptop the command looked like this:

`/Applications/Google Chrome.app/Contents/MacOS/Google Chrome --args --user-data-dir=/tmp/chrome_dev_test --disable-web-security`

After that just run `npm run start` to start the development server and you are golden. Look in the output for the port being used on your local machine, (default adress is localhost:8080).

## Using it

It should be pretty straight forward, but just enter the name of a city into the search box and the application will pull up the first 15 results from funda for that area. Then you can scroll through the results.

That's it, Good luck!
