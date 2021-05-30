const express = require('express')
const morgan = require('morgan')
const app = express()
const path = require('path')

//SETTINGS--------------------------------------------------------
//acá configuré el nombre de mi aplicacion
app.set('appName', "Nombre aplicacion web");
app.set('port', process.env.PORT || 3000)
//motor de plantillas
app.set('views',path.join(__dirname,'views'))
app.set('view engine', 'ejs')
/*si quisiera que ejs trabaje con archivos .html podría hacerlo así:
app.engine('html', require('ejs).renderFile)
*/

//MIDDLEWARES------------------------------------------



//ROUTES-----------------------------------------------

app.use(require('./routes/index_routes.js'))


/*esto va a devolver una vista html
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, 'views/index.html'))
})
*/

//STATIC-FILES-----------------------------------------
//esta linea hace q public sea publico al navegador y cualquier archivo de public
//va a poder ser accedido desde el navegador
app.use(express.static(path.join(__dirname,'public')))


//inicio el server-------------------------------------
app.listen(app.get('port'),()=>{
    console.log('escuchando el puerto', app.get('port'))
})
