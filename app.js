var express = require('express');
var fs = require('fs');
var http = require('http');
var helpers = require('express-helpers')(app);

var app = express();
var httpServer = http.Server(app);
app.use(express.static(__dirname + '/'))
 
//set the view engine to ejs
app.set('view engine', 'ejs');

//about page
app.get('/', function (req, res) {
	res.render('pages/aboutMain', {
        title: 'About me'
    });
});
//project page
app.get('/projects', function (req, res) {
    var projectItems = [
         {  
            modal: '#portfolioModal1',
            image: 'img/miljo-1.png',
            title: 'E-learning website'
        },
    /*    {   modal: '#portfolioModal2',
            image: 'img/miljo-2.png',
            title: 'Weekly Task app'
        },*/
        {   modal: '#portfolioModal3',
            image: 'img/aveiro-2.png',
            title: 'Aveiro webpage'
        },
        {
            modal: '#portfolioModal4',
            image: 'img/avance-stock-1.png',
            title: 'Stockmarket graphs'
        } 
    ];
    var own = "Self Project";
    var skill = "Web design and development";
    var modals = [
        {
            modalName: 'portfolioModal1',
            title: 'Miljøgilli',
            tagline: 'Used moodle based framework for e-learning purpose.',
            description: 'Miljøgilli is a website for students and people who are interested in learning about decompost, garderning, farming, etc. This website uses as moodle provide an e-learning platform. This framework containes components and complex blocks (HTML, and other templates). This Framework is written in PHP as a backend and HTML5 and CSS3 in frontend.' ,
            date: 'November 2014',
            client: 'Miljøgilli',
            category: 'Web development', 
            url: 'http://miljøgilli.no/moodle',
            urlTitle: 'Miljøgilli website',
            carousel:  {
                name: 'myCarousel1',
                first: 'img/miljo-1.png',
                second: 'img/miljo-2.png',
                third: 'img/miljo-3.png'
            }
        },
       /* {
            modalName: 'portfolioModal2',
            title: 'Weekly Task App',
            tagline: 'An web app where you can write your weekly task.',
            description: 'Weekly Task App is a simple web application where a user can write their weekly task and is able to view the stat for which task they perform most in a week. This app uses Ruby in rails framework in backend and Angularjs framework in the frontend' ,
            date: 'Janaury 2015',
            client: own,
            category: skill, 
            url: '',
            urlTitle: 'Weekly app website',
            carousel:  {
                name: 'myCarousel2',
                first: 'img/potrait.png',
                second: 'img/potrait.png',
                third: 'img/potrait.png'
            }
        },*/
        {
            modalName: 'portfolioModal3',
            title: 'Aveiro',
            tagline: 'An website for the company.',
            description: 'This website is made for the company Aveiro AS. The website uses Foundation framework. The website is reponsive and suitable for all the devices. The design and development of the website is done by myself.' ,
            date: 'Janaury 2015',
            client: own,
            category: skill, 
            url: 'http://aveiro.herokuapp.com',
            urlTitle: 'Aveiro website',
            carousel:  {
                name: 'myCarousel3',
                first: 'img/aveiro-1.png',
                second: 'img/aveiro-2.png',
                third: 'img/aveiro-3.png'
            }
        },
        {
            modalName: 'portfolioModal4',
            title: 'Stockmarket Graph',
            tagline: 'An website for the company.',
            description: 'Stockmarket Graph website is developed in order to view the stockmarket charts. It uses NodeJS in the backend and CSS3 and HTML5 in the frontend. The website is reponsive and suitable for all the devices. The design and development of the website is done by myself.' ,
            date: 'November 2014',
            client: own,
            category: skill, 
            url: 'http://avancegas-kurs-web.herokuapp.com',
            urlTitle: 'Stockmarket website',
            carousel:  {
                name: 'myCarousel4',
                first: 'img/avance-stock-1.png',
                second: 'img/avance-stock-2.png',
                third: 'img/avance-stock-3.png'
            }
        }
    ]
   
	res.render('pages/projectsMain', {
        title: 'My Projects',
        projectItems: projectItems,
        modals: modals
    });
});
//contact page
app.get('/contact', function (req, res) {
    var socialMedias = [
        {
					url: 'https://no.linkedin.com/pub/prakriti-tiwari/68/91b/6a7',
            icon: 'fa-linkedin-square',
            name: 'LinkedIn'
        },
        {
            url: 'https://github.com/prakriti89',
            icon: 'fa-github',
            name: 'Github'
        },
        {
						url: 'https://plus.google.com/105739326160994393069/posts',
            icon: 'fa-google-plus',
            name: 'Google+'
        }
    ];
	res.render('pages/contactMain', {
        title: 'Contact me',
        socialMedias: socialMedias
    });
});

var portNumber = process.env.PORT || 3000;
httpServer.listen(portNumber, function () {
	console.log('listening on *:3000');
});