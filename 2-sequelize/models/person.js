'use strict';
module.exports = (sequelize, DataTypes) => {
  const person = sequelize.define('person', {
    full_name: DataTypes.STRING,
  }, {
    underscored: true,
  });

  person.associate = function(models) {
    // associations can be defined here
  };

  return person;
};
