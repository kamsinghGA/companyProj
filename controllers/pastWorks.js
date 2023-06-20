const Past = require('../models/pastWork');

module.exports = {
    index
}
  
function index(req, res) {
    res.render('pastWorks', {
        pastWorks: Past.getAll(),
        title: 'All Past Works'
    });
}