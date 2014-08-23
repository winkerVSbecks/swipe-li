angular.module('swipeLi')
  .provider('hammerRemote', function HammerRemoteProvider() {

    'use strict';

    var self = this;
    this.globalOptions = {};

    this.$get = ['$q', function($q) {

      var hammerStore = { count: 0 },
          exports = {},
          initStoreForId,
          resolveInStoreById,
          baseId = '__HAMMER_ID_'

      exports.globalOptions = self.globalOptions;

      exports.getHammer = function(id) {
        if(!hammerStore.hasOwnProperty(id)) {
          initStoreForId(id);
        }
        return hammerStore[id].deferred.promise;
      };

      exports.register = function(element, options) {
        var hammer = new window.Hammer(element, options);
        var id = baseId + hammerStore.count + '__';
        hammerStore.count++;
        if(!hammerStore.hasOwnProperty(id)) {
          initStoreForId(id);
        }
        if(hammerStore[id].isResolved) {
          initStoreForId(id);
        }
        resolveInStoreById(hammer, id);
        return id;
      };

      exports.unregister = function(id) {
        if(hammerStore.hasOwnProperty(id)) {
          delete hammerStore[id];
        }
      };

      initStoreForId = function(id) {
        hammerStore[id] = {
          deferred: $q.defer(),
          isResolved: false
        };
      };

      resolveInStoreById = function(hammer, id) {
        hammerStore[id].deferred.resolve(hammer);
        hammerStore[id].isResolved = true;
      };

      return exports;
    }];

    return this;
  });