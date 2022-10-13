import datab from "../database/db.js"
import { DataTypes } from "sequelize"

const OrderModel = datab.define('ordertbs', {
    id_client: { type: DataTypes.INTEGER },
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    phone: { type: DataTypes.INTEGER },
    address: { type: DataTypes.STRING },
    products: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER }
})

export default OrderModel