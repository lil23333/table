let table = document.querySelector('#table');
let employees = [
	{name: 'employee1', age: 30, salary: 
		400}, 
	{name: 'employee2', age: 31, salary: 
		500}, 
	{name: 'employee3', age: 32, salary: 
		600}, 
];
for (let users of employees) {
  let tr = document.createElement('tr');
  let td1 = document.createElement('td');
  td1.textContent = users.name;
  tr.appendChild(td1);

  let td2 = document.createElement('td');
  td2.textContent = users.age;
  tr.appendChild(td2);

  let td3 = document.createElement('td');
  td3.textContent = users.salary;
  tr.appendChild(td3);

  table.appendChild(tr);
  
}
