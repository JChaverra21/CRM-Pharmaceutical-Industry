import { Router } from "express"
import { getOrders } from "../controllers/orders.controllers.js"

const router = Router();

router.get('/orders', getOrders);

export default router