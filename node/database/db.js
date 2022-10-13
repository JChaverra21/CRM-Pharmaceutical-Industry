import { Sequelize } from 'sequelize'

const datab = new Sequelize('farmaceutica', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

export default datab