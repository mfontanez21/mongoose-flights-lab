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
  console.log(req.body);
  for (let key in req.body) {
	  if (req.body[key] === '') delete req.body[key]
	}
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


function show(req, res){
  Flight.findById(req.params.flightId)
  .then(flight =>{
    res.render('flights/show', {
      title: 'Flight Details',
      flight,
    })
  })
  .catch(err =>{
    console.log(err);
    res.redirect('/')
  })
}


function deleteFlight(req,res){
  Flight.findByIdAndDelete(req.params.flightId)
  .then(flight =>{
    res.redirect('/flights')
  })
  .catch(err => {
    console.log(err);
    res.redirect('/flights')
  })
}

function edit(req, res){
  Flight.findById(req.params.flightId)
  .then(flight =>{
    res.render('flights/edit', {
      flight,
      title: "Edit Flight"
    })
  })
  .catch(err => {
    console.log(err);
    res.redirect('/flights')
  })
}

function update(req, res){
  Flight.findByIdAndUpdate(req.params.flightId, req.body, {new: true})
    .then(movie => {
      res.redirect(`/flights/${flight._id}`)
    })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function createTicket(req, res) {
  Flight.findById(req.params.flightId)
  .then(flight => {
    flight.tickets.push(req.body)
    flight.save()
    .then(() => {
      res.redirect(`/flights/${flight._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect("/")
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

export {
  newFlight as new,
  create,
  index,
  show,
  deleteFlight as delete,
  edit,
  update,
  createTicket,
}