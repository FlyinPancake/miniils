/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mc1bk8o7ynzz9hq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "arp1mg7f",
    "name": "owner",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mc1bk8o7ynzz9hq")

  // remove
  collection.schema.removeField("arp1mg7f")

  return dao.saveCollection(collection)
})
