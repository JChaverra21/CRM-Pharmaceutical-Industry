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

export const updateOrders = async (req, res) => {
    const {id_client, name, email, phone, address, products, price} = req.body;

    const [result] = await pool.query('UPDATE orders SET id_client=?, name=?, email=?, phone=?, address=?, products=?, price=? WHERE id_Order=?',
    [id_client, name, email, phone, address, products, price, req.params.id_Order])
 
    console.log(result);

    if(result.affectedRows == 0) return res.status(404).json({
        mensaje: 'Order not found'
    });

    const [rows] = await pool.query('SELECT * FROM orders WHERE id_client=?',
    [id_client]);

    res.json(rows[0]);
};

export const deleteOrders = async (req, res) => {
    const [rows] = await pool.query('DELETE FROM orders WHERE id_Order=?',
    [req.params.id_Order]);

    console.log(rows);

    if(rows.affectedRows == 0) return res.status(404).json({
        mensaje: 'Order not found'
    })

    res.send('Order delete')
};