module.exports = function (grunt) {
  grunt.initConfig({

    browserify: {
      basic: {
        src: [],
        dest: './backbone-grouped-collection.js',
        options: {
          external: [ 'underscore', 'backbone' ],
          alias: ['./index.js:backbone-grouped-collection']
        }
      }
    },

    umd: {
      default: {
        src: './backbone-grouped-collection.js',
        template: './templates/umd.hbs',
        objectToExport: "require('backbone-grouped-collection')",
        globalAlias: 'GroupedCollection',
        deps: {
          'default': ['_', 'Backbone'],
          amd: ['underscore', 'backbone'],
          cjs: ['underscore', 'backbone'],
          global: ['_', 'Backbone']
        },
        browserifyMapping: '{"backbone":Backbone,"underscore":_}'
      }
    }

  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-umd');

  grunt.registerTask('default', ['browserify', 'umd']);
};
