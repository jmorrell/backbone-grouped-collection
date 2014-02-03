var assert = chai.assert;

var grouped, superset;

describe('grouped collection', function() {

  beforeEach(function() {
    superset = new Backbone.Collection(mockData);
    grouped = new GroupedCollection(superset);
  });


});

