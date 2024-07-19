function volume_sphere(event) {
  event.preventDefault();
  let radius = document.getElementById("radius").value;
  radius = Number(radius);
  if (isNaN(radius) || radius < 0) {
    document.getElementById("volume").value = "NaN";
    return;
  }
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  document.getElementById("volume").value = volume.toFixed(4);
}
window.onload = function() {
  document.getElementById('MyForm').onsubmit = volume_sphere;
};
