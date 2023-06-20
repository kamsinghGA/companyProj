const pastWorks = [
  {id: 125223, work: 'Space Battle', done: true},
  {id: 127904, work: 'Castle Battle', done: true},
  {id: 139608, work: 'Terminal Game', done: false}
];

module.exports = {
    getAll
}
  
function getAll() {
    return pastWorks;
}