const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

function time(){
  const d = new Date();
  let s = d.getSeconds();
  let m = d.getMinutes();
  let h = d.getHours();
  h = h < 10 ? '0'+h : h;
  m = m < 10 ? '0'+m : m;
  s = s < 10 ? '0'+s : s;
  console.log(h, m, s);
  hours.textContent = h;
  minutes.textContent = m;
  seconds.textContent = s;
}

setInterval(time, 1000);