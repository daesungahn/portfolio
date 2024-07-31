const bb2 = document.querySelector(".btn_box2");

    //각 영역이 보이게될 스크롤값 구하기

const home = document.querySelector("#home").offsetTop;
const vs = document.querySelector("#container").clientHeight;

///////// 스크롤 하는동안(스크롤할때마다) //////////
  window.addEventListener("scroll",function(){
    let sc = window.scrollY; 

      if ( sc > home ) { bb2.style.left = "0%"; }  
          else { bb2.style.left = "-20%"; }
          if ( sc > vs ) { bb2.style.left = "-20%"; } 
  });


