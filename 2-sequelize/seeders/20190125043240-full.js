'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('people', [
        {
          full_name: 'John Watts',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          full_name: 'Charles Ingram',
          created_at: new Date(),
          updated_at: new Date(),
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('people', null, {});
  }
};
