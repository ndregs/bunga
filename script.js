setInterval(() => {
  let day = new Date();
  let hr = day.getHours() * 30;
  let min = day.getMinutes() * 6;
  let sec = day.getSeconds() * 6;

  document.getElementById("hr").style.transform = `rotateZ(${hr + (min / 12)}deg)`;
  document.getElementById("mn").style.transform = `rotateZ(${min}deg)`;
  document.getElementById("sc").style.transform = `rotateZ(${sec}deg)`;
});
