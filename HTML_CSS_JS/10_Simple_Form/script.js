function submitForm(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  document.getElementById('output').innerText = 'Hello, ' + name + '!';
}