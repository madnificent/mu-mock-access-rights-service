import { app, query, errorHandler } from 'mu';
import bodyParser from 'body-parser';

// Also parse application/json as json
app.use( bodyParser.json( { type: function(req) { return /^application\/json/.test( req.get('content-type') ); } } ) );

// Respond to POST requests
app.post('/', function( req, res ) {
  let allowedGroups = req.body;

  console.log( allowedGroups.body );

  res
    .set( 'MU-AUTH-ALLOWED-GROUPS', allowedGroups.body )
    .status( 204 )
    .send();
});
