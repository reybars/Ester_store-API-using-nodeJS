import express from 'express';
import {getProductController} from "./controller.js";

const productData = getProductController();
const router = express.Router();

router.get('/', async (req, res) => {
  const product = await productData;
  res.json(product);
});


export default router;

