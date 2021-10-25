import React from "react";

import $ from 'jquery';

class question2 extends React.Component
{
    constructor()
    {
        super();
        this.currentColor = "primary";
        this.changeColerHandler = this.changeColerHandler.bind(this);
    }
    changeColerHandler(e)
    {
        var color = $("#color").find(':selected').val();
        $("#targetSection").removeClass("bg-"+this.currentColor);
        $("#targetSection").addClass("bg-"+color);
        this.currentColor = color;
        console.log(color);
    }
    render(){
        return (
            <div className="card bg-primary mb-3" id="targetSection" >
                <div className="card-header"><i className="fas fa-palette"></i>&nbsp;&nbsp;سوال 2</div>
                <div className="card-body">
                    <h4 className="card-title">تغییر پس زمینه</h4>
                    <div className="card-text">
                        <br />
                        کاربر عزیز سلام، برای تغییر رنگ این کادر یک گزینه را از زیر انتخاب کن.
                        <hr />
                        <form>
                            <div className="row">
                                <div className="col-md-9 mx-auto">
                                    <div className="form-group">
                                        <select className="form-select" id="color" onChange={this.changeColerHandler}>
                                            <option value="primary">بنفش</option>
                                            <option value="secondary">صورتی</option>
                                            <option value="success">سبز</option>
                                            <option value="danger">قرمز</option>
                                            <option value="warning">زرد</option>
                                            <option value="info">آبی</option>
                                            <option value="light">آبی روشن</option>
                                            <option value="dark">سیاه</option>
                                        </select>
                                    </div>
                                </div>  
                            </div>   
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default question2;