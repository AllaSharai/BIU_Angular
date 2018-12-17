var app = angular.module('SomeApp', ['ui.bootstrap', 'ngRoute', 'ngMessages', 'ngAnimate']);

app.controller("myCtrl", function ($scope) {

    $scope.loggedIn = false;

    $scope.users = [{
        login: "alla",
        password: "123456"
    }, {
        login: "dima",
        password: "123456"
    }];

    <!--Gallery pictures  -->
    $scope.records = [
        {
            title: "Austria",
            desc: "This photo was taken somewhere in Austria",
            img: "img/image1.jpg"
        },
        {
            title: "Phuket",
            desc: "This photo was taken somewhere in Phuket",
            img: "img/image2.jpg"
        },
        {
            title: "Spain",
            desc: "This photo was taken somewhere in Spain",
            img: "img/image3.jpg"
        },
        {
            title: "Alaska",
            desc: "This photo was taken somewhere in Spain",
            img: "img/image4.jpg"
        },
        {
            title: "Tenerife",
            desc: "This photo was taken somewhere in Tenerife",
            img: "img/image5.jpg"
        },
        {
            title: "Toronto",
            desc: "This photo was taken somewhere in Toronto",
            img: "img/image6.jpg"
        },
        {
            title: "Hong Kong",
            desc: "This photo was taken somewhere in Hong Kong",
            img: "img/image7.jpg"
        },
        {
            title: "Italy",
            desc: "This photo was taken somewhere in Italy",
            img: "img/image8.jpg"
        },
        {
            title: "Norway",
            desc: "This photo was taken somewhere in Norway",
            img: "img/image9.jpg"
        },
    ];

    <!--Carousel pictures  -->
    $scope.images = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    <!--Carousel readMore  -->
    $scope.showMe = false;
    $scope.buttonText = "Read more";
    $scope.myFunc = function () {
        $scope.showMe = !$scope.showMe;
        $scope.buttonText = $scope.showMe ? "Hide" : "Read more"
    };

    <!-- SIGN IN Modal -->
    $scope.signInForm = {login: "", password: ""};
    $scope.signIn = function () {
        console.log(this.signInForm.login + " " + this.signInForm.password);

        if (this.users.some(e => e.login === this.signInForm.login && e.password === this.signInForm.password)) {
            this.loggedIn = true;

        } else {
            this.signInForm.login = "";
            this.signInForm.password = "";
            alert("Incorrect login or password!");
        }

        console.log(this.loggedIn);
    };

    <!--SING UP Modal  -->
    $scope.signUpForm = {login: "", email: "", password: ""};
    $scope.signUp = function () {
        console.log(this.signUpForm.login + " " + this.signUpForm.email + " " + this.signUpForm.password);
    };

});

app.config(function ($routeProvider) {
    $routeProvider
        .when('/mercury', {
            templateUrl: "atmosphere.html",
            controller: "mercuryCtrl"
        })
        .when('/venus', {
            templateUrl: "atmosphere.html",
            controller: "venusCtrl"
        })
        .when('/earth', {
            templateUrl: "atmosphere.html",
            controller: "earthCtrl"
        })
        .when('/mars', {
            templateUrl: "atmosphere.html",
            controller: "marsCtrl"
        })
});

app.controller("mercuryCtrl", function ($scope, $route) {
    $scope.planet = {
        name: 'Mercury',
        carbondioxide: 'Trace Amount',
        nitrogen: 'Trace Amount',
        oxygen: '42%',
        hydrogen: '22%'
    }
});

app.controller("venusCtrl", function ($scope, $route) {
    $scope.planet = {
        name: 'Venus',
        carbondioxide: '96.5%',
        nitrogen: '3.5%',
        oxygen: 'Almost None',
        hydrogen: 'Almost None'
    }
});

app.controller("earthCtrl", function ($scope, $route) {
    $scope.planet = {
        name: 'Earth',
        carbondioxide: '0.038%',
        nitrogen: '78.1%',
        oxygen: '21%',
        hydrogen: 'Almost None'
    }
});

app.controller("marsCtrl", function ($scope, $route) {
    $scope.planet = {
        name: 'Mars',
        carbondioxide: '95.7%',
        nitrogen: '2.7%',
        oxygen: '0.2%',
        hydrogen: 'Almost None'
    }
});