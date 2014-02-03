var _ = require('underscore');
var Backbone = require('backbone');
var proxyCollection = require('backbone-collection-proxy');

function Grouped(superset, options) {
  // Save a reference to the original collection
  this._superset = superset;

  // The idea is to keep an internal backbone collection with the grouped
  // set, and expose limited functionality.
  this._collection = new Backbone.Collection(superset.toArray());
  proxyCollection(this._collection, this);


}

var methods = {

  setGroupBy: function(getKey) {
    if (!getKey) {
      // clear grouping
    } else if (_.isFunction(getKey)) {
      // set grouping by function
    } else if (_.isString(getKey)) {
      // set grouping by key
    }
  },

  clearGroupBy: function() {
    this.setGroupBy(null);
  },

  getKeyForIndex: function() {

  }

};

// Build up the prototype
_.extend(Grouped.prototype, methods, Backbone.Events);

module.exports = Grouped;

