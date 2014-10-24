module.exports = [{
  "name": "testAction",
  execution: (params, cb) ->
    console.log "testAction execute"
    console.log "testAction.app", this.app

    cb(null, {result: "ok"})


}]
