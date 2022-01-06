function makeFriendsList(friends) {

  let ul = document.createElement('ul');

  let listFriends = friends.map(item => {
    return `${item.firstName} ${item.lastName}`
  });

        for (let i = 0; i < listFriends.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = listFriends[i];
        ul.append(li);
      }

      return ul;

}
