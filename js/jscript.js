//For showing tooltips
if (window.screen.width <= 600) {
  document.addEventListener('DOMContentLoaded', function () {
    const elems = document.querySelectorAll('.tooltipped');
    const instances = M.Tooltip.init($(elems).show());
    console.log(window.screen.width);
  });
}

const projects = document.querySelectorAll(".activator");
const closers = document.querySelectorAll(".close");

function showName() {
  const projectName = this.dataset.name;
  const projectNameElem = document.getElementById(projectName);
  projectNameElem.style.zIndex = 2;
  $(`#${projectName}`).slideDown(800);

  // projectNameElem.style.display = "block";
}
function hideName() {
  const projectName = this.dataset.name;
  const projectNameElem = document.getElementById(projectName);
  projectNameElem.style.zIndex = -1;
  $(`#${projectName}`).slideUp(800);
  // projectNameElem.style.display = "none";
}

projects.forEach(project => project.addEventListener("click", showName));
closers.forEach(closer => closer.addEventListener("click", hideName));



  //Another way of showing and hiding project names
// function showName(id) {
//   const projectName = document.getElementById(id);
//   projectName.style.display = "block";
// }
// function hideName(id) {
//   const projectName = document.getElementById(id);
//   projectName.style.display = "none";
// }