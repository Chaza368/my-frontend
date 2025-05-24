document.getElementById('btn').addEventListener('click', () => {
  fetch('https://1e061d7b-265d-4e30-a80b-0e3c4d039c34-00-1vsx176a6brhg.janeway.replit.dev/api/data')
    .then(res => res.json())
    .then(data => {
      document.getElementById('output').textContent = JSON.stringify(data.message, null, 2);
    })
    .catch(err => {
      document.getElementById('output').textContent = 'Error: ' + err;
    });
});

