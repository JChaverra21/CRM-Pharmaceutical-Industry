import express from 'express'
import cors from 'cors'
import datab from './database/db.js'
import morgan from 'morgan'
import routesOrder from './routes/order.routes.js'

const app = express()

app.use(cors())
app.use(express.json());

app.set('port', 3001);

app.use(morgan('dev'));

//Routes
app.use('/orders', routesOrder);

/*app.get('/', (req, res) => {
    res.send('HOLA MUNDO')
})*/

try {
    await datab.authenticate()
    console.log('Conexion exitosa')
} catch (error) {
    console,log(`El error de conexion es: ${error}`)
}

app.listen(app.get('port'), () => {
    console.log('Server on port http://localhost:3001/');
})