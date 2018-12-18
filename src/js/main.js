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
        .when('/norway', {
            templateUrl: "atmosphere.html",
            controller: "norwayCtrl"
        })
        .when('/sweden', {
            templateUrl: "atmosphere.html",
            controller: "swedenCtrl"
        })
        .when('/finland', {
            templateUrl: "atmosphere.html",
            controller: "finlandCtrl"
        })
        .when('/ireland', {
            templateUrl: "atmosphere.html",
            controller: "irelandCtrl"
        })
});

app.controller("norwayCtrl", function ($scope, $route) {
    $scope.country = {
        name: 'Norway',
        capital: 'Oslo',
        languages: 'Norwegian, Sami',
        area: '385,203 km2',
        population: '5,323,933',
        picture: "img/informationPageImg/norway.jpg"
    }
});

app.controller("swedenCtrl", function ($scope, $route) {
    $scope.country = {
        name: 'Sweden',
        capital: 'Stockholm',
        languages: 'Swedish, Finnish, Meankieli',
        area: '450,295 km2',
        population: '10,215,250',
        picture: "img/informationPageImg/sweden.jpg"
    }
});

app.controller("finlandCtrl", function ($scope, $route) {
    $scope.country = {
        name: 'Finland',
        capital: 'Helsinki',
        languages: 'Finnish, Swedish',
        area: '338,424 km2',
        population: '5,520,535 ',
        picture: "img/informationPageImg/finland.jpg"
    }
});

app.controller("irelandCtrl", function ($scope, $route) {
    $scope.country = {
        name: 'Republic of Ireland',
        capital: 'Dublin',
        languages: 'Irish, English',
        area: '84,421 km2',
        population: '6 399 105',
        picture: "img/informationPageImg/ireland.jpg"
    }
});