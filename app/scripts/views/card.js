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

    el: $('.cards'),

    events: {},

    initialize: function () {
      //this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      this.$el.append(this.template());
    }
  });

  return CardView;
});
