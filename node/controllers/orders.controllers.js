import OrderModel from '../models/OrderModel.js'

export const getAllOrders = async (req, res) => {
    try {
        const orders = await OrderModel.findAll()
        res.json(orders)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Crear un registro
export const createOrder = async (req, res) => {
    try {
       await OrderModel.create(req.body)
       res.json("Registro creado")
    } catch (error) {
        res.json( {message: error.message} )
    }
}

/*export const postOrders = async (req, res) => {
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
}*/

//Actualizar un registro
export const updateOrder = async (req, res) => {
    try {
        await OrderModel.update(req.body, {
            where: { id: req.params.id}
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
    const getOrder = async (req, res) => {
        try {
            const blog = await OrderModel.findAll({
                where:{ id: req.params.id }
            })
            res.json(blog[0])
        } catch (error) {
            res.json( {message: error.message} )
        }
}
}

/*export const updateOrders = async (req, res) => {
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
};*/

//Eliminar un registro
export const deleteOrder = async (req, res) => {
    try {
        await OrderModel.destroy({ 
            where: { id: req.params.id }
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

/*export const deleteOrders = async (req, res) => {
    const [rows] = await pool.query('DELETE FROM orders WHERE id_Order=?',
    [req.params.id_Order]);

    console.log(rows);

    if(rows.affectedRows == 0) return res.status(404).json({
        mensaje: 'Order not found'
    })

    res.send('Order delete')
};*/