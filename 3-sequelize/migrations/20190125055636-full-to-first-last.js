'use strict';

const {sequelize} = require('../models')

module.exports = {
  up: (queryInterface, Sequelize) => {
    let col_first_name = queryInterface.addColumn('people', 'first_name', {
      type: Sequelize.STRING
    }).then(() => {
      return sequelize.query("UPDATE people SET first_name = SPLIT_PART(full_name, ' ', 1);")
    })
      
    let col_last_name = queryInterface.addColumn('people', 'last_name', {
      type: Sequelize.STRING
    }).then(() => {
      return sequelize.query("UPDATE people SET last_name = SPLIT_PART(full_name, ' ', 2);")
    })

    return Promise.all([col_first_name, col_last_name])
  },

  down: (queryInterface, Sequelize) => {
    let col_first_name = queryInterface.removeColumn('people', 'first_name')
    let col_last_name = queryInterface.removeColumn('people', 'last_name')
    return Promise.all([col_first_name, col_last_name])
    //return new Promise(function(resolve, reject) {return resolve(true)})
  }
};
