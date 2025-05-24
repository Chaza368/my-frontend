document.getElementById('btn').addEventListener('click', function() {
  this.classList.add('clicked');
});
  fetch('https://1e061d7b-265d-4e30-a80b-0e3c4d039c34-00-1vsx176a6brhg.janeway.replit.dev/api/data')
    .then(res => res.json())
    .then(data => {
      document.getElementById('output').textContent = data.message;
    })
    .catch(err => {
      document.getElementById('output').textContent = 'Error: ' + err;
    });
});

