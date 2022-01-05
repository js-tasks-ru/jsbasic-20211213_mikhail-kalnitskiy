function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  let text = document.querySelector('#text');
  	hide = () => {text.classList.toggle('hidden');
    if (text.classList.contains("hidden")) {
      text.setAttribute('hidden', true)
    } else {
      text.removeAttribute('hidden')    }
  };


  	button.addEventListener("click", hide);
};
