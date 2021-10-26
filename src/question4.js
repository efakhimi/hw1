import React from "react";
import picture from './style/image/pic1.jpg';
//import $ from 'jquery';


class question4 extends React.Component{
    constructor()
    {
        super();

        this.whatsAppLinkGenerator = this.whatsAppLinkGenerator();
        this.telegramLinkGenerator = this.telegramLinkGenerator();
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
        <div className="row" id="printableContent">
            <div className="col-md-12 grid-margin stretch-card">
                <div className="card bg-white">
                    <h3 className="card-header text-black"><i className="far fa-newspaper"></i>&nbsp;&nbsp;سوال 4</h3>
                    <div className="card-body text-black">
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
                    
                    <div className="card-footer text-muted">
                        <span className="text-end d-sm-inline-block">نویسنده : اسماعیل فخیمی</span>
                        <span className="text-start float-sm-start">
                            <a rel="noreferrer" href={this.whatsAppLinkGenerator}> <i className="fab fa-whatsapp" aria-hidden="true"></i></a> &nbsp;
                            <a rel="noreferrer" href={this.telegramLinkGenerator} target="_blank"><i className="fa fa-paper-plane"></i></a> &nbsp;
                            <span className="text-light" onClick={this.printNewsContent}><i className="fas fa-print"></i></span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default question4;