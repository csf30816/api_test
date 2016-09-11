var API = {};

var SERVER = 'scratch.mit.edu';
API.PROJECT_URL = 'projects.scratch.mit.edu';
API.CLOUD_URL = 'cloud.scratch.mit.edu';
API.CDN_URL = 'cdn.scratch.mit.edu';
API.CLOUD_PORT = '531';

API.SESSION_FILE = '.scratchSession';

var Scratch = {};

Scratch.projectJSON = function(ID) {
  $.ajax({
    type: "GET",
    url: API.PROJECT_URL + '/internalapi/project/' + id + "/get/",
    success: function (responseText) {
      return(responseText);
    }
  })
}
