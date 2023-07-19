import express from 'express'
import IPController from '../controllers/IPController.mjs'
const router=express.Router()
router.get('/ip/:ip',IPController.getIPDetails)

export default router