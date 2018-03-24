const utils = require('../utils');

test('it should customize js extention if specified in import', () => {

    const matchedFile = utils.getMatchedFileName('./module/someModule.js', 'custSuffix');
    
    expect(matchedFile).toEqual('./module/someModule.custSuffix.js')
  });
  
  test('it should customize js extention if not specified in import', () => {
    const matchedFile = utils.getMatchedFileName('./module/someModule', 'custSuffix');
    
    expect(matchedFile).toEqual('./module/someModule.custSuffix.js')
  });
  
  
  test('it should customize any extention specified in import', () => {
    const matchedFile = utils.getMatchedFileName('./module/someModule.jpeg', 'custSuffix');
    
    expect(matchedFile).toEqual('./module/someModule.custSuffix.jpeg')
  
  });
  
  test('it should customize nested path wihtout extention as js', () => {
    const matchedFile = utils.getMatchedFileName('./module/module2/someModule.someModule2.js', 'custSuffix');
    
    expect(matchedFile).toEqual('./module/module2/someModule.someModule2.custSuffix.js')
  
  });
  
  test('it should customize nested path with extention', () => {
    const matchedFile = utils.getMatchedFileName('./module/module2/someModule.someModule2.jpeg', 'custSuffix');
    
    expect(matchedFile).toEqual('./module/module2/someModule.someModule2.custSuffix.jpeg')
  
  });
  
  
  
  
  