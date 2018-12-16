var appModule = angular.module('SomeApp', ['ui.bootstrap']);
appModule.controller("myCtrl", function ($scope) {


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
    $scope.images = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

    <!--Carousel readMore  -->
    $scope.showMe = false;
    $scope.buttonText = "Read more";
    $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
        $scope.buttonText = $scope.showMe ? "Hide" : "Read more"};

    <!-- SIGN IN Modal -->
    $scope.signInForm = {login:"", password:""};
    $scope.signIn = function() {
        console.log(this.signInForm.login + " " + this.signInForm.password);
    };

    <!--SING UP Modal  -->
    $scope.signUpForm = {login:"", email:"", password:""};
    $scope.signUp = function() {
        console.log(this.signUpForm.login + " " + this.signUpForm.email + " " + this.signUpForm.password);
    };

});