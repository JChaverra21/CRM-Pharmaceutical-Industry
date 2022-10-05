import { type } from 'express/lib/response.js';
import {pool} from '../database.js'

export const getOrders = async (req,res) => {
    const [rows] = await pool.query('select *from product')

    console.log(rows);
    res.json(rows)
}

export const postOrders = async (req, res) => {
    const {name, type, expiration, price} = req.body;

    const [rows] = await pool.query('INSERT INTO product(name, type, expiration, price) VALUES (?, ?, ?, ?)',
    [name, type, expiration, price])

    console.log(req.body);
    res.send({ 
        name, 
        type, 
        expiration,
        price
    });
}