"use strict";

const dynamoose = require("dynamoose");

dynamoose.AWS.config.update({
  accessKeyId: "AKIAJRCOU4VD47ZTPXTQ",
  secretAccessKey: "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",
  region: "us-east-1"
});

var Cat = dynamoose.model("Cat", { id: Number, name: String });

var garfield = new Cat({ id: 777, name: "Garfield!" });

garfield.save();

Cat.get(777).then(function(badCat) {
  console.log("Never trust a smiling cat. - " + badCat.name);
});
