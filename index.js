var recipes = {}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  // object.key = value
  // return object
   object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var obj = Object.assign({}, object)
  delete obj.key
  return obj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key
  return object
}
