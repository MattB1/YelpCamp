var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware"); // this automatically will get index.js


// INDEX
router.get("/", function (req, res) {
  console.log(req.user);
  // get all campgrounds from DB
  Campground.find({}, function (err, allcampgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render("campgrounds/index", { campgrounds: allcampgrounds });
    }
  });

  //res.render("campgrounds", { campgrounds: campgrounds });
});

// CREATE
router.post("/", middleware.isLoggedIn, function (req, res) {
  var name = req.body.name;
  var price = req.body.price;
  var image = req.body.image;
  var desc = req.body.description;
  var author = {
    id: req.user._id,
    username: req.user.username
  }
  var newCampground = {
    name: name, price: price, image: image, description: desc, author: author
  };
  // creste a new campground and save to DB
  Campground.create(newCampground, function (err, newlyCreated) {
    if (err) {
      console.log(err)
    } else {
      // redirect back to campgrounds page
      res.redirect("/campgrounds");
    }
  })

  // get data from form and add to campgrounds array
})

// NEW - show form for the 
router.get("/new", middleware.isLoggedIn, function (req, res) {
  res.render("campgrounds/new");
})

// SHOW - shows more info about one campground
router.get("/:id", function (req, res) {
  // find the campground with provided ID
  // FinyById(id, callback)
  Campground.findById(req.params.id).populate("comments").exec(function (err, foundCampground) {
    if (err) {
      console.log(err)
    } else {
      console.log(foundCampground);
      // render the show template with that capmground
      res.render("campgrounds/show", { campground: foundCampground });
    }
  })

})

//EDIT CAMPGROUND ROUTE
router.get("/:id/edit", middleware.checkCampgroundOwnership, function (req, res) {
  Campground.findById(req.params.id, function (err, foundCampground) {
    res.render("campgrounds/edit", { campground: foundCampground });
  })
});
//UPDATE CAMPGROUND ROUTE
router.put("/:id", middleware.checkCampgroundOwnership, function (req, res) {

  // find and update the correct campground
  Campground.findByIdAndUpdate(req.params.id, req.body.campground, function (err, updatedCampground) {
    if (err) {
      res.redirect("/campgrounds")
    } else {
      res.redirect("/campgrounds/" + req.params.id);
    }
  })
  //redirect somewhere(show page)
})

// DESTROY CAMPGROUND ROUTE
router.delete("/:id", middleware.checkCampgroundOwnership, function (req, res) {
  Campground.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
      res.redirect("/campgrounds");
    } else {
      res.redirect("/campgrounds");
    }
  })
});


module.exports = router;
