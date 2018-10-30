describe('Airport', function(){
  var airport;

  beforeEach(function() {
      airport = new Airport();
  });

  it("should hold an array of planes at the airport", function() {
    expect(airport._landed).toEqual([]);
  });
});
