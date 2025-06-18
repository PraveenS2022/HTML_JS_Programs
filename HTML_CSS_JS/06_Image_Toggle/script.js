let toggle = true;
function toggleImage() {
  const img = document.getElementById('img');
  img.src = toggle ? 'https://via.placeholder.com/200' : 'https://via.placeholder.com/150';
  toggle = !toggle;
}