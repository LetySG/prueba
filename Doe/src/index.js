//Archivo principal de la app,encargado de arrancar la aplicación

const app = require('./server');
require('./database');

app.listen(app.get('port'),() =>{
    console.log('Server on port',app.get('port'))
})