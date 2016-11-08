import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { Model } from '../models/Model'

export default function Collection(collectionName) {
  return function decorate(Class) {
    Class.collection = new Mongo.Collection(collectionName, {
      transform(doc) {
        return new Class(doc)
      },
    })
  }
}
