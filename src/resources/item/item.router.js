import { Router } from 'express'

const router = Router()
const mock = (req, res) => {
  console.log(req.body)
}
router
  .route('/')
  .get(mock)
  .post(mock)

router
  .route('/:id')
  .get(mock)
  .post(mock)
  .put(mock)
  .delete(mock)
export default router
