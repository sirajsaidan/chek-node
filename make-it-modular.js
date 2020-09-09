var fs = require('fs')
var path = require('path')

var dir = process.argv[2]
var filterStr = process.argv[3]

const main=require('./main')

getFiles(dir, filterStr, function (err, list) {
  if (err)
    return console.error('There was an error:', err)

  list.forEach(function (file) {
    console.log(file)
  })
})

