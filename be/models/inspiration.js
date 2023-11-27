import { DATE, Sequelize } from 'sequelize'
import db from './../config/db.js'
const {DataTypes} = Sequelize

const inspiration = db.define('inspiration', {
    uuid: {
        type: DataTypes.STRING(10),
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    desk: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    fill_content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    tableName: 'inspirations'
})

export default inspiration