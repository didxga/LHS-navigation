/*global require*/
'use strict';

require.config({
  shim: {
    bootstrap: {
      deps: ['jquery'],
      exports: 'jquery'
    },
  }, 
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/lodash/dist/lodash',
    bootstrap: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap' }
});

requirejs.onError = function (err) {
    console.log(err.requireType);
    console.log('modules: ' + err.requireModules);
};
 
require([
  'backbone',
  'views/search'
], function (Backbone, SearchView) {
  Backbone.history.start();
  new SearchView().render();  
});
