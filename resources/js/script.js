const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
const backBtn = document.querySelector('.backBtn');

btn.addEventListener('click', resetFunctionBtn);
backBtn.addEventListener('click', resetFunctionBackBtn);



function resetFunctionBtn() {
  if (container.classList.contains('rotate2')) {
    container.classList.remove('rotate2');
  } else {
    container.classList.add('rotate1');
    container.style.animationName = "none";
    requestAnimationFrame(() => {
      setTimeout(() => {
        container.style.animationName = ""
      }, 0);
    });
  }


}

  if (container.classList.contains('rotate1')) {
    function resetFunctionBackBtn() {
    container.classList.remove('rotate1');
  } else {
    container.classList.add('rotate2');
    container.style.animationName = "none";
    requestAnimationFrame(() => {
      setTimeout(() => {
        container.style.animationName = ""
      }, 0);
    });
  }
}
//animation direction set to reverse










