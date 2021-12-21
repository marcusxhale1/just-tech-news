const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class User extends Model {}

// define table columns and configuration
User.init(
  { // define an id column 
    id: {
        //Use the special Sequilize Data Types object provide what type of data it is
        type: DataTypes.INTEGER, 
        //this is the equival of SQL's `NOT NULL` option 
        allowNull: false, 
        // Instruct that this is a Primary Key
        primaryKey: true, 
        // turn on auto increment
        autoIncrement: true
    },

    // define a username column
    username: {
        type: DataTypes.STRING, 
        allowNull: false
    },

    // Define an email column
    email: { 
        type: DatatTypes.STRING,
        allowNull: false, 
        // THERE CANNOT BE DUPLICATE EMAIL VALUES IN THIS TABLE
        unique: true, 
        //if allowNull is set to false, we can run our data through validators before creating the table data 
        validate: {
            isEmail: true
        }
    }, 

    //DEFINE A PASSWORD COLUMN
    password: {
        type: DataTypes.STRING, 
        allowNull: false, 
        validate: {
            //this means the password must be at least four characters long
            len: [4]
        }
    }

    // TABLE COLUMN DEFINITIONS GO HERE
  },
  {
    // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))

    // pass in our imported sequelize connection (the direct connection to our database)
    sequelize,
    // don't automatically create createdAt/updatedAt timestamp fields
    timestamps: false,
    // don't pluralize name of database table
    freezeTableName: true,
    // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    underscored: true,
    // make it so our model name stays lowercase in the database
    modelName: 'user'
  }
);

module.exports = User;