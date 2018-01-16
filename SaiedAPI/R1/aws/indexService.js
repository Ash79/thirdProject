'use strict';
      //var ClientFD = require('./Client.json')
  var ClientFD = require('./v1/Client.json');
    var ClientData = ClientFD;
          exports.getClient = function(event, cb) {
    cb(null, ClientData);
  }
                      exports.putClient = function(event, cb) {
      ClientData.push(event.body);
      cb(null, 'Item inserted successfully');
  }
              exports.postClient = function(event, cb) {
      ClientData.push(event.body);
      cb(null, 'Item inserted successfully');
  }
              exports.patchClient = function(event, cb) {
      ClientData.push(event.body);
      cb(null, 'Item patched successfully');
  }
            exports.deleteClient = function(event, cb) {
      var index = ClientData.indexOf(event.body);
      if (index > -1) {
          ClientData.splice(index, 1);
          cb(null, 'Item deleted successfully');
      }else{
        cb(null, 'Item does not exist');
      }
  }
            