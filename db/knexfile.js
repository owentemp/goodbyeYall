'use strict'
if (process.env.NODE_ENV!=="production"){
	var api = require('../APIKEYS');
}


/**
 * airport reducer that change set the state of destination
 * @param {string} process.env.DATABASE_URL - connection string to pg database
 * @param {string} api.PG_CONNECTION_STRING - connection string to pg database
 */

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || api.PG_CONNECTION_STRING
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || api.PG_CONNECTION_STRING
  }
};