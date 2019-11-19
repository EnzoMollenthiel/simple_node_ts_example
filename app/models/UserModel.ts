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