const express = require('express');
const path    = require('path');
const app     = express();
const PORT    = process.env.PORT || 8080;

const publicDir = path.join(__dirname, 'public');
console.log(`✅ Server running at http://localhost:${PORT}`);
app.use(express.static(publicDir));
app.get('/', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(✅ Server running at http://localhost:${PORT});
});