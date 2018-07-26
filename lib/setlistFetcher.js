const fetch = require('node-fetch');

module.exports = {
  fetchSetlist : () => {
    try {
      fetch(`http://api.phish.net/v3/setlists/latest?apikey=${process.env.PHISHNET_API_KEY}`)
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
        });
    } catch (err) {
      console.log(err)
    }
  }
}