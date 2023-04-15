import { Flight } from '../models/flight.js'

function index(req, res) {
  Flight.find({})
  .then(flights => { 
    res.render('flights/index', {
      flights,
      title: 'All Flights'
    })
  })
  .catch(error => { 
    console.log(error)
    res.redirect('/flights/new')
  })
}

function newFlight(req, res){
  res.render('flights/new.ejs', {
    title: 'Add Flight'
  })
}

function create(req, res){
  Flight.create(req.body)
  .then(flight =>{
    console.log(flight);
    res.redirect('/flights')
  })
  .catch(err => {
    console.log(err);
    res.redirect('/flights')
  })
}






export {
  newFlight as new,
  create,
  index,
}