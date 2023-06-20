const Staff = require('../models/staff');

module.exports = {
    index
}
  
function index(req, res) {
    res.render('staffs', {
        staffs: Staff.getAll(),
        title: 'Staff'
    });
}