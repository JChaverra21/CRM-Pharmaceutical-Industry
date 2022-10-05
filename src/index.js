import express from 'express';
import morgan from 'morgan'

const app = Express()

app.use(express.json());

app.set('port', process.env.PORT || 6000);

app.use(morgan('dev'));

//app.use('/api', routesUser);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})