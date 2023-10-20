/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mc1bk8o7ynzz9hq")

  collection.name = "shelves"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mc1bk8o7ynzz9hq")

  collection.name = "shelfs"

  return dao.saveCollection(collection)
})
