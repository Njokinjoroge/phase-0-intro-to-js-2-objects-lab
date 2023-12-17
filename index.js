// Write your solution in this file!
const employee = {}
employee.name = 'morgan'
employee.address = '586villagemarket'
function updateEmployeeWithKeyAndValue(employee, key, value) {
    // create a new object that is a shallow copy of the employee
    let newEmployee = { ...employee };
    
    // set the new value for the specified key
    newEmployee[key] = value;
    
    // return the new object
    return newEmployee;
  }
  function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value
    return employee
  }
  function deleteFromEmployeeByKey(employee, key) {
    // Clone the employee
    let newEmployee = { ...employee };
   
    // Delete the key from the new employee
    delete newEmployee[key];
   
    // Return the new employee
    return newEmployee;
   }
   function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // check if the key exists in the employee object
    if (employee.hasOwnProperty(key)) {
       // delete the key/value pair from the employee object
       delete employee[key];
    }
    // return the original employee object - it has been modified destructively
    return employee;
}