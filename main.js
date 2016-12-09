var app = app || {};

$(function () {

  var MyModel = BackBone.Model.extend({
	  default: {
		  size:10
	  }
  });
  var MyCollection = Backbone.Collection.extend({
	  model: MyModel
  });
  var coll = new MyCollection();
  var car = new MyModel({
	  size: 75
  });
  coll.add(car);
  coll.add({});
  coll.add([ {size: 80 },{color: 'white'},{} ]);
  console.log(coll.tJSON());
  
  coll.remove(car);
  console.log(coll.toJSON());
});