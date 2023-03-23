var axios = require('axios');
var data = '{"event_time":"2022-04-16T00:46:58.771Z","user":"GELongstreet","added":36}\n{"event_time":"2022-04-17T04:07:28.781Z","user":"Kolega2357","added":13}';

var config = {
  method: 'post',
maxBodyLength: Infinity,
  url: 'https://imply.app.api.imply.io/v1/events/ip_address_perf_test',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Basic cG9rXzZqc2JrN2pOaERVWEFDWGtIZjV4cDlXa3pUbHRKNENDaTViVFVBTGdEYTlRQWVpcGNtbzBhODk2OGp2VWs1ZU1weDo='
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

