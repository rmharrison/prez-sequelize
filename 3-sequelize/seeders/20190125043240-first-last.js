'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('people', [
        {
          first_name: 'John',
          last_name: 'Watts',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          first_name: 'Charles',
          last_name: 'Ingram',
          created_at: new Date(),
          updated_at: new Date(),
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('people', null, {});
  }
};
