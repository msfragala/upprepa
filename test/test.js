var upprepa = require('../index.js');
var should = require('should');
var segex = require('./segex');
var str, cnt, del, test;

describe('When input is String,', function() {
  describe('and delimiter is undefined', function() {
    it('should repeat input with space delimiter', function() {
      str = 'test', cnt = 3;
      test = upprepa(str, cnt);
      test.match(segex(str)).should.have.length(cnt);
      test.should.equal('test test test');
    });
  });
  describe('and delimiter is String', function() {
    it('should repeat input with delimiter', function() {
      str = 'test', cnt = 3, del = '_';
      test = upprepa(str, cnt, del);
      test.match(segex(str)).should.have.length(cnt);
      test.match(segex(del)).should.have.length(cnt-1);
      test.should.equal('test_test_test');
    });
  });
});
describe('When input is Array,', function() {
  describe('and delimiter is undefined', function() {
    it('should join input with space delimiter', function() {
      str = ['one','two','three'], cnt = 3;
      test = upprepa(str, cnt);
      test.match(segex(str)).should.have.length(cnt);
      test.should.equal('one two three');
    });
  });
  describe('and delimiter is String', function() {
    it('should join input with delimiter', function() {
      str = ['one','two','three'], cnt = 3, del = '_';
      test = upprepa(str, cnt, del);
      test.match(segex(str)).should.have.length(cnt);
      test.match(segex(del)).should.have.length(cnt-1);
      test.should.equal('one_two_three');
    });
  });
});
describe('When delimiter is Object', function() {
  it('should prepend delimiter.pre', function() {
    str = 'test', cnt = 1, del = {pre: '_PRE_'};
    test = upprepa(str, cnt, del);
    test.should.startWith(del.pre);
    test.should.equal('_PRE_test');
  });
  it('should append delimiter.post', function() {
    str = 'test', cnt = 2, del = {post: '_POST_'};
    test = upprepa(str, cnt, del);
    test.should.endWith(del.post);
    test.should.equal('test test_POST_');
  });
  it('should default to delimiter.def', function() {
    str = 'test', cnt = 3, del = {def: '|'};
    test = upprepa(str, cnt, del);
    test.match(segex(del.def)).should.have.length(2);
    test.should.equal('test|test|test');
  });
  it('should switch to indexical delimiter', function() {
    str = 'test', cnt = 4, del = {def: '|', 2: '_two_'};
    test = upprepa(str, cnt, del);
    test.should.equal('test|test_two_test|test');
  });
  it('should handle complex cases', function() {
    str = 'test', cnt = 10, del = {
      def: '_',
      pre: '^',
      2: '_2_',
      4: '_4_',
      7: '_7_',
      9: '_9_',
      post: '$'
    };
    test = upprepa(str, cnt, del);
    test.should.equal('^test_test_2_test_test_4_test_test_test_7_test_test_9_test$');
  });
});
