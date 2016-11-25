/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'views/card',
  'models/card'
], function ($, _, Backbone, JST, CardView, CardModel) {
  'use strict';

  var SearchView = Backbone.View.extend({
    template: JST['app/scripts/templates/search.ejs'],

    el: $('.search'),  

    events: {
      'keydown .search_box' : 'search'
    },

    initialize: function () {
      //this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      this.$el.html(this.template());
    },

    search: function(e) {
      
      var code = e.keyCode || e.which
      if(code == 13) {
        e.preventDefault();
        new CardView({'model': new CardModel({'title': code})}).render(); 
        var currentKey = $(this.el).find("#search_box").val();
        var searchKeys = localStorage.getItem('searchkeys'); 
        if(!searchKeys) {
          searchKeys = "[]";
        }
        searchKeys = JSON.parse(searchKeys);
        searchKeys.push(currentKey);
        localStorage.setItem('searchkeys', JSON.stringify(searchKeys));
      }
      
    }

  }); 

  return SearchView;
});
