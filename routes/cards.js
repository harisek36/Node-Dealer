var express = require('express');
var router = express.Router();

const cards = require('../model/cards');

/* GET play History. */
router.get('/', function(req, res, next) {

  cards.find(function (err,playHistory) {

    res.json(playHistory);
    if(err){
        res.json({msg:'Failed to Get Card History !!'});
    }
  })

});

router.post('/',function (req,res,next) {
    var newCard = new cards({
        shuffledCards:req.body.shuffledCards,
        score:req.body.score
    });

    newCard.save(function (err,user) {
        if(err){
            res.json({msg:'Failed to save game play !!'});
        }
        else{
            res.json({msg:'Card play saved successfully !!'});
        }
    });
});



module.exports = router;
