'use strict';
  var ClientFD = require('../../sampleData/v1/Client.json');
  var ClientData = ClientFD;




exports.getClient = function(args, res, next) {
/**
 * Gets all customers from the system that the user has access to
 *
 * returns List
 **/
  if (Object.keys(ClientData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                                              res.end(JSON.stringify(ClientData));
                } else {
      res.end();
  }
}





exports.putClient = function(args, res, next) {
/**
 * Puts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(ClientData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(ClientData[Object.keys(ClientData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.postClient = function(args, res, next) {
/**
 * Posts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(ClientData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(ClientData[Object.keys(ClientData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.patchClient = function(args, res, next) {
/**
 * Patchs all customers from the system that the user has access to
 *
 **/
  if (Object.keys(ClientData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(ClientData[Object.keys(ClientData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}



exports.deleteClient = function(args, res, next) {
/**
* Deletes all customers from the system that the user has access to
*
**/
  if (Object.keys(ClientData).length > 0) {
      res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(ClientData[Object.keys(ClientData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


