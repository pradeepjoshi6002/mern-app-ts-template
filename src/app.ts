import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'welcome to auth servcice' });
});

export default app;
