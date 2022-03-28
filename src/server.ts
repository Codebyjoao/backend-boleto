import express from 'express'
import routes from './routes';

const app = express();

app.use(routes);

app.listen(8080, () => {
  console.log('⚡ API Started on port 8080!');
}); 