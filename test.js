'use strict';
var should = require('should');
var del    = require('./');

describe('delete', function() {
  describe('get object', function() {
    it('should remove multiple keys', function() {
      var got = { a: 1, b: 2, c: 3 };
      del(got, 'a', 'b', 'c');
      got.should.eql({});
    });

    it('should remove keys by path', function() {
      var got = {
        a: { z: 1 },
        b: { z: 1 },
        c: { z: { y: 1 } }
      };
      var exp = { b: {},  c: { z: {} } };
      del(got, 'a', 'b.z', 'c.z.y');
      got.should.eql(exp);
    });

    it('should work safety(not throwing) with `undefined` keys', function() {
      should(del({ a: 1 }, 'a.b', 'b.c', 'c')).not.throw();
    });

    it('should return the object after deleting', function() {
      del({ a:{ b: 1 } }, 'a.b').should.eql({a:{}});
    });
  });
});

