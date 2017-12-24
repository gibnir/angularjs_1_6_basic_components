(function () { 
  // app-components
  var app = angular.module('app-directives', []);

  app.directive('componentGallery', function () {
    return {
      restrict: 'E',
      templateUrl: 'app/directives/component-gallery.html',
      controller: function () {
        this.current = 0;
        this.setCurrent = function(newGallery){
          this.current = newGallery || 0;
        };    
      },
      controllerAs: 'gallery'
    };
  });

  app.directive('componentPanel', function () {
    return {
      restrict: 'E',
      templateUrl: 'app/directives/component-panel.html',
      controller: function () {
        this.tab = 1;

        this.selectedTab = function (tabNumber) {
          this.tab = tabNumber;
        }

        this.isSelected = function (checkedTab) {
          return this.tab === checkedTab;
        }
      },
      controllerAs: 'panel'
    };
  });
  
  app.directive('componentDescription', function () {
    return {
      restrict: 'E',
      templateUrl: 'app/directives/component-description.html'
    };
  });

  app.directive('componentSpecs', function () {
    return {
      restrict: 'A',
        templateUrl: 'app/directives/component-specs.html'
    };
  });

  app.directive('componentReviews', function () {
    return {
      restrict: 'E',
      templateUrl: 'app/directives/component-reviews.html',
      controller: function () {
        this.review = {};

       this.addReview = function (product) {
         this.review.createdOn = Date.now();
         product.reviews.push(this.review);
         this.review = {}; // clear the form.
       };
      },
      controllerAs: 'reviewCtrl'
    };
  });

})();
