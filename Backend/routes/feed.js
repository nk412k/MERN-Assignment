const express=require('express');
const feedController=require('../controllers/feed');
const router=express.Router();

router.get('/tasks',feedController.getTasks);
router.post(
  "/task",
  feedController.createTask
);


router.put(
  "/task/:taskId",
  feedController.putUpdateTask
);

router.delete('/task/:taskId',feedController.deleteTask);
module.exports=router;