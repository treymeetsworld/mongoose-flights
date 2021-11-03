import { Flight } from '../models/flights.js'



function index(req,res){
  Flight.find({},function (error,flights){
    res.render('flights/index',{
      flights,
      error,
      title: 'All Flights',
    })
  })
}

function newFlight(req,res){
  res.render('flights/new')
}

function create(req,res){
  console.log(req.body);
  const flight = new Flight(req.body)
  console.log(req.body);
  flight.save(function (err) {
    console.log(req.body);
    console.log(flight);
    if (err) return res.render('flights/new')
    res.redirect('/flights')
  })
}

function show(req,res){
Flight.findById(req.params.id, function (err,flight){
  res.render('flights/show',{
    title: 'Flight details',
    flight: flight,
  })
})
}

export{
  index,
  newFlight as new,
  create,
  show,
}