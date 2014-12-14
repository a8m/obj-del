'use strict';
/**
 * @description
 * delete specific key by path
 * @param s
 * @param path
 * @returns {*}
 */
function deleteFn(s, path) {
  path = path.split('.');
  for(var i = 0; i < path.length-1; i++) {
    s = s[path[i]];
    if(typeof s === 'undefined') {
      return undefined;
    }
  }
  return delete s[path[i]];
}

/**
 * @description
 * get multiple paths and call deleteFn with each path.
 * return array of results.
 * @param obj
 * @returns {Array}
 */
module.exports = function deleter(obj) {
  for(var i = 1; i < arguments.length; i++) {
    deleteFn(obj, arguments[i]);
  }
  return obj;
};