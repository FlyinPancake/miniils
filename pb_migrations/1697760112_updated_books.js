/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("twktmuo9xq9v3gq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aokjffiw",
    "name": "cover",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/x-xpixmap",
        "image/heic",
        "image/heif",
        "image/heif-sequence",
        "image/svg+xml",
        "image/vnd.mozilla.apng",
        "image/png",
        "image/webp",
        "image/jpeg"
      ],
      "thumbs": [],
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "drqrqgpy",
    "name": "isbn",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 10,
      "max": 13,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("twktmuo9xq9v3gq")

  // remove
  collection.schema.removeField("aokjffiw")

  // remove
  collection.schema.removeField("drqrqgpy")

  return dao.saveCollection(collection)
})
