var express = require('express'); // ExpressJS 모듈을 추가

var app = express();

var bodyParser = require('body-parser'); // json 형태로 파싱할꺼니까 모듈 추가



app.use(express.static(__dirname + '/public')); //public 폴더 안에 javascript 파일과 css파일을 모아둘 예정

app.use(bodyParser.json()); // body-parser 모듈을 사용해서 파싱 해줌

app.engine('html', require('ejs').__express);

app.set('views', __dirname + '/view'); // ejs 파일들을 저장하기 위해 경로 추가했음

app.set('view engine', 'ejs'); // ejs를 html로 바꿔주면 html로 파일 실행됩니다.





app.get('/', function (req, res) { // 웹에서 실행할 주소가 localhost:3000/ 이거일때를 선언

    res.render('main.ejs'); // first.ejs로 써도 되고 first만 써도 파일 실행을 해줍니다.
});


app.get('/login', function (req, res) { // 웹에서 실행할 주소가 localhost:3000/ 이거일때를 선언

    res.render('login.ejs'); // first.ejs로 써도 되고 first만 써도 파일 실행을 해줍니다.
});

app.get('/search', function (req, res) { // 웹에서 실행할 주소가 localhost:3000/second/블라블라 이거일때를 선언

    res.render('search.ejs'); // render를 이용해서 값을 던져줌

});
app.get('/signup', function (req, res) { // 웹에서 실행할 주소가 localhost:3000/second/블라블라 이거일때를 선언

    res.render('signUp.ejs'); // render를 이용해서 값을 던져줌

});

app.get('/mypage/:something', function (req, res) { // 웹에서 실행할 주소가 localhost:3000/second/블라블라 이거일때를 선언

    // something에 던질 데이터를 넣어준 것임

    var something = req.params.something;

    res.render('mypage.ejs', { data: something }); // render를 이용해서 값을 던져줌

});

app.get('/mypost/:something', function (req, res) { // 웹에서 실행할 주소가 localhost:3000/second/블라블라 이거일때를 선언

    // something에 던질 데이터를 넣어준 것임

    var something = req.params.something;

    res.render('myIndivPost.ejs', { data: something }); // render를 이용해서 값을 던져줌

});

app.get('/timeline/:something', function (req, res) { // 웹에서 실행할 주소가 localhost:3000/second/블라블라 이거일때를 선언

    // something에 던질 데이터를 넣어준 것임

    var something = req.params.something;

    res.render('timeline.ejs', { data: something }); // render를 이용해서 값을 던져줌

});

app.get('/viewpost/:something', function (req, res) { // 웹에서 실행할 주소가 localhost:3000/second/블라블라 이거일때를 선언

    // something에 던질 데이터를 넣어준 것임

    var something = req.params.something;

    res.render('indivPost.ejs', { data: something }); // render를 이용해서 값을 던져줌

});

app.get('/newpost/:something', function (req, res) { // 웹에서 실행할 주소가 localhost:3000/second/블라블라 이거일때를 선언

    // something에 던질 데이터를 넣어준 것임

    var something = req.params.something;

    res.render('newPost.ejs', { data: something }); // render를 이용해서 값을 던져줌

});

app.get('/myaccount/:something', function (req, res) { // 웹에서 실행할 주소가 localhost:3000/second/블라블라 이거일때를 선언

    // something에 던질 데이터를 넣어준 것임

    var something = req.params.something;

    res.render('myAccount.ejs', { data: something }); // render를 이용해서 값을 던져줌

});

app.listen(3000); //server 구동 포트 localhost:3000 여기에 쓰입니다.

console.log("Server running on port 3000");

