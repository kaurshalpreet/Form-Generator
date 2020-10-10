// Creating our User model
module.exports = function (sequelize, DataTypes) {
  var Member = sequelize.define("Member", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    m_initial: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    ss_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },

    spouse_first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    spouse_middle_initial: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    spouse_last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    spouse_ss_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },

    address_one: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    address_two: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    apartment_number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    city: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    state: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    zip: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },

    foreign_country_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    foreign_province_state: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    foreign_postal_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    
  });
  return Member;
};
