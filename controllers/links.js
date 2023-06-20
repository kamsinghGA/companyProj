const Link = require('../models/link');

module.exports = {
    index
}
  
function index(req, res) {
    res.render('links', {
        links: Link.getAll(),
        title: 'All Links'
    });
}