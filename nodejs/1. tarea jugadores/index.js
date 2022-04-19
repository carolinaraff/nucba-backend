const jugadores = [
    {id: 1, nombre: 'Messi', logros: 395},
    {id: 2, nombre: 'Jennifer Hermoso', logros: 234},
    {id: 3, nombre: 'Maradona', logros: 455},
    {id: 4, nombre: 'Alexia Putellas', logros: 356},
    {id: 5, nombre: 'Cristiano Ronaldo', logros: 78},
];


const fGral = () => {
	let total = 0;
	for (let i = 0; i < jugadores.length; i++){
		total += jugadores[i].logros;
	}

	const cantJugadores = jugadores.length;
	let promedio = total / cantJugadores;

	let max = 0;
	let jugadorActMax;
	let min = 10000;
	let jugadorActMin;
	jugadores.forEach((jugador) => {
		if (jugador.logros > max){
			max = jugador.logros 
			jugadorActMax = jugador.nombre
		} else if (jugador.logros < min) {
			min = jugador.logros 
			jugadorActMin = jugador.nombre
		} else {
			return 
		}
	})

	nombres = jugadores.map((value) => value.nombre);

	const jugadas = {
		'total jugadas': total,
		promedio,
		'jugador con mas jugadas': jugadorActMax,
		max,
		'jugador con menos jugadas': jugadorActMin,
		min,
		nombres
	}

	console.log(jugadas);
}

fGral();