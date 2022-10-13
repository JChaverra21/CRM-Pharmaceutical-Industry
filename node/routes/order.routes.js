import { Router } from "express"
import { getAllOrders, createOrder, updateOrder, deleteOrder } from "../controllers/orders.controllers.js"

const router = Router();

router.get('/', getAllOrders);

router.post('/', createOrder);

router.put('/:id', updateOrder);

router.delete('/:id', deleteOrder)

export default router