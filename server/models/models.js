const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull:false},
    surname: {type: DataTypes.STRING, allowNull:false},
    middlename: {type: DataTypes.STRING, allowNull:false},
    email: {type: DataTypes.STRING, unique: true, allowNull:false},
    login: {type: DataTypes.STRING, allowNull:false},
    password: {type: DataTypes.STRING, allowNull:false}
})

const Role = sequelize.define('roles',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    role_name:{type: DataTypes.STRING}
})

const Cart = sequelize.define('cart',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    quantity:{type: DataTypes.BIGINT},
    order_number: {type: DataTypes.BIGINT, allowNull: false},
    order_status: {type: DataTypes.BOOLEAN},
})

const Delivery = sequelize.define('delivery',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    delivery_status: {type: DataTypes.BOOLEAN},
    address: {type: DataTypes.STRING, allowNull: false},
})

const Wear = sequelize.define('wear',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    wear_name: {type: DataTypes.STRING, unique: true, allowNull: false},
    cost: {type:DataTypes.BIGINT, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false}
})

const Wear_Composition = sequelize.define('wear_composition',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    composition_name: {type: DataTypes.STRING, allowNull: false},
    percentage_components: {type: DataTypes.FLOAT, allowNull:false}
})

const Wear_Size = sequelize.define('wear_size',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    size_name: {type: DataTypes.STRING, allowNull: false}
})

const Wear_Type = sequelize.define('wear_type',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type_name: {type: DataTypes.STRING, unique: true, allowNull: false},
})


Role.hasMany(User)
User.belongsTo(Role)

User.hasMany(Delivery)
Delivery.belongsTo(User)

Delivery.hasMany(Cart)
Cart.belongsTo(Delivery)

Cart.hasMany(Wear)
Wear.belongsTo(Cart)

Wear.hasMany(Wear_Composition)
Wear_Composition.belongsTo(Wear)

Wear.hasMany(Wear_Size)
Wear_Size.belongsTo(Wear)

Wear.hasMany(Wear_Type)
Wear_Type.belongsTo(Wear)

module.exports = {
    User,
    Role,
    Cart,
    Delivery,
    Wear,
    Wear_Composition,
    Wear_Size,
    Wear_Type,
}