//const container = document.querySelector('.container');
// const btn = document.querySelector('.btn');
// const backBtn = document.querySelector('.backBtn');

// function resetFunctionBtn() {
//   if (container.classList.contains('rotate2')){
//     container.classList.remove('rotate2');
//   }
//     container.classList.add('rotate1');
//     container.style.animationName = "none";
//     requestAnimationFrame(() => {
//       setTimeout(() => {
//         container.style.animationName = ""
//       }, 0);
//     });
//     btn.style.opacity = '0.5';
//     btn.style.cursor = 'none';
//   }

//  function resetFunctionBackBtn() {

//     container.classList.add('rotate2');
//     container.style.animationName = "none";
//     requestAnimationFrame(() => {
//       setTimeout(() => {
//         container.style.animationName = ""
//       }, 0);
//     });
//     btn.style.opacity = '1';
//     btn.style.cursor = 'pointer';
//   }

// btn.addEventListener('click', resetFunctionBtn);
// backBtn.addEventListener('click', resetFunctionBackBtn);
  //*************************************************************************************************
  //*************************************************************************************************


const rotate = {
  resetFunctionBtn(container, fwdBtn) {
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
      fwdBtn.style.opacity = '0.5';
      fwdBtn.style.cursor = 'none';
 
    },

    resetFunctionBackBtn(container, fwdBtn) {
      container.classList.add('rotate2');
      container.style.animationName = "none";
      requestAnimationFrame(() => {
        setTimeout(() => {
          container.style.animationName = ""
        }, 0);
      });
      fwdBtn.style.opacity = '1';
      fwdBtn.style.cursor = 'pointer';
    },
};


 const container = document.querySelector('.container');
 const fwdBtn = document.querySelector('.fwdBtn');
 const backBtn = document.querySelector('.backBtn');
 fwdBtn.addEventListener('click', function(){rotate.resetFunctionBtn(container, fwdBtn)});
 backBtn.addEventListener('click', function(){rotate.resetFunctionBackBtn(container, fwdBtn)});
