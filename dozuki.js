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

            var paramString = Object.keys(params).map(function(key) {
               return params[key] ? key + "=" + params[key] : key;
            }).join("&");

            if (paramString) {
               url += "?" + paramString;
            }

            return http.send(
               url,
               {
                  dataType:   'json',
                  method: 'get',
                  headers: {
                     'X-ALLOW-HTTP': 1
                  }
               });
         }
      };
   };

   global.Dozuki.http = {};
})(typeof window != 'undefined' ? window : module.exports);
