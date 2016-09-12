'use strict';
module.exports = function(sequelize, DataTypes) {
  var cities = sequelize.define('cities', {
    Id: DataTypes.STRING,
    City: DataTypes.STRING,
    Country: DataTypes.STRING,
    Lat: DataTypes.STRING,
    Lng: DataTypes.STRING,
    Images: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return cities;
};