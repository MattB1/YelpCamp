var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
  {
    name: "Cloud's Rest",
    image: "https://cdn.shopify.com/s/files/1/2468/4011/products/campsite_1_600x.png?v=1524622915",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum turpis vel tempus vehicula. Phasellus tincidunt velit dolor, eget venenatis metus dapibus non. In sit amet elementum enim, sed scelerisque ipsum. Quisque eget posuere est. Nullam faucibus, ex faucibus laoreet fringilla, augue risus commodo nunc, sed laoreet libero ligula et magna. Suspendisse placerat libero magna, nec feugiat odio efficitur ut. Aliquam non diam dui. Sed dignissim nisi eget rhoncus mollis. Aliquam vehicula pulvinar mauris at feugiat. Suspendisse potenti. Nam id imperdiet lorem, quis tincidunt quam. Fusce eros velit, maximus id eleifend accumsan, volutpat non felis. Quisque eu enim quis augue ornare pulvinar. Morbi lobortis dui ornare scelerisque cursus.",
  },
  {
    name: "Mantle's Mound",
    image: "http://www.onguma.com/uploads/1/1/7/5/117537555/201604-aoba-935_2_orig.jpg",
    description: "Curabitur fermentum dictum felis, sit amet molestie mauris aliquet ac. Nunc mollis sollicitudin justo, et feugiat eros elementum at. Fusce ex dolor, finibus non viverra sit amet, tempor sed turpis. Nunc non risus ac diam bibendum pretium. Integer auctor turpis nibh. Sed ultricies tincidunt fringilla. Curabitur tincidunt hendrerit mi ac tristique. Pellentesque consectetur ex at dapibus malesuada. Ut vitae nisl id sapien scelerisque venenatis. Pellentesque justo neque, commodo at ligula non, fringilla vestibulum massa. Sed commodo volutpat risus, sollicitudin laoreet purus blandit ut. Vivamus eu faucibus nunc. Cras ut vulputate lorem. Maecenas mattis leo et erat tristique, nec porta felis congue. Nulla porta facilisis libero vel aliquet.",
  },
  {
    name: "Sooople Site",
    image: "https://static1.squarespace.com/static/57a33100579fb3f47b0e4f5f/57c33c569f745643297c9a2b/57c33c568419c2d24d5e3839/1472412848948/Campsite7.jpg",
    description: "Quisque at efficitur eros. Fusce fringilla imperdiet ex, at molestie mi placerat commodo. Donec in condimentum velit. Vestibulum egestas elementum odio, dapibus interdum ex dignissim quis. Aenean sollicitudin, justo in congue consequat, mauris nibh convallis urna, sed consequat sapien velit a orci. Nam ac arcu vel quam convallis aliquet vitae id ipsum. Maecenas turpis enim, hendrerit a tellus ut, imperdiet euismod justo. Pellentesque vulputate rhoncus nisi, sed malesuada justo lacinia sed."
  }
]

function seedDB() {
  // REmove all campgrounds
  Campground.remove({}, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("removed campgrounds");
      // Add a few campgrounds
      data.forEach(function (seed) {
        Campground.create(seed, function (err, campground) {
          if (err) {
            console.log(err)
          } else {
            console.log("added a campground");
            // create a comment
            Comment.create({ text: "This place is great, but i wish there was internet", author: "Homder" }, function (err, comment) {
              if (err) {
                console.log(err)
              } else {
                campground.comments.push(comment);
                campground.save();
                console.log("Created new comment");
              }
            })
          }
        })
      })
    }
  });



  // Add a few comments
}

module.exports = seedDB;