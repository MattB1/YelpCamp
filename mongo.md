# MongoDB

`mongod`
* starts the mongo deamon

`mongo`
* do this in a new tab, it starts the mongo shell

`help` 
* this shows up the commands that will help us.

`show dbs`
* shows all the dbs that exist

`use`
* will switch to the specified database e.g `use students` will switch the the students database

`insert`
* inserts new bson data into the database  e.g 
```
db.students.insert({name: "Magda", age: 24});
```

`find`
```
db.dogs.find()
```
* finds all data within the dogs database
```
db.dogs.find({breed: "Mutt"})
```
* displays all dogs where breed is equal to Mutt

`update`
* be careful with update, it will erase the other data if you aren't careful.
* we need to select what we want to change and then modify the existing data.
* To prevent writing over data use `$set` like this:
```
db.dogs.update({name: "Rusty"}, {$set: {name:
"Tater"}})
```

`remove`
* we select what we want to destroy.
```
db.dogs.remove({breed: "Labradoodle"})
```

`CRUD`
* Create, reuse, update, destroy

`