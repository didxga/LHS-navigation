/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'views/card'
], function ($, _, Backbone, JST, CardView) {
  'use strict';

  var SearchView = Backbone.View.extend({
    template: JST['app/scripts/templates/search.ejs'],

    el: $('.search'),  

    events: {
      'click .btn_search' : 'search'
    },

    initialize: function () {
      //this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      this.$el.html(this.template());
    },

    search: function(e) {
      e.preventDefault();
      new CardView().render(); 
      localStorage["searchkeys"]="abc"; 
    }

  }); 

  return SearchView;
});
