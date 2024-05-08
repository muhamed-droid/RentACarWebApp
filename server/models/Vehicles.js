module.exports = (sequelize, DataTypes) => {
    const Vehicles = sequelize.define("Vehicles", {
        manufacturer:{
            type: DataTypes.STRING,
            allowNull: false
        }, 
        model:{
            type: DataTypes.STRING,
            allowNull: false
        },
        lkw:{
            type: DataTypes.BOOLEAN,
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
        automatic:{
            type: DataTypes.BOOLEAN,
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
            type:DataTypes.STRING
        },
        image_name:{
            type:DataTypes.STRING,
            allowNull:false
        }
    });
    return Vehicles;
}