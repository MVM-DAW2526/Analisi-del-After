const consumicions = [
  { nom: 'Cervesa', preu: 5 },
  { nom: 'Copa Premium', preu: 15 },
  { nom: 'Aigua', preu: 3 },
  { nom: 'Shot de Tequila', preu: 8 },
  { nom: 'Ampolla reservat', preu: 200 }
];

// 1. Filtra les consumicions que costin més de 10€.
// 2. Amb el resultat, crea un nou array de strings (map) que digui:
//    "NOM: [CARO 💸]" si val més de 50€, o "NOM: [ACCEPTABLE ✅]" si no.

// PISTA: const llistaFinal = consumicions.filter(...).map(...);