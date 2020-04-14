import {
  Router
} from 'express';
import controllers from './sweets.controllers';
const router = Router();

// /api/sweets
router
  .route('/')
  .get(controllers.getMany)
  .post(controllers.createOne)

// /api/sweets/:id
router
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne);

export default router;