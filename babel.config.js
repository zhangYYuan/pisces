module.exports = {
    presets: [
       [
           "@babel/env", {
               "modules": false,
               "useBuiltIns": "usage",
               "targets": {
                   "node": "4"
                }
            }
       ]
    ]
}
