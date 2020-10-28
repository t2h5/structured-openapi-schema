/**
 * The UserController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/UserService');
const usersGet = async (request, response) => {
  await Controller.handleRequest(request, response, service.usersGet);
};

const usersIdDelete = async (request, response) => {
  await Controller.handleRequest(request, response, service.usersIdDelete);
};

const usersIdGet = async (request, response) => {
  await Controller.handleRequest(request, response, service.usersIdGet);
};

const usersIdPatch = async (request, response) => {
  await Controller.handleRequest(request, response, service.usersIdPatch);
};

const usersPost = async (request, response) => {
  await Controller.handleRequest(request, response, service.usersPost);
};


module.exports = {
  usersGet,
  usersIdDelete,
  usersIdGet,
  usersIdPatch,
  usersPost,
};
