// Creating our User model
module.exports = function (sequelize, DataTypes) {
  var Member = sequelize.define("Member", {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },

    m_initial: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },

    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },

    ss_number: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },

    d_o_b: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },

    spouse_first_name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },

    spouse_middle_initial: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },

    spouse_last_name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },

    spouse_ss_number: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },

    spouse_d_o_b: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },

    address_one: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },

    address_two: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },

    apartment_number: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },

    city: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },

    state: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },

    zip: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },

    foreign_country_name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },

    foreign_province_state: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },

    foreign_postal_code: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },

    phone_number: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    
  });
  return Member;
};
