/*global define*/

define([
  'underscore'
], function (_) {
  'use strict';

  var SearchKeyword = function() {
    this.cache = [];
    var searchKeys = localStorage["searchkeys"];
    if(searchKeys && searchKeys.length > 0) {
      this.cache = JSON.parse(searchKeys);
    }
  };

  SearchKeyword.prototype = {

    constructor: SearchKeyword,

    store: function(data /*Json Object*/) {
      localStorage.setItem('searchkeys', JSON.stringify(this.cache));
    },

    get: /*JSON Object*/ function() {
      return this.cache;
    },

    put: function(s /*string*/) {
      this.cache.push(currentKey);
      localStorage.setItem('searchkeys', JSON.stringify(this.cache));
    },

    getLatest: /*JSON object*/ function(n /*optional: number*/) {
      var latest = arguments.length > 0 ? arguments[0] : 3;
      var result = [];
      for(var i=0; i<latest; i++) {
        result.push(this.cache[i]);
      }

      return result;
    }

  };

  return SearchKeyword;
});