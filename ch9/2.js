function sortByAnagram(strings) {
  return strings.sort(function(a, b) {
    console.log(a, b);
    var aSort = a.split('').sort().join('');
    var bSort = b.split('').sort().join('');
    return aSort === bSort ? 0 :
      aSort < bSort ? -1 : 1;
  });
}

console.log(sortByAnagram([
      'kayak',
      'jolly',
      'green',
      'kayka',
      'giant',
      'lolyoj'
      ]));
