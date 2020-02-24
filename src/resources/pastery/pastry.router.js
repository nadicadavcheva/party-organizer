import { Router } from 'express'

const router = Router()

// /api/list
router
  .route('/')
  .get(controllers.getOne)
  .post(controllers.createOne)

// /api/list/:id
router
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne)

//   router
//   .route('/:category')
//   .get(controllers.)

export default router
