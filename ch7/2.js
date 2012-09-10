var LEVEL = {
  1: 'fresher',
  2: 'tl',
  3: 'pm'
};

function Employee(level) {
  this.isFree = true;
  this.level = level;
  this.call = null;
}

Employee.prototype = {

};

function Call() {
  this.level = 0;
}

function CallHandler() {
  this.queues = [];
  this.employees = [];
}

CallHandler.prototype = {
  handleCall: function(incomingCall) {
    for (var i = 0; i < this.levels.length; i++) {
      var level = this.levels[i];
      for (var j = 0; j < this.employees[level.name].length; j++) {
        var employee = this.employees[level.name][j];
        if (!employee.call) {
          employee.call = incomingCall;
          return true;
        }
      }
    }
    return false;
  },

  _addLevel: function(level, name) {
    this.levels.push({
      name: name,
      level: level
    });
    this.levels = this.levels.sort(function(level1, level2) {
      return level1.level - level2.level;
    });
  },

  addEmployeeType: function(name, level, employees) {
    this._addLevel(level, name);
    employees = employees || [];
    this.employees[name] = employees;
  },

  addEmployeeToType: function(employee, type) {
    this.employees[type].list.push(employee);
  }
};
