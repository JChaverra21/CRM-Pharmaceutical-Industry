import { Router } from "express"
import { getOrders, postOrders, deleteOrders, updateOrders } from "../controllers/orders.controllers.js"

const router = Router();

router.get('/orders', getOrders);

router.post('/newOrder', postOrders);

router.put('/upOrder/:id_Order', updateOrders);

router.delete('/deleteOrder/:id_Order', deleteOrders)

export default router