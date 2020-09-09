function getFiles(dir, filterStr, callback) {

    fs.readdir(dir, function (err, list) {
      if (err)
        return callback(err)
  
      list = list.filter(function (file) {
        return path.extname(file) === '.' + filterStr
      })
  
      callback(null, list)
    })
  }
  module.exports = getFiles