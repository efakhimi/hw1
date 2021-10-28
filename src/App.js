import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import question1 from './question1';
import question2 from './question2';
import question3 from './question3';
import question4 from './question4';
import question5 from './question5';
import question6 from './question6';
import question7 from './question7';
import "./style/css/bootstrap.css";
import "./style/css/all.css"; //fontawesome
import "./style/css/style.css"; //fontawesome



class HomeWork1 extends React.Component{
    render(){
        return(
            <Router>
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/hw1/">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="/hw1/"><i className="fas fa-home"></i>&nbsp;خانه
                                <span className="visually-hidden">(فعلی)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/hw1/about"><i className="fas fa-palette"></i>&nbsp;طراح</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/hw1/contact"><i className="fas fa-paper-plane"></i>&nbsp;تماس</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/hw1/" role="button" aria-haspopup="true" aria-expanded="false">سوالات</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="/hw1/question1">سوال 1</a>
                                <a className="dropdown-item" href="/hw1/question2">سوال 2</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/hw1/question3">سوال 3</a>
                                <a className="dropdown-item" href="/hw1/question4">سوال 4</a>
                                <a className="dropdown-item" href="/hw1/question5">سوال 5</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/hw1/question6">سوال 6</a>
                                <a className="dropdown-item" href="/hw1/question7">سوال 7</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
        <div className="container">
            <Route exact path="/hw1/" component={Home} />
            <Route path="/hw1/about" component={About} />
            <Route path="/hw1/contact" component={Contact} />
            <Route path="/hw1/question1" component={question1} />
            <Route path="/hw1/question2" component={question2} />
            <Route path="/hw1/question3" component={question3} />
            <Route path="/hw1/question4" component={question4} />
            <Route path="/hw1/question5" component={question5} />
            <Route path="/hw1/question6" component={question6} />
            <Route path="/hw1/question7" component={question7} />
        </div>
            </Router>
        );
    }
}

const Home = () => (
    <div className="row">
        <div className="col-lg-9 mx-auto">
            <div className="bs-component">
                <div className="card border-success mb-3">
                    <div className="card-header">تکلیف 1 طراحی وب</div>
                    <div className="card-body">
                        <h4 className="card-title">طراحی شده توسط اسماعیل فخیمی</h4>
                        <p className="card-text">آنچه در مقابل شماست، مربوط به تکلیف سری اول طراحی وب میباشد.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

const Contact = () => (
    <div className="row">
        <div className="col-lg-9 mx-auto">
            <div className="bs-component">
                <div className="card border-secondary mb-3">
                    <div className="card-header">ارتباط با من</div>
                    <div className="card-body">
                        <h4 className="card-title">شماره تماس و ایمیل</h4>
                        <p className="card-text">
                            تلفن : 09121721621<br />
                            ایمیل : e.fakhimi1991@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
const About = () => (
    <div className="row">
        <div className="col-lg-9 mx-auto">
            <div className="bs-component">
                <div className="card border-light mb-3">
                    <div className="card-header">اسماعیل فخیمی شریف</div>
                    <div className="card-body">
                        <h4 className="card-title">دانشگاه ایلام</h4>
                        <p className="card-text">اسماعیل فخیمی شریف هستم ورودی ترم 971 دانشگاه ایلام در رشته مهندسی نرم افزار و پس از فارغ التحصلی از دانشگاه ایلام قصد ادامه تحصیل در مقطع ارشد و در گرایش رایانش امن را دارم.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)


export default HomeWork1;