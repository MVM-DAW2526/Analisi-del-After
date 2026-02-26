
const consumicions = [
  { nom: 'Cervesa', preu: 5 },
  { nom: 'Copa Premium', preu: 15 },
  { nom: 'Aigua', preu: 3 },
  { nom: 'Shot de Tequila', preu: 8 },
  { nom: 'Ampolla reservat', preu: 200 }
];

const llistaFinal = consumicions 
.filter(n => n.preu > 50)
.map(n => n.nom ? `${n.nom} CARO 💸` : `${n.nom} ACCEPTABLE ✅`);

console.log(llistaFinal);