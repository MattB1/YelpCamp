var Campground = require("../models/campground")
var Comment = require("../models/comment")

// the middleware goes here
var middlewareObj = {};


middlewareObj.checkCampgroundOwnership = function (req, res, next) {
  if (req.isAuthenticated()) {
    Campground.findById(req.params.id, function (err, foundCampground) {
      if (err) {
        res.redirect("back")
      } else {
        // added this block to check if founCampground exists, for security
        if (!foundCampground) {
          req.flahs("error", "Item not found.")
        } else {
          return res.redirect("back")
        }
        //if the upper coniditon is true this will break out of the middleware



        // does user own the campground
        if (foundCampground.author.id.equals(req.user._id)) {
          next();
        } else {
          req.flash("error", "you don't have permission to do that!")
          res.redirect("back");
        }
      }
    });
  } else {
    req.flash("error", "You need to be logged in to do that")
    res.redirect("back");
  }
}

middlewareObj.checkCommentOwnership = function (req, res, next) {
  if (req.isAuthenticated()) {
    Comment.findById(req.params.comment_id, function (err, foundComment) {
      if (err) {
        req.flash("error", "Campground not found");
        res.redirect("back")
      } else {
        // added this block to check if founCampground exists, for security
        if (!foundCampground) {
          req.flahs("error", "Item not found.")
        } else {
          return res.redirect("back")
        }
        //if the upper coniditon is true this will break out of the middleware

        // does user own the comment?
        if (foundComment.author.id.equals(req.user._id)) {
          next();
        } else {
          req.flash("error", "you don't have permission to do that!")
          res.redirect("back");
        }
      }
    });
  } else {
    req.flash("errpr", "you need to be logged in to do that!")
    res.redirect("back");
  }
}

middlewareObj.isLoggedIn = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash("error", "You need to be logged in to do that!"); // flash will go on the next page (or request)
  res.redirect("/login");
}


module.exports = middlewareObj;