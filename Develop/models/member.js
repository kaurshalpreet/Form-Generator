
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var Member = sequelize.define("Member", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
	},
})
return Member}