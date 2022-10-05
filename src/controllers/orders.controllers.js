import {pool} from '../database.js'

export const getOrders = async (req,res) => {
    const [rows] = await pool.query('select *from orders')

    console.log(rows);
    res.json(rows)
}

export const postOrders = async (req, res) => {
    const {id_client, name, email, phone, address, products, price} = req.body;

    const [rows] = await pool.query('INSERT INTO orders(id_client, name, email, phone, address, products, price) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [id_client, name, email, phone, address, products, price])

    console.log(req.body);
    res.send({
        id_Order: rows.insertId,
        id_client, 
        name, 
        email, 
        phone, 
        address, 
        products, 
        price
    });
}
