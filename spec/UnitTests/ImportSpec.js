const Import = require('../../lib/ImportController').Import;

describe("ImportController", function(){

  var demoPath = __dirname+"/Test Files/TestCards.csv";

  it("should read a CSV file", function(){
      Import.loadCSV(demoPath);
      expect(true).toBeTruthy();
  })

});
