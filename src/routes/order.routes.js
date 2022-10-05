import { Router } from "express"
import { getOrders, postOrders } from "../controllers/orders.controllers.js"

const router = Router();

router.get('/orders', getOrders);

router.post('/newOrder', postOrders);

export default router