import {pool} from '../database.js'

export const getOrders = async (req,res) => {
    const [rows] = await pool.query('select *from orders')
    res.json(rows)
}
