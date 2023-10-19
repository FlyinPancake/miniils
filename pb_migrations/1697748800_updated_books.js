/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("twktmuo9xq9v3gq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wwgibw8y",
    "name": "shelf",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "mc1bk8o7ynzz9hq",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("twktmuo9xq9v3gq")

  // remove
  collection.schema.removeField("wwgibw8y")

  return dao.saveCollection(collection)
})
