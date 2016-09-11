var API = {};

var SERVER = 'https://scratch.mit.edu';
API.PROJECT_URL = 'https://projects.scratch.mit.edu';
API.CLOUD_URL = 'https://cloud.scratch.mit.edu';
API.CDN_URL = 'https://cdn.scratch.mit.edu';
API.CLOUD_PORT = '531';

API.SESSION_FILE = '.scratchSession';

var Scratch = {};

Scratch.projectJSON = function(ID) {
  $.ajax({
    type: "GET",
    url: API.PROJECT_URL + '/internalapi/project/' + ID + "/get/",
    success: function (responseText) {
      return(responseText);
    }
  })
}
