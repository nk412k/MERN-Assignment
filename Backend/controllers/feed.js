const { json } = require("body-parser");
const Todo = require("../models/todo");

exports.getTasks = (req, res, next) => {
  Todo.find().sort({complete:1})
    .then((tasks) => {
      res
        .status(200)
        .json({
          tasks: tasks,
          message: "Fetched tasks successfully",
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.createTask = (req, res, next) => {
  const title = req.body.title;
  const catagory = req.body.catagory;
  const date=req.body.date;
  
  const task = new Todo({
    title: title,
    catagory: catagory,
    date: date,
  });
  task
    .save()
    .then((result) => {
      return res.json({message:'task created successfully',task:result});
    })
    .catch((err) => {
      console.log(err);
    });
};


exports.putUpdateTask = (req, res, next) => {
  const taskId = req.params.taskId;

  Todo.findById(taskId)
    .then((task) => {
      if (!task) {
        const error = new Error("Task not found");
        error.statusCode = 404;
        throw error;
      }
      task.catagory='Done';
      task.complete=true;
      return task.save();
    })
    .then((result) => {
      res.status(200).json({ message: "Task updated"});
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteTask = (req, res, next) => {
  const taskId = req.params.taskId;
  Todo.findByIdAndDelete(taskId)
    .then(result=>{
        res.status(200).json({ message: "task deleted" });
    })
    .catch((err) => {
      console.log(err);
    });
};
