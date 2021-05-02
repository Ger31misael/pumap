//Install express server
const express = require('express');

const app = express();

app.use(express.static('./dist/frontend'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', {
    root: 'dist/frontend'
  });
});

app.get('/servicio-rest', (req, res) => {
  return res.send('Metodo get');
});

/*const path = require('path');
const app = express();
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/puma-proyect'));
app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/puma-proyect/index.html'));
});*/

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8081);