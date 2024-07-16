import {Router} from 'express'
import { orderController } from './order.controller'
import { auth } from '../../middleware/auth'
const router=Router()



router.post('/order',auth('admin'),orderController.createOrder)
router.get('/get-allOrder',auth("admin",),orderController.getAllOrderByAdmin)
export const orderRouter=router