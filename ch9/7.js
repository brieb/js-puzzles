function maxNumPeople(people) {
  if (people.length === 0) {
    return 0;
  }

  people = people.sort(function(p1, p2) {
    if (p1.h === p2.h) {
      return p2.w - p1.w;
    }
    return p2.h - p1.h;
  });
  
  var included = [];

  included.push(people[0]);
  for (var i = 1; i < people.length; i++) {
    var person = people[i];
    var prevPerson = people[i-1];
    if (person.w <= prevPerson.w) {
      included.push(person);
    } else {
      var j = i - 1;
      var numIncludedWithPrev = 0;
      while (j >= 0 && person.w > people[j].w) {
        j--;
        numIncludedWithPrev++;
      }

      var k = i;
      var numIncludedWithCur = 0;
      while (k < people.length && people[k].w <= person.w) {
        k++;
        numIncludedWithCur++;
      }
      
      if (numIncludedWithCur > numIncludedWithPrev) {
        var l;
        for (l = 0; l < numIncludedWithPrev; l++) {
          included.pop();
        }
        for (l = i; l < i + numIncludedWithCur; l++) {
          included.push(people[l]);
        }
      }

      i = k;
    }
  }

  var maxSize = _maxPyramidSize(included.length);
  return included.splice(-1 * maxSize, maxSize);
}

function _maxPyramidSize(count) {
  var maxSize = 0, size = 1;
  var layerSize = 1;
  while (size < count) {
    maxSize = size;
    layerSize++;
    size += layerSize;
  }
  return maxSize;
}

var people;

people = [
  { h: 65, w: 100 },
  { h: 70, w: 150 },
  { h: 56, w: 90 },
  { h: 75, w: 190 },
  { h: 60, w: 95 },
  { h: 68, w: 110 },
  { h: 100, w: 200 },
];

people2 = [
  { h: 53, w: 81 },
  { h: 54, w: 82 },
  { h: 55, w: 85 },
  { h: 56, w: 80 },
  { h: 57, w: 84 },
  { h: 60, w: 90 },
  { h: 60, w: 95 },
  { h: 65, w: 100 },
  { h: 70, w: 150 }
];

console.log(maxNumPeople(people).length);
