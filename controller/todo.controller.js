const asynHandler = require("express-async-handler")
const Todo = require("../model/Todo")

exports.getallTodos = asynHandler(async (req, res) => {
    const result = await Todo.find()
    res.status(200).json({ message: "blog fetch success", result })
})
exports.addtodod = asynHandler(async (req, res) => {
    await Todo.create(req.body)
    res.status(200).json({ message: "blog create success" })
})
exports.deleteTodo = asynHandler(async (req, res) => {
    const { todoId } = req.params
    await Todo.findByIdAndDelete(todoId)
    res.status(200).json({ message: "blog delte success" })
})
exports.updateTodo = asynHandler(async (req, res) => {
    const { todoId } = req.params
    await Todo.findByIdAndUpdate(todoId, req.body)
    res.status(200).json({ message: "blog update success" })
})