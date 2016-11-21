/*global define*/

define([
  'underscore',
  'backbone',
  'models/Card'
], function (_, Backbone, CardModel) {
  'use strict';

  var CardCollection = Backbone.Collection.extend({
    model: CardModel
  });

  return CardCollection;
});
