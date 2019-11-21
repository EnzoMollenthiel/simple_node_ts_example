/**
 * Sequelize User model definition
 * 
 * @param sequelize Sequelize object allowing to define data model
 * @param DataTypes DataTypes defined by sequelize
 * 
 * https://sequelize.readthedocs.io/en/v3/api/model/
 * 
 * Generates following create table statement for MySQL/MariaDB:
 *   CREATE TABLE USERS (
 *   USR_ID bigint(11) NOT NULL AUTO_INCREMENT,
 *   USR_PSEUDO varchar(100) NOT NULL,
 *   USR_EMAIL varchar(100) NOT NULL,
 *   PRIMARY KEY (USR_ID),
 *   UNIQUE KEY USR_ID (USR_ID),
 *   UNIQUE KEY USR_PSEUDO (USR_PSEUDO),
 *   UNIQUE KEY USR_EMAIL (USR_EMAIL)
 *   ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4
 */
const UserModel = (sequelize: any, DataTypes: any) => {
    const Users = sequelize.define('Users', {
        USR_ID: {
            type: DataTypes.BIGINT(11),
            allowNull: true,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
        },
        USR_PSEUDO: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        USR_EMAIL: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        }
    }, {
            tableName: 'USERS',        
            timestamps: false
        });     

    return Users;
};

export default UserModel;