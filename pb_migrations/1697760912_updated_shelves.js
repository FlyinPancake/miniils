/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mc1bk8o7ynzz9hq")

  collection.listRule = "@request.auth.id = owner"
  collection.viewRule = "@request.auth.id = owner"
  collection.createRule = "@request.auth.id = owner"
  collection.updateRule = "@request.auth.id = owner"
  collection.deleteRule = "@request.auth.id = owner"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mc1bk8o7ynzz9hq")

  collection.listRule = "@request.auth.id = owner.id"
  collection.viewRule = "@request.auth.id = owner.id"
  collection.createRule = "@request.auth.id = owner.id"
  collection.updateRule = "@request.auth.id = owner.id"
  collection.deleteRule = "@request.auth.id = owner.id"

  return dao.saveCollection(collection)
})
