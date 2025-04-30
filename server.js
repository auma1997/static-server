<<<<<<< HEAD
const express = require('express');
const path    = require('path');
const app     = express();
const PORT    = process.env.PORT || 8080;

const publicDir = path.join(__dirname, 'public');
console.log(`✅ Server running at http://localhost:${PORT}`);
app.use(express.static(publicDir));
app.get('/', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
=======
// Instead of serving 'public'
const path = require('path');
const indexPath = path.join(__dirname, 'public', 'index.html');
console.log('🔍 Serving from:', indexPath)
app.use(express.static(__dirname));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
>>>>>>> 6fe7f37737872dd5a474bf6abbd54bd36da4309e
});

app.listen(PORT, () => {
  console.log(✅ Server running at http://localhost:${PORT});
});