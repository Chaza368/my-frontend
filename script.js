document.getElementById('btn').addEventListener('click', () => {
  fetch('INSERTURLHERE/api/data')
    .then(res => res.json())
    .then(data => {
      document.getElementById('output').textContent = JSON.stringify(data, null, 2);
    })
    .catch(err => {
      document.getElementById('output').textContent = 'Error: ' + err;
    });
});

