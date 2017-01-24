(function (global) {
   global.Dozuki =
   function Dozuki(url, http) {
      baseUrl = url + "/api/2.0/";
      this.guides = {
         get: function(guideid, langid, params) {
            params = params || {};
            var url = baseUrl + "guides/" + guideid;
            if (langid) {
               params["langid"] = langid;
            }

            return http.send(
               url,
               {
                  dataType:   'json',
                  method: 'get',
                  headers: {
                     'X-ALLOW-HTTP': 1
                  },
                  params: params
               });
         }
      };
   };

   global.Dozuki.http = {};
})(typeof window != 'undefined' ? window : module.exports);
