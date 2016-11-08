import _ from 'underscore'

export default class Model {
  constructor(doc) {
    _(this).extend(doc)
  }

  static find(selector = {}, options = {}) {
    return this.collection.find(selector, options)
  }

  static findOne(selector = {}, options = {}) {
    return this.collection.findOne(selector, options)
  }

  static insert(doc, callback) {
    return this.collection.insert(doc, callback)
  }

  static remove(doc, callback) {
    return this.collection.remove(doc, callback)
  }

  static update(selector, modifier, options, callback) {
    return this.collection.update(selector, modifier, options, callback)
  }

  get doc() {
    return _(this).omit('_id')
  }

  save(callback) {
    if (this._id) {
      return this.constructor.update(this._id, { $set: this.doc }, {}, callback)
    } else {
      return this.constructor.insert(this.doc, callback)
    }
  }
}
