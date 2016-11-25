/*global define*/

define([
  'underscore',
  'backbone'
], function (_, Backbone) {
  'use strict';

  var CardModel = Backbone.Model.extend({
    url: '',

    initialize: function() {
    },

    defaults: {
      title: ''
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

  return CardModel;
});
