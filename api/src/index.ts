import app from './app'
import './config'
import './database'
app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
})
