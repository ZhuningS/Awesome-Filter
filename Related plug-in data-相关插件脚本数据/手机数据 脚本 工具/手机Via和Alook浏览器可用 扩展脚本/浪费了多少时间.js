(function() {
    'use strict';
  CreateNode();
  let CurrentPage = 0;
  let inCurrentPage = false;
  window.onblur = ()=>{
    inCurrentPage = false;
  }
  window.onfocus = ()=>{
    inCurrentPage = true;
  }

  function getValue(Time){
    let arr  =[
      {
        key:"√Î",
        cir:60,
      },
      {
        key:"∑÷",
        cir:60,
      },
      {
        key:" ±",
        cir:24,
      },
      {
        key:"ÃÏ",
        cir:Infinity,
      }
    ];
    let word = "";
    for(let unit of arr){
      //console.log(Time,unit.cir,word);
      if(Time>0){
        word = unit.key + word;
      }
      word = Time%unit.cir + " "+word;
      Time =  parseInt(Time/unit.cir);
      if(Time < 1){break};
    }
    return word;
  }
  window.onmousemove = ()=>{
      inCurrentPage = true;
      setInterval(()=>{
        if(inCurrentPage){
          let Time = ++CurrentPage;
          document.querySelector(".wasted_time").innerText = ("- "+getValue(Time));
        }
      },1000);
      window.onmousemove = "";
  }
  function CreateNode(){
    let div=document.createElement("div");
    div.setAttribute("class","wasted_time");
    let style=document.createElement("style");
    div.appendChild(document.createTextNode("- 0 √Î"));
    style.appendChild(document.createTextNode(`
    .wasted_time{
        font-size:14px;
        position:fixed;
        display:block;
        text-align:center;
        cursor:default;
        padding:3px 20px;
        border-radius:3px;
        background-color:rgb(208, 212, 206);
        right:17px;
        bottom:3px;
        z-index:999999;
        color:rgb(17, 82, 17);
        text-shadow:0 0 0.1px rgba(0,0,0,0.5);
        user-select:none;
        box-shadow:0 0 7px 0 rgba(18, 80, 18,0.4),0 0 0 1px rgba(0,0,0,0.3);
      }
    `));
    document.querySelector("body").appendChild(div);
    document.querySelector("body").appendChild(style);
  };

})();