/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates'
], function ($, _, Backbone, JST) {
  'use strict';

  var NavView = Backbone.View.extend({
    template: JST['app/scripts/templates/nav.ejs'],

    tagName: 'section',

    className: 'nav',

    events: {
      //'click .btn_close': 'closeCard' 
    },

    initialize: function (options) {
      this.options = options;
      //this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      this.$el.html(this.template(this.model));
      $('.nav').append(this.$el);
    },

  });

  return NavView;
});
