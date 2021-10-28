import React from "react";
import picture from './style/image/pic1.jpg';
import profilePic from './style/image/face1.jpg';
import $ from 'jquery';


class question4 extends React.Component{
    constructor()
    {
        super();
        this.state ={
            author : "اسماعیل فخیمی",
            profile : "EsmaielFakhimi",
            date : "06 آبان 1400",
            comments : [],
            likes : 26,
            bookmarked : this.getCookie("bookmarked"),
            youLiked : false,
            youFollow : false
        }

        this.whatsAppLinkGenerator = this.whatsAppLinkGenerator();
        this.telegramLinkGenerator = this.telegramLinkGenerator();
    }
    setCookie(name,value,days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }
    getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)===' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }
    sendCommentHandler()
    {
        var sender = $("#name").val();
        var comment = $("#comment").val();
        var comments =this.state.comments;
        comments[comments.length] = sender + " گفته که :\n"+comment;
        this.setState({
            comments: comments
        });
    }
    followClickHandler()
    {
        this.setState({
            youFollow: !this.state.youFollow
        });
    }
    bookmarkThePost()
    {
        this.setCookie("bookmarked",!this.state.bookmarked, 7);
        this.setState({
            bookmarked: !this.state.bookmarked
        });
    }
    likeThePost()
    {
        var newLikesCount = this.state.youLiked ? (this.state.likes-1) : (this.state.likes+1);
        this.setState({
            likes: newLikesCount,
            youLiked: !this.state.youLiked
        });
    }
    copyLinkLocation()
    {
        navigator.clipboard.writeText(window.location.href);
    }
    printNewsContent()
    {
        var mywindow = window.open('', 'PRINT', 'height=600,width=800');

        mywindow.document.write('<html><head><title>' + document.title  + '</title>');
        mywindow.document.write('</head><body >');
        mywindow.document.write('<h1>' + document.title  + '</h1>');
        mywindow.document.write(document.getElementById('printableContent').innerHTML);
        mywindow.document.write('</body></html>');

        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10*/

        mywindow.print();
        mywindow.close();

        return true;
    }
    whatsAppLinkGenerator()
    {
        return "whatsapp://send?text=متن آزمایشی "+window.location.href;
    }
    telegramLinkGenerator()
    {
        return "tg://msg_url?url="+window.location.href;
    }
    render() {
        return (
        <div className="row">
            <div className="col-md-12 grid-margin stretch-card" id="printableContent">
                <div className="card bg-white">
                    <h3 className="card-header text-black"><i className="far fa-newspaper"></i>&nbsp;&nbsp;سوال 4</h3>
                    <div className="card-body text-black">
                        <div className="author module">
                            <div className="module--avatar">
                                <a href={document.location.href + "/" + this.state.profile}>
                                    <img className="rounded-circle img-lg" src={profilePic} alt={this.state.author} />
                                </a>
                            </div>
                            <div className="module-info">
                                <div className="module--header">
                                    <a className="module--name" href={document.location.href + "/" + this.state.profile}>{this.state.author}</a>
                                    <button type="button" className={this.state.youFollow ? "btn btn-dark btn-rounded btn-sm" : "btn btn-success btn-rounded btn-sm"} onClick={()=>{this.followClickHandler("a")}}>
                                        {this.state.youFollow ? "لغو دنبال کردن" : "دنبال کردن"}
                                    </button>
                                </div>
                                <p className="module--bio"></p>
                                <div className="module--footer">
                                    <span ><i className="far fa-calendar"></i>&nbsp;نوشته شده در {this.state.date}</span>&nbsp;&nbsp;
                                    <span ><i className={this.state.youLiked ? "fas fa-thumbs-up" : "far fa-thumbs-up"}></i> {this.state.likes}</span>&nbsp;&nbsp;
                                    <span ><i className="far fa-comment"></i> {this.state.comments.length}</span>
                                </div>
                            </div>
                        </div>
                        <h4 className="card-title">عنوان محتوای آزمایشی</h4>
                    </div>   

                    <img className="img-fluid rounded" src={picture} alt="tab preview" />
                    
                    <div className="card-body text-black">
                        <div className="row">
                            <div className="col-md-12">
                                <p>این یک متن آزمایشی است و هیچ اعتبار علمی و خبری ندارد.</p>
                                <p>این یک متن آزمایشی است و هیچ اعتبار علمی و خبری ندارد.</p>
                                <p>این یک متن آزمایشی است و هیچ اعتبار علمی و خبری ندارد.</p>
                                <p>این یک متن آزمایشی است و هیچ اعتبار علمی و خبری ندارد.</p>
                                <p>این یک متن آزمایشی است و هیچ اعتبار علمی و خبری ندارد.</p>
                                <p>این یک متن آزمایشی است و هیچ اعتبار علمی و خبری ندارد.</p>
                            </div>

                        </div>
                    </div>
                    <div className="card-body text-black">
                        <div className="row">
                            <div className="col-md-12">
                                <i className="fas fa-tags"></i>&nbsp;برچسب ها :&nbsp;
                                <span className="badge rounded-pill bg-secondary"><a href={window.location.href + "/tags/تست 1"}>تست 1</a></span>&nbsp;
                                <span className="badge rounded-pill bg-success"><a href={window.location.href + "/tags/تست 2"}>تست 2</a></span>&nbsp;
                                <span className="badge rounded-pill bg-info"><a href={window.location.href + "/tags/تست برچسب آزمایشی"}>برچسب آزمایشی</a></span>&nbsp;
                                <span className="badge rounded-pill bg-light"><a href={window.location.href + "/tags/محتوای آزمایشی"}>محتوای آزمایشی</a></span>&nbsp;
                            </div>
                            <hr></hr>
                            <div className="col-md-6">
                                <span className="larger-text">
                                    <span ><i className="far fa-calendar"></i>&nbsp;نوشته شده در {this.state.date}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span ><i id="like" className={this.state.bookmarked ? "fas fa-bookmark" : "far fa-bookmark"} onClick={()=>{this.bookmarkThePost()}}></i></span>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span ><i id="like" className={this.state.youLiked ? "fas fa-thumbs-up" : "far fa-thumbs-up"} onClick={()=>{this.likeThePost()}}></i> {this.state.likes}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span ><i className="far fa-comment"></i> {this.state.comments.length}</span>
                                </span>
                            </div>
                            <div className="col-md-6">
                                <span className="float-sm-start">کپی پیوند : <button type="button" className="btn btn-outline-info btn-rounded text-black" onClick={()=>{this.copyLinkLocation()}}>{window.location.href}</button></span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card-footer text-muted">
                        <span className="text-end d-sm-inline-block">نویسنده : <a href={document.location.href + "/" + this.state.profile}>{this.state.author}</a></span>
                        <span className="text-start float-sm-start">
                            <a rel="noreferrer" href={this.whatsAppLinkGenerator}> <i className="fab fa-whatsapp" aria-hidden="true"></i></a> &nbsp;
                            <a rel="noreferrer" href={this.telegramLinkGenerator} target="_blank"><i className="fa fa-paper-plane"></i></a> &nbsp;
                            <span className="text-light" onClick={this.printNewsContent}><i className="fas fa-print"></i></span>
                        </span>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="row">
                <div className="col-12">آخرین ارسال های <a href={document.location.href + "/" + this.state.profile}>{this.state.author}</a></div>
                <div className="col-4">
                    <div className="card bg-white ">
                        <div className="card-body text-black">
                            <div className="d-flex align-items-center">
                                <div className="highlight-icon bg-light mr-0">
                                    <img src={profilePic}  alt="post 1"/>
                                </div>
                                <div className="wrapper">
                                    <p className="card-text mb-0"><a className=" text-black" href="/testlink">عنوان آزمایشی</a></p>
                                    <div className="fluid-container">
                                        <span className="smaller-text">نوشته شده در  2 ساعت پیش</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card bg-white ">
                        <div className="card-body text-black">
                            <div className="d-flex align-items-center">
                                <div className="highlight-icon bg-light mr-0">
                                    <img src={profilePic}  alt="post 2"/>
                                </div>
                                <div className="wrapper">
                                    <p className="card-text mb-0"><a className=" text-black" href="/testlink">عنوان آزمایشی 2</a></p>
                                    <div className="fluid-container">
                                        <span className="smaller-text">نوشته شده در  4 ساعت پیش</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card bg-white ">
                        <div className="card-body text-black">
                            <div className="d-flex align-items-center">
                                <div className="highlight-icon bg-light mr-0">
                                    <img src={profilePic} alt="post 3"/>
                                </div>
                                <div className="wrapper">
                                    <p className="card-text mb-0"><a className=" text-black" href="/testlink">عنوان آزمایشی 3</a></p>
                                    <div className="fluid-container">
                                        <span className="smaller-text">نوشته شده در  5 ساعت پیش</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="col-md-12 grid-margin stretch-card">
                <div className="card bg-white">
                    <h3 className="card-header text-black"><i className="far fa-comments"></i>&nbsp;&nbsp;نظرات</h3>
                    <div className="card-body text-black">
                        <form>
                            <div className="form-group row">
                                <label htmlFor="name" className="col-4 form-label mt-4">نام شما</label>
                                <div className="col-8">
                                    <input type="text" className="form-control bg-white text-black mt-4 custom-border" id="name" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="name" className="col-4 form-label mt-4">نظر شما</label>
                                <div className="col-8">
                                    <textarea className="form-control bg-white text-black mt-4 custom-border" id="comment" rows="8"></textarea>
                                </div>
                            </div>
                            <button type="button" className="btn btn-primary" onClick={()=>{this.sendCommentHandler()}}>ارسال نظر</button>
                        </form>
                    </div>
                    <div className="card-body text-black">
                        {this.state.comments.map((c, i)=><CommentHandler key={i} comment={c} />)}
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
class CommentHandler extends React.Component{
    render() {
        console.log(this.props.comment);
        return (
            <div>
                <figure>
                    <blockquote className="blockquote">
                    <p className="mb-0">{this.props.comment}</p>
                    
                    </blockquote>
                </figure>
                <hr></hr>
            </div>
        );
    }
}
export default question4;