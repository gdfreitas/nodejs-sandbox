const Sequelize = require('sequelize')
const connection = require('./connection.js')
const DISABLE_SEQUELIZE_DEFAULTS = {
    timestamps: false,
    freezeTableName: true
}

const { DataTypes } = Sequelize
const sequelize = new Sequelize({
    database: connection.database,
    username: connection.user,
    host: connection.host,
    port: connection.port,
    password: connection.password,
    dialect: 'postgres',
    operatorsAliases: false
})

const Dish = sequelize.define(
    'dish',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING },
        veg: { type: DataTypes.BOOLEAN }
    },
    DISABLE_SEQUELIZE_DEFAULTS
)

const Item = sequelize.define(
    'item',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING },
        type: { type: DataTypes.STRING }
    },
    DISABLE_SEQUELIZE_DEFAULTS
)

const Ingredient = sequelize.define(
    'ingredient',
    {
        dish_id: { type: DataTypes.INTEGER, primaryKey: true },
        item_id: { type: DataTypes.INTEGER, primaryKey: true },
        quantity: { type: DataTypes.FLOAT },
        unit: { type: DataTypes.STRING }
    },
    DISABLE_SEQUELIZE_DEFAULTS
)

Item.belongsToMany(Dish, {
    through: Ingredient,
    foreignKey: 'item_id'
})

Dish.belongsToMany(Item, {
    through: Ingredient,
    foreignKey: 'dish_id'
})

Dish.findOne({ where: { id: 1 }, include: [{ model: Item }] }).then(rows => {
    console.log('Ingredients:')
    for (let row of rows.items) {
        console.log(`${row.dataValues.name}: ${row.ingredient.dataValues.quantity} ` + row.ingredient.dataValues.unit)
    }

    sequelize.close()
})
