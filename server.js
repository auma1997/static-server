// Instead of serving 'public'
const path = require('path');
const indexPath = path.join(__dirname, 'public', 'index.html');
console.log('🔍 Serving from:', indexPath)
app.use(express.static(__dirname));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
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
