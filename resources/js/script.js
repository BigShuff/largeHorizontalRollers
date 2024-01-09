const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
const backBtn = document.querySelector('.backBtn');

btn.addEventListener('click', resetFunctionBtn);
backBtn.addEventListener('click', resetFunctionBackBtn);

function resetFunctionBtn() {
  if (container.classList.contains('rotate2')){
    container.classList.remove('rotate2');
  }
    container.classList.add('rotate1');
    container.style.animationName = "none";
    requestAnimationFrame(() => {
      setTimeout(() => {
        container.style.animationName = ""
      }, 0);
    });
    btn.style.opacity = '0.5';
    btn.style.cursor = 'none';
  }

   


function resetFunctionBackBtn() {

    container.classList.add('rotate2');
    container.style.animationName = "none";
    requestAnimationFrame(() => {
      setTimeout(() => {
        container.style.animationName = ""
      }, 0);
    });
    btn.style.opacity = '1';
    btn.style.cursor = 'pointer';
  }


// const rotateForwards = {
//   let btn = document.querySelector('.btn');
// }

// const rotateBackwards = {

// }






