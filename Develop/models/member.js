// Creating our User model
module.exports = function (sequelize, DataTypes) {
  var Member = sequelize.define("Member", {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },

    m_initial: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },

    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },

    ss_number: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: true,
    },

    spouse_first_name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },

    spouse_middle_initial: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },

    spouse_last_name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },

    spouse_ss_number: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: true,
    },

    address_one: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },

    address_two: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },

    apartment_number: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },

    city: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },

    state: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },

    zip: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: true,
    },

    foreign_country_name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },

    foreign_province_state: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },

    foreign_postal_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: true,
    },
    
  });
  return Member;
};
