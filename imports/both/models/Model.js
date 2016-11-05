import _ from 'underscore'

export default class Model {
  constructor(doc = {}) {
    Object.assign(this, doc)
  }

  doc() {
    return _(this).omit('_id')
  }

  save(callback) {
    if (this._id) {
      return  this.constructor.collection.update(this._id, {$set: this.doc}, {}, callback)
    } else {
    return this.constructor.collection.insert(this.doc, callback)
    }
  }

  delete(callback) {
    return this.constructor.collection.remove(this.doc, callback)
  }
}
