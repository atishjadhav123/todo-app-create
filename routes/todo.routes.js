const todoController = require("../controller/todo.controller")

const router = require("express").Router()

router

    .get("/", todoController.getallTodos)
    .post("/", todoController.addtodod)
    .put("/:todoId", todoController.updateTodo)
    .delete("/:todoId", todoController.deleteTodo)

module.exports = router
