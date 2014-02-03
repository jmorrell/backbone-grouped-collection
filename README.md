# backbone-grouped-collection

# THIS IS A WIP

Eventually this will be rolled into [Backbone.Obscura](https://github.com/jmorrell/backbone.obscura) but it's not ready yet.


[![Build Status](https://secure.travis-ci.org/jmorrell/backbone-grouped-collection.png?branch=master)](http://travis-ci.org/user/backbone-grouped-collection)

Create a read-only grouped version of a backbone collection that stays in sync.

```javascript
var superset = new Backbone.Collection(/* ... */);
var grouped = new GroupedCollection(superset);

// Given just a key, group by value alone
grouped.setGroupBy('key');

// Given a function, return a key to group by
grouped.setGroupBy(function(model) {
  return model.get('foo') + ' ' + model.get('bar');
});

// Clear grouping
grouped.clearGroupBy();
```

## Installation

### Usage with Bower

Install with [Bower](http://bower.io):

```
bower install backbone-grouped-collection
```

The component can be used as a Common JS module, an AMD module, or a global.

### Usage with Browserify

Install with npm, use with [Browserify](http://browserify.org/)

```
> npm install backbone-grouped-collection
```

and in your code

```javascript
var GroupedCollection = require('backbone-grouped-collection');
```

### Usage as browser global

You can include `backbone-grouped-collection.js` directly in a script tag. Make 
sure that it is loaded after underscore and backbone. It's exported as `GroupedCollection`
on the global object.

```HTML
<script src="underscore.js"></script>
<script src="backbone.js"></script>
<script src="backbone-grouped-collection.js"></script>
```

## Methods

#### new GroupedCollection

Initialize a new GroupedCollection by passing in the original collection.

```javascript
var grouped = new GroupedCollection(originalCollection);
```


## Events

`add`, `remove`, `change`, `reset` should fire as you expect.

## Testing

Install [Node](http://nodejs.org) (comes with npm) and Bower.

From the repo root, install the project's development dependencies:

```
npm install
bower install
```

Testing relies on the Karma test-runner. If you'd like to use Karma to
automatically watch and re-run the test file during development, it's easiest
to globally install Karma and run it from the CLI.

```
npm install -g karma
karma start
```

To run the tests in Firefox, just once, as CI would:

```
npm test
```

## License

MIT

