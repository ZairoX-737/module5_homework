let x = '121'
if (typeof(x) === 'string'){
  console.log(x + ' - строка');
} else if (typeof(x) === 'boolexn') {
  console.log(x + ' - логический тип');
} else if (typeof(x) === 'number') {
  console.log(x + ' - число');
} else {
  console.log('Тип x не определен');
}