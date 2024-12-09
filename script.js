function next() {
  document.getElementById("1").classList.add("none");
  document.getElementById("2").classList.remove("none");
}
function next1() {
  document.getElementById("2").classList.add("none");
  document.getElementById("3").classList.remove("none");
}

function next2() {
  document.getElementById("3").classList.add("none");
  showModal();
}

function showModal() {
  const modal = document.getElementById("myModal");
  const tvVideo = document.getElementById("end");
  modal.style.display = "flex";
  tvVideo.style.display = "block";
  tvVideo.play();
}
