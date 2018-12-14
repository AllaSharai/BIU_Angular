var appModule = angular.module('SomeApp', ['ui.bootstrap']);
appModule.controller("myCtrl", function ($scope) {
    $scope.records = [
        {
            title: "title1",
            desc: "gjjk ipsum dolor sit amet, consectetur adipiscing elit.",
            img: "img/image1.jpg"
        },
        {
            title: "title2",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            img: "img/image2.jpg"
        },
        {
            title: "title3",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            img: "img/image3.jpg"
        },
        {
            title: "title4",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            img: "img/image4.jpg"
        },
        {
            title: "title5",
            desc: "Lorem ipsum dolor sit1 amet, consectetur adipiscing elit.",
            img: "img/image5.jpg"
        },
        {
            title: "title6",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            img: "img/image6.jpg"
        },
        {
            title: "title7",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            img: "img/image7.jpg"
        },
        {
            title: "title8",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            img: "img/image8.jpg"
        },
        {
            title: "title9",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            img: "img/image9.jpg"
        },
    ];
    $scope.images = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
});