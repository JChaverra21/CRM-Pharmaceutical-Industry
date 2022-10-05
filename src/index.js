import express from 'express';
import morgan from 'morgan'
import routesorder from './routes/order.routes.js'

const app = express()

app.use(express.json());

app.set('port', 3000);

app.use(morgan('dev'));

//Routes
app.use('/api', routesorder);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})