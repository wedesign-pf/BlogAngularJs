var app = angular.module('MyApp', ['ngRoute']);


app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'view/articles.html',
        controller: 'ArticlesCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);


app.controller('ArticlesCtrl', function ($scope) {
  $scope.articles = [
    {'id': 1,
     'title':'Mon premier article',
     'text': 'Mentitum quis ad appellat despicationes. Quae vidisse de illustriora, ne dolore cillum ubi cernantur. Quibusdam nulla dolore iis summis ne aut noster summis est expetendis aut deserunt est legam cupidatat, aliqua appellat ad efflorescere. Ne aliqua a ipsum ea ullamco sed aliqua. Veniam si ita anim officia. Te malis in tamen ex id lorem vidisse praetermissum. Legam mandaremus laboris. Eram singulis hic minim anim.'},
    
    {'id': 2,
     'title':'Deuxième article',
     'text': 'Mentitum quis ad appellat despicationes. Quae vidisse de illustriora, ne dolore cillum ubi cernantur. Quibusdam nulla dolore iis summis ne aut noster summis est expetendis aut deserunt est legam cupidatat, aliqua appellat ad efflorescere. Ne aliqua a ipsum ea ullamco sed aliqua. Veniam si ita anim officia. Te malis in tamen ex id lorem vidisse praetermissum. Legam mandaremus laboris. Eram singulis hic minim anim.'},
    
    {'id': 3,
     'title':'Troisième article',
     'text': 'Mentitum quis ad appellat despicationes. Quae vidisse de illustriora, ne dolore cillum ubi cernantur. Quibusdam nulla dolore iis summis ne aut noster summis est expetendis aut deserunt est legam cupidatat, aliqua appellat ad efflorescere. Ne aliqua a ipsum ea ullamco sed aliqua. Veniam si ita anim officia. Te malis in tamen ex id lorem vidisse praetermissum. Legam mandaremus laboris. Eram singulis hic minim anim.'}
    
  ];
});