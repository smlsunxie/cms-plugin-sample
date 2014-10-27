module.exports = [
  {
    "name": "testAction",
    execution: (params, cb) ->

      cb(null, {result: "ok"})
  }
  {
    "name": "get",
    execution: (params, cb) ->
      @app.models.ModuleTodo.find {}, (error, todos) ->
        cb(null, todos)
  }
  {
    "name": "post",
    execution: (params, cb) ->
      ModuleTodo = @app.models.ModuleTodo
      moduleTodo = new ModuleTodo(params)
      ModuleTodo.create moduleTodo, (error, newTodo) ->

        cb(null, newTodo)
  }

]
