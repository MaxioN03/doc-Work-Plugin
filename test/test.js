var assert = require("assert");
var checker = require("../app");

describe('checker.checkSpaces()', function(){

  it('should return false, if string empty or only spaces', function(){
    assert.equal(checker.checkSpaces("  "), false);
    assert.equal(checker.checkSpaces(" "), false);
    assert.equal(checker.checkSpaces(""), false);
  });

  it('should find double space if string', function(){
    assert.equal(checker.checkSpaces("My  string"),true);
    assert.equal(checker.checkSpaces("My string  "), true);
    assert.equal(checker.checkSpaces("  My string  "), true);
    assert.equal(checker.checkSpaces("My string"), false);
  });

  it('should find space in end of string', function(){
    assert.equal(checker.checkSpaces("My  string "), true);
  });

  it('should find space in start of string', function(){
    assert.equal(checker.checkSpaces(" My string"), true);
  });

});

describe('checker.clearSpaces()', function(){

  it('should return empty string, if string empty or only spaces', function(){
    assert.equal(checker.clearSpaces("  "), "");
    assert.equal(checker.clearSpaces(" "), "");
    assert.equal(checker.clearSpaces(""), "");
  });

  it('should clear spaces in start of string', function(){
    assert.equal(checker.clearSpaces(" This is my String"), "This is my String");
  });

  it('should clear spaces in end of string', function(){
    assert.equal(checker.clearSpaces("This is my String "), "This is my String");
  });

  it('should replace multispace to one space', function(){
    assert.equal(checker.clearSpaces("This  is  my String"), "This is my String");
  });
});

describe('checker.readDirectory()', function(){

  it('should check only files', function(){
    assert.equal(checker.readDirectory("D:\\Kutz\\Сбор данных\\resource\\docs\\"), 1);
  });

});