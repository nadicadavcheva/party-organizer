import {
    Router
  } from 'express';
  import controllers from './company.controllers';
  const router = Router();
  
  // /api/company
  router
    .route('/')
    .get(controllers.getMany)
    .post(controllers.createOne)
  
  // /api/company/:id
  router
    .route('/:id')
    .get(controllers.getOne)
    .put(controllers.updateOne)
    .delete(controllers.removeOne);
  
  export default router;