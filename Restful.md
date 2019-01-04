# RESTFUL Routes

|  name  |  url |   verb | description  |
|---|---|---|---|
|INDEX |  /dogs |      GET  | Display a list of all dogs  | 
|NEW |    /dogs/new |  GET |  Display form to make a new dog  |
|CREATE | /dogs  |     POST | Add new dog to DB |
|SHOW|    /dogs/:id |  GET|   Shows info about one dog|

## REST

* REST - a mapping between HTTP routes and CRUD
* Convention has 7 RESTful routes
* Index, New, Create, Show, Edit, Update, Destroy



## RESTful Routes
|Name|	Path|	HTTP| Verb|	Purpose|	Mongoose| Method|
|---|---|---|---|---|---|---|
|Index|	/dogs|	GET|	List all dogs	|Dog.find()|
|New|	/dogs/new|	GET|	Show new dog form|	N/A|
|Create|	/dogs|	POST|	Create a new dog, then redirect somewhere|	Dog.create()|
|Show|	/dogs/:id|	GET|	Show info about one specific dog|	Dog.findById()|
|Edit|	/dogs/:id/edit|	GET|	Show edit form for one dog|	Dog.findById()|
|Update|	/dogs/:id|	PUT|	Update particular dog, then redirect somewhere|	Dog.findByIdAndUpdate()|
|Destroy|	/dogs/:id|	DELETE|	Delete a particular dog, then redirect somewhere|	Dog.findByIdAndRemove()|