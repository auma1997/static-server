const express = require('express');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 8080;

// Serve static files
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Create the HTTP server
const server = app.listen(PORT, () => {
  console.log(`✅ Static server running at http://localhost:${PORT}`);
});

// Catch “address in use” or other server errors
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is already in use.`);
  } else {
    console.error('❌ Server error:', err);
  }
  process.exit(1);
});

// Catch uncaught exceptions & promise rejections
process.on('uncaughtException', (err) => {
  console.error('❌ Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});
