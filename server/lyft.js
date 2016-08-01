var childProcess = require('child_process');

let lyftToken;

function generateToken() {
  //TODO: refactor to not use curl
  const lyftReq = `curl -X POST -H "Content-Type: application/json" --user "${process.env.LYFT_ID}:${process.env.LYFT_SECRET}" -d '{"grant_type": "client_credentials", "scope": "public"}' 'https://api.lyft.com/oauth/token'`;
   childProcess.exec(lyftReq, (err, res) => {
    if (err) {console.log(err)}
    lyftToken = JSON.parse(res)['access_token'];
  })
}
generateToken();
//Token expires every hour
setInterval(generateToken, 3000000);

function lyftRideTypes(req, res, callback) {
  //TODO: don't hardcode lat/lon, eventually don't use curl
  const lyftReq = `curl -X GET -H 'Authorization: Bearer ${lyftToken}' 'https://api.lyft.com/v1/ridetypes?lat=37.7833&lng=-122.4167'`;
 
  childProcess.exec(lyftReq, callback)
}


module.exports.lyftRideTypes = lyftRideTypes;