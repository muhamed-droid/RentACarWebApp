module.exports = (sequelize, DataTypes) => {
    const Vehicles = sequelize.define("Vehicles", {
        name:{
            type: DataTypes.STRING,
            allowNull: false
        }, 
        description:{
            type: DataTypes.STRING
        },
        price:{
            type:DataTypes.DOUBLE,
            allowNull: false
        }, 
        photo: {
            type: DataTypes.BLOB
        }
    });
    return Vehicles;
}