import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import question1 from './question1';
import question2 from './question2';
import "./style/css/bootstrap.css";

class HomeWork1 extends React.Component{
    render(){
        return(
            <Router>
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">خانه
                                <span className="visually-hidden">(فعلی)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">طراح</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">تماس</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">سوالات</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="/question1">سوال 1</a>
                                <a className="dropdown-item" href="/question2">سوال 2</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/question3">سوال 3</a>
                                <a className="dropdown-item" href="/question4">سوال 4</a>
                                <a className="dropdown-item" href="/question5">سوال 5</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/question6">سوال 6</a>
                                <a className="dropdown-item" href="/question7">سوال 7</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
        <div className="container">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/question1" component={question1} />
            <Route path="/question2" component={question2} />
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