/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "mc1bk8o7ynzz9hq",
    "created": "2023-10-19 20:52:21.883Z",
    "updated": "2023-10-19 20:52:21.883Z",
    "name": "shelfs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "isjicikw",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("mc1bk8o7ynzz9hq");

  return dao.deleteCollection(collection);
})
