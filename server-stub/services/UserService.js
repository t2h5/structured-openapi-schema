/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* get user list
* description
*
* page Integer page number (optional)
* perUnderscorepage Integer number of items per page (optional)
* returns user_list
* */
const usersGet = ({ page, perUnderscorepage }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        page,
        perUnderscorepage,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* delete user
* description
*
* userUnderscoreid Integer user id
* no response value expected for this operation
* */
const usersIdDelete = ({ userUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userUnderscoreid,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* get user
* description
*
* userUnderscoreid Integer user id
* returns user
* */
const usersIdGet = ({ userUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userUnderscoreid,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* update user
* description
*
* userUnderscoreid Integer user id
* userInput UserInput user information
* returns user
* */
const usersIdPatch = ({ userUnderscoreid, userInput }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userUnderscoreid,
        userInput,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* create new user
* description
*
* userInput UserInput user information
* returns user
* */
const usersPost = ({ userInput }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userInput,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  usersGet,
  usersIdDelete,
  usersIdGet,
  usersIdPatch,
  usersPost,
};
