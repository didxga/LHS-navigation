/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates'
], function ($, _, Backbone, JST) {
  'use strict';

  var CardView = Backbone.View.extend({
    template: JST['app/scripts/templates/card.ejs'],

    tagName: 'section',

    className: 'card',

    events: {
      'click .btn_close': 'closeCard' 
    },

    initialize: function () {
      //this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      this.$el.html(this.template());
      $('.cards').append(this.$el);
    },

    closeCard: function() {
      this.undelegateEvents();

      this.$el.removeData().unbind(); 

      // Remove view from DOM
      this.remove();  
      Backbone.View.prototype.remove.call(this);
    }

  });

  return CardView;
});
