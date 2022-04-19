const moment = require('moment');
const expedi = [
    {
        expedicion: 'Rover Perseverance',
        fecha: moment("20200730", "YYYYMMDD")
    },
    {
        expedicion: 'Apolo 1',
        fecha: moment("19670221", "YYYYMMDD") 
    },
    {
        expedicion: 'Voyager 1',
        fecha: moment("19770905", "YYYYMMDD")
    },
    {
        expedicion: 'Cassini',
        fecha: moment("19971015", "YYYYMMDD")
    }
]

expedi.forEach((ex)=> {
    console.log(`The expedition ${ex.expedicion} was ${ex.fecha.fromNow()}`);
})