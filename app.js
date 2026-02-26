
const consumicions = [
  { nom: 'Cervesa', preu: 5 },
  { nom: 'Copa Premium', preu: 15 },
  { nom: 'Aigua', preu: 3 },
  { nom: 'Shot de Tequila', preu: 8 },
  { nom: 'Ampolla reservat', preu: 200 }
];

const llistaFinal = consumicions 
.map(n => n.preu > 10 ? `${n.nom} CARO` : `${n.nom} ACCEPTABLE`);

console.log(llistaFinal);
