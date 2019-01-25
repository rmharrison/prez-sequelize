'use strict';
module.exports = (sequelize, DataTypes) => {
  const person = sequelize.define('person', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING
  }, {
    underscored: true,
  });

  person.associate = function(models) {
    // associations can be defined here
  };

  // Prefer virtual getters for aliasing.
  // Use real getters/setters for actually interacting with data model.
  person.prototype.full_name = function() {
     return [this.first_name, this.last_name].join(' ');
  }

  person.prototype.toJSONCustom = function() {
    var values = this.constructor.prototype.toJSON.call(this);
    delete values.first_name
    delete values.last_name
    values.full_name = this.full_name()
    return values
  }

  return person;
};
