function showSalary(users, age) {
   // Фильтрует пользователей, которые нам подходят
   let someUsers = users.filter(item => item.age <= age);

   // Создает массив строк
   let usersMapped = someUsers.map(item => {
     return `${item.name}, ${item.balance}`
   });

   // Объединяет массив в одну строку
   return usersMapped.join('\n');
};

