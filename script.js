
async function send() {
  const input = document.getElementById('input').value;

  document.getElementById('output').innerText = "Generating...";

  const res = await fetch('http://localhost:3000/generate', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ prompt: input })
  });

  const data = await res.json();

  document.getElementById('output').innerText = data.reply;
}
