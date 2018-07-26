const fetch = require('node-fetch');
const striptags = require('striptags');

module.exports = {
  fetchLatestSetlist: () => {
    try {
      fetch(
        `https://api.phish.net/v3/setlists/latest?apikey=${
          process.env.PHISHNET_API_KEY
        }`
      )
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {
          const songs = striptags(json.response.data[0].setlistdata, '<p>');
          const set1 = striptags(songs.split('<p>').filter(Boolean)[0]);
          const set2 = striptags(songs.split('<p>').filter(Boolean)[1]);

          const latestSetlist = {
            showdate: json.response.data[0].long_date,
            location: json.response.data[0].location,
            venue: striptags(json.response.data[0].venue),
            rating: json.response.data[0].rating,
            set1,
            set2
          };

          console.log('');
          console.log(latestSetlist.showdate);
          console.log(latestSetlist.location);
          console.log(latestSetlist.venue);
          console.log('');
          console.log(latestSetlist.set1);
          console.log('');
          console.log(latestSetlist.set2);
          console.log('');
          console.log('Rating: ' + latestSetlist.rating);
          console.log('');
        });
    } catch (err) {
      console.log(err);
    }
  }
};
