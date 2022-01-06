function hideSelf() {
  let button = document.querySelector('.hide-self-button');
  	console.log(button);

  	hide = () => button.setAttribute('hidden', true);

  	button.addEventListener("click", hide);
}
