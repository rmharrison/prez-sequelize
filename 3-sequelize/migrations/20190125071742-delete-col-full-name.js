'use strict';

var {sequelize} = require('../models')

module.exports = {
  up: (queryInterface, Sequelize) => {
    var step2 = queryInterface.removeColumn('people', 'full_name');
    return Promise.all([step2])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('people', 'full_name', {
      type: Sequelize.STRING
    }).then(() => {
      return sequelize.query("UPDATE people SET full_name = CONCAT(first_name, ' ', last_name);")
    })
  }
};
