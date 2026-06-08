import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

// Serve static files from the root directory
app.use(express.static(path.join(process.cwd(), '.')));

app.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Static server running on http://0.0.0.0:${PORT}`);
});
