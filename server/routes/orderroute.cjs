const router=require('express').Router()

const {order,orderView}=require('../controllers/ordercon.cjs')
const orderMid=require('../middleware/ordermid.cjs')




router.post('/order',orderMid,order)
router.get('/orderview',orderView )
module.exports=router