window.onload = function(){

  const start = document.getElementById("start");
  const container = document.getElementById("container");
  const text = document.getElementById("text");
  const img = document.getElementById("img");
  const phonk = document.getElementById("phonk");

  const l1 = document.getElementById("laser1");
  const l2 = document.getElementById("laser2");

  let p1, p2;
  

  start.onclick = function(){

    container.style.display = "none";

    setTimeout(()=>{
      text.innerText="happy birthday.";
      text.style.opacity="1";
    },300);

    setTimeout(()=>{
      text.innerText="now watch this. alpha mode on 😈😈";
    },1800);

    setTimeout(()=>{
      phonk.play().catch(()=>{});
      img.style.opacity="1";
      img.style.transform="translate(-50%, -50%) scale(1.1)";
    },2600);

    setTimeout(()=>{
      let r = img.getBoundingClientRect();

      p1 = { x: r.left + 165, y: r.top + 145 };
      p2 = { x: r.left + 212, y: r.top + 145 };

      l1.style.left = p1.x + "px";
      l1.style.top  = p1.y + "px";

      l2.style.left = p2.x + "px";
      l2.style.top  = p2.y + "px";

      l1.style.display = "block";
      l2.style.display = "block";

    },3200);

  };

  document.addEventListener("mousemove", (e)=>{
    if(!p1) return;

    let a1 = Math.atan2(e.clientY - p1.y, e.clientX - p1.x);
    let a2 = Math.atan2(e.clientY - p2.y, e.clientX - p2.x);

    l1.style.transform = `rotate(${a1 - Math.PI/2}rad)`;
l2.style.transform = `rotate(${a2 - Math.PI/2}rad)`;
  });

};