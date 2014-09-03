var app = angular.module('hackathonApp', ['nvd3ChartDirectives']);

function convertHttpToNvd3(data){
  var res = [{ "key" : "0-14", "values" : []},
             { "key" : "15-29", "values" : []},
             { "key" : "30-44", "values" : []},
             { "key" : "45-59", "values" : []},
             { "key" : "60-74", "values" : []},
             { "key" : "75+", "values" : []} ];
  for(doc in data){
    res[0]["values"].push( [ data[doc]["Vuosi"],  data[doc]["0-14"] ] );
    res[1]["values"].push( [ data[doc]["Vuosi"], data[doc]["15-29"] ] );
    res[2]["values"].push( [ data[doc]["Vuosi"], data[doc]["30-44"] ] );
    res[3]["values"].push( [ data[doc]["Vuosi"], data[doc]["45-59"] ] );
    res[4]["values"].push( [ data[doc]["Vuosi"], data[doc]["60-74"] ] );
    res[5]["values"].push( [ data[doc]["Vuosi"],   data[doc]["75+"] ] );
  }
  return res;
}

app.controller('HackathonCtrl', function($scope, $http) {
  $http.get('http://127.0.0.1:3500/hackathon/hki2050').success(
   function(data, status, headers, config) {
     data = convertHttpToNvd3(data);
     $scope.results = data;
  });
});
