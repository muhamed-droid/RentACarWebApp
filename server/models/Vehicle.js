module.exports = (sequelize, DataTypes) => {
    const Vehicle = sequelize.define("Vehicle", {
        manufacturer:{
            type: DataTypes.STRING,
            allowNull: false
        }, 
        model:{
            type: DataTypes.STRING,
            allowNull: false
        },
        year:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        type_of_fuel:{
            type: DataTypes.STRING,
            allowNull: false
        },
        transmission:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        kilometer:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        price:{
            type:DataTypes.DOUBLE,
            allowNull: false
        }, 
        additional_description:{
            type:DataTypes.STRING,
            allowNull: false
        },
        image_name:{
            type:DataTypes.STRING,
            allowNull:false
        }
    });
    return Vehicle;
}