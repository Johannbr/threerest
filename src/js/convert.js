"use strict";

import Promise from "bluebird";

export default function convert(ConvertClass) {
  return function(target, key, descriptor) {

    descriptor.value.convertBefore = function(obj) {

      let instance = new ConvertClass();
      if (obj) {
        for (var prop in obj) {
          if (instance.hasOwnProperty(prop) && typeof instance[prop] != "function") {
            instance[prop] = obj[prop];
          }
        }
      }
      return instance;
    };
  };
};
