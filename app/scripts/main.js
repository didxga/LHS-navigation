/*global require*/
'use strict';

require.config({
  shim: {
    bootstrap: {
      deps: ['jquery'],
      exports: 'jquery'
    },
    "jquery.paperfold": {
      deps: ['jquery']
    }
  }, 
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/lodash/dist/lodash',
    bootstrap: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap',
    "jquery.paperfold": '../bower_components/paperfold'
  }
});

requirejs.onError = function (err) {
    console.log(err.requireType);
    console.log('modules: ' + err.requireModules);
};
 
require([
  'backbone',
  'views/search',
  'views/card',
  'views/nav',
  'models/card',
  'models/nav',
  'localstorage/searchKeyword',
  'jquery.paperfold'
], function (Backbone, SearchView, CardView, NavView, CardModel, NavModel, SearKeyword) {
  Backbone.history.start();
  new SearchView().render(); 
  new NavView({"model": new NavModel()}).render();
  var searchKeys = localStorage["searchkeys"];
  if(searchKeys && searchKeys.length > 0) {
    var searchKeyArray = JSON.parse(searchKeys);
    var l=searchKeyArray.length; 
    for(let i=0; i<l; i++) {
      let cardmodel = new CardModel({"title": searchKeyArray[i]});
      new CardView({"model": cardmodel}).render();
    }
  }
  var paperfold = $('.comment-list').paperfold();
  $('.comment').click(paperfold.toggle); 
});

