Bower Component to KIELER/KLay Layered JavaScript
===

The KLay JS project provides our Java-based layout algorithms to the JavaScript community. We leverage the Java to JavaScript compiler of the Google Web Toolkit (GWT) to convert our Java code into a JavaScript library. This allows you to use the full power of our layout algorithms in pure JavaScript.

More details about KLayJS [here](http://rtsys.informatik.uni-kiel.de/confluence/pages/viewpage.action?pageId=8651755).

Using
---

Add `klay-js` as a Bower dependency and run `bower install` on your
project directory.

Building (development only)
---

The default Grunt routine will download the last nightly build of
KLayJS from KIELER and update `klayjs_worker.js`. Just run `grunt`.
