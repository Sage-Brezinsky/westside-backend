var router = require('express').Router();
var mongoose = require('mongoose');
var Article = mongoose.model('Article');

// return a list of tags
router.post('/', function(req, res, next) {
  Article.remove().then(() => {
    if (req.body) 
    {
      console.log(req.body)
      var article = new Article();
      article.service = req.body;
      article.save().then(() => {
        return res.json({success: 'success'})
      }).catch(next);
    }
  })
});

router.get('/', (req, res, next) => {
  Article.findOne(true).then((service) => {
    return res.json({service: service.service});
  }).catch(next);
})

module.exports = router;
