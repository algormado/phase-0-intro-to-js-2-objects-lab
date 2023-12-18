// Write your solution in this file!
// Initialize employee Object
const employee = {
    name: 'Will Cox',
    streetAddress: '5th Highlane',
  };
  
  // Function to update employee Object non-destructively
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  // Function to update employee Object destructively
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete a key-value pair non-destructively
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to delete a key-value pair destructively
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Example usage
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'name', 'Will Cox');
  console.log(updatedEmployee); // Output: { name: 'Will Cox', streetAddress: '5th HighLane' }
  
  const updatedDestructiveEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'Jane Doe');
  console.log(updatedDestructiveEmployee); // Output: { name: 'Will cox', streetAddress: '5th Highlane' }
  
  const employeeWithoutStreetAddress = deleteFromEmployeeByKey(employee, 'streetAddress');
  console.log(employeeWithoutStreetAddress); // Output: { name: 'Will Cox' }
  
  const destructiveEmployeeWithoutStreetAddress = destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress');
  console.log(destructiveEmployeeWithoutStreetAddress); // Output: { name: 'Will Cox' }
  