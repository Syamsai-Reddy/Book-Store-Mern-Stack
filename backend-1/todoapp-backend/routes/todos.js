const express = require("express");

const router = express.Router();

//import controller

const {createTodo} = require("../controllers/createTode");
const {getTodos,getTodoById} =require("../controllers/getTodo")
const {updateById} =require("../controllers/updateTodo")
const {deletetodo} =require("../controllers/deleteTodo")
//define api

router.post("/createTodo",createTodo);
router.get("/getTodos",getTodos)
router.get("/getTodos/:id",getTodoById);
router.put("/updateTodo/:id",updateById);
router.delete("/deleteTodo/:id",deletetodo);
module.exports = router;