const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');

const PORT = app.get('port');

app.listen(PORT, () => {
  console.log(`Login Rate Limiter app listening on port ${PORT}`);
});
