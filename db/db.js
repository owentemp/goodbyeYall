'use strict'

/**
 * knex database connection and its helper function
 */
let path = require('path');

let config = require('./knexfile');
let env = process.env.NODE_ENV || 'development';
let knex = require('knex')(config[env]);

module.exports = knex;

knex.ensureSchema = function () {
  return Promise.all([
    knex.schema.hasTable('destinations').then(function (exists) {
      if (!exists) {
        knex.schema.createTable('destinations', function (table) {
          table.increments('id').primary();
          table.string('title', 255);
          table.string('airport_code', 255);
          table.string('country', 255);
          table.string('city_name', 255);
          table.string('package_group', 255);
          table.string('intro', 1023);
          table.string('main_image_url');
          table.string('next_image_url', 255);
          table.string('weather',255);
        }).then(function (table) {
          console.log('Created destinations table.');
        })
      }
    }),

    knex.schema.hasTable('quotes').then(function (exists) {
      if (!exists) {
        knex.schema.createTable('quotes', function (table) {
          table.increments('id').primary();
          table.float('price');
          table.string('originCity', 255);
          table.string('destinationCity', 255);
          table.date('outboundDate');
          table.date('inboundDate');
          table.string('outboundMonth', 2);
          table.string('outboundYear', 4);
          table.string('deepLink', 2000);
          table.timestamp('created_at').defaultTo(knex.fn.now());
        }).then(function (table) {
          console.log('Created quotes table.');
        });
      }
    }),

    knex.schema.hasTable('packages').then(function (exists) {
      if (!exists) {
        knex.schema.createTable('packages', function (table) {
          table.increments('id').primary();
          table.string('name', 255);
        }).then(function (table) {
          console.log('Created packages table.');
        });
      }
    }),

    knex.schema.hasTable('averages').then(function (exists) {
      if (!exists) {
        knex.schema.createTable('averages', function (table) {
          table.increments('id').primary();
          table.float('avg_price');
          table.integer('count');
          table.string('originCity', 255);
          table.string('destinationCity', 255);
          table.string('outboundMonth',2);
          table.string('outboundYear', 4);
        }).then(function (table) {
          console.log('Created averages table.');
        });
      }
    }),

    knex.schema.hasTable('cheapest_route_ever').then(function (exists) {
      if (!exists) {
        knex.schema.createTable('cheapest_route_ever', function (table) {
          table.increments('id').primary();
          table.float('cheapest_price');
          table.string('originCity', 255);
          table.string('destinationCity', 255);
          table.timestamp('created_at').defaultTo(knex.fn.now());          
        }).then(function (table) {
          console.log('Created cheapest_route_ever table.');
        });
      }
      // else if (exists) {
      //   knex.schema.table('cheapest_route_ever', function (table) {      
          // table.timestamp('created_at').defaultTo(knex.fn.now());
      //   }).then(function (table) {
      //     console.log('Altered cheapest_route_ever table.');
      //   })
      // }
    }),

    knex.schema.hasTable('last_thirty_days').then(function (exists) {
      if (!exists) {
        knex.schema.createTable('last_thirty_days', function (table) {
          table.increments('id').primary();
          table.float('price');
          table.string('originCity', 255);
          table.string('destinationCity', 255);
          table.timestamp('created_at').defaultTo(knex.fn.now());
        }).then(function (table) {
          console.log('Created last_thirty_days table.');
        });
      }
    }),

// knex.schema.hasTable('bios').then(function(exists){
//   if(!exists){
//     knex.schema.createTable('bios',function(table){
//       table.increments('id').primary();
//       table.string('person', 50);
//       table.string('tooltiphover', 100);
//       table.string('devType', 50);
//       table.string('languagesStrong', 255);
//       table.string('languagesExperienced', 512);
//       table.string('personalStatement', 512);
//       table.string('gitProjectOneLink', 100);
//       table.string('gitProjectOneTitle', 100);
//       table.string('gitProjectTwoLink', 100);
//       table.string('gitProjectTwoTitle', 100);
//       table.string('gitProjectThreeLink', 100);
//       table.string('gitProjectThreeTitle', 100);
//       table.string('gitHubPic', 100);
//       table.string('linkedinLink', 100);
//       table.string('gitHubLink', 100);
//       table.string('resumeLink', 100);
//     }).then(function(table){
//       console.log('Created bios table');
//     })
//   }
// }),
    
    knex.schema.hasTable('users').then(function (exists) {
      if (!exists) {
        knex.schema.createTable('users', function (table) {
          table.increments('id').primary();
          table.string('token', 255);
          table.string('fb_id', 255);
          table.string('profile_name', 255);
          table.string('profile_email', 255);
          table.string('profile_photo', 255);          
          table.boolean('DFWA-sky').defaultTo(false);
          table.boolean('HOUA-sky').defaultTo(false);
          table.boolean('AUS-sky').defaultTo(false);
          table.boolean('Seven Wonders').defaultTo(false);
          table.boolean('Seven Natural Wonders').defaultTo(false);
          table.boolean('Global Explorer').defaultTo(false);
          table.boolean('American Cities').defaultTo(false);
          table.boolean('Party Islands').defaultTo(false);
          table.boolean('Seven Continents').defaultTo(false);
          table.boolean('Custom Package').defaultTo(false);
        }).then(function (table) {
          console.log('Created users table.');
        })
      } 
    })     
  ])
}

knex.truncateTable = function (tableName) {
  return knex(tableName).truncate()
    .then(function () {
      console.log("Deleted "+ tableName)
  })
}


knex.closeDb = function () {
  knex.destroy().then(function () {
    console.log("Closed db connection")
  })
}

// knex.ensureSchema().then(knex.closeDb);

