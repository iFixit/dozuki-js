(function (global) {
   global.Dozuki =
   function Dozuki(domain, http) {
      baseUrl = "https://" + domain +  "/api/2.0/";
      this.guides = {
         get: function(guideid, langid) {
            var url = baseUrl + "guides/" + guideid;
            if (langid) {
               url += "?langid=" + langid;
            }

            return http.send(
               url,
               {
                  dataType:   'json',
                  method: 'get'
               });
         }
      }
   }

   global.Dozuki.http = {};
})(typeof window != 'undefined' ? window : module.exports);
