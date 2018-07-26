const fetch = require('node-fetch');

module.exports = {
  fetchLatestSetlist : () => {
    try {
      fetch(`https://api.phish.net/v3/setlists/latest?apikey=${process.env.PHISHNET_API_KEY}`)
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {
          const latestSetlist = {
            showdate: json.response.data[0].long_date,
            location: json.response.data[0].location,
            venue: json.response.data[0].venue,
            url: json.response.data[0].url,
            songs: json.response.data[0].setlistdata,
            rating: json.response.data[0].rating
          };
          console.log(latestSetlist)
        });
    } catch (err) {
      console.log(err)
    }
  }
}