var assert = require('assert');
var Dozuki = require('./dozuki.js').Dozuki;
Dozuki.http = {
   mock: require('./wrappers/mock.http.js').mock
};

var domain = "https://www.test.com";

describe('Dozuki', function(){
   function newDozuki(httpMock) {
      return new Dozuki(domain, httpMock)
   }
   describe('guides', function() {
      describe('get', function() {
         it("should from the correct url", function(done) {
            var http = Dozuki.http.mock("123");
            var d = newDozuki(http);
            var promise = d.guides.get(123);

            assert(promise.then);
            assert.equal(http.sent.url, domain + "/api/2.0/guides/123");

            promise.then(function(data) {
               assert.equal("123", data);
               done();
            });
         });

         it("should set the correct request options", function() {
            var http = Dozuki.http.mock("123");
            newDozuki(http).guides.get(123, 'en', {}, {
               'X-App-Id': 'ABCD123'
            });

            assert.deepEqual(http.sent.options, {
               dataType:   'json',
               method:     'get',
               headers:    {
                  'X-App-Id': 'ABCD123',
                  'X-ALLOW-HTTP': 1
               },
               params:     {
                  'langid': 'en'
               }
            });

            assert.equal(http.sent.url, domain + "/api/2.0/guides/123");
         });
      });
   });
});

