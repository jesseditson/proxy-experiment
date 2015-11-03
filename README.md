# ES6 Proxy Experiment

A playground for using es6 proxies as the engine behind patching and diffing a tree of javascript objects.

This requires `babel-node` to be in your `$PATH` to run.

Also, it will not work pretty much anywhere useful at the moment, since proxies are behind flags in [nearly every js engine](https://github.com/tvcutsem/harmony-reflect#compatibility).

Once [better support](http://kangax.github.io/compat-table/es6/#Proxy) is available, I'll turn this in to a react replacement.

usage:

```
npm install
npm start
```

The basics of the deep proxy are in proxy.js, which will print which properties were changed when they are changed. Imagine that instead of using console.log, this were to perform an operation like re-rendering a vdom, then patching a document.

`example.js` shows examples of what this outputs when it is run in the comments below each operation.
