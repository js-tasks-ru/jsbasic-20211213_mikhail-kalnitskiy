function showSalary(users, age) {
  let someUsers = users.filter(item => item.age <= age);

  let usersMapped = someUsers.map(item => {
    for(let i=0; i<users.length-1; i++) {
      `${item.name}, ${item.balance}\n`
    }
    someUsers.push(someUsers[someUsers.length]);
  });

  return String(usersMapped);
};

