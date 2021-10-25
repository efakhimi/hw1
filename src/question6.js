import React from "react";

import $ from 'jquery';

class question6 extends React.Component
{
    constructor()
    {
        super();
        this.loanAmountHandler = this.loanAmountHandler.bind(this);
        this.interestPercentHandler = this.interestPercentHandler.bind(this);
        this.monthCountHandler = this.monthCountHandler.bind(this);
        this.monthlyPayHandler = this.monthlyPayHandler.bind(this);
    }
    loanAmountHandler(e)
    {
        var loan = $('#loanAmount').val();
        var interest = $('#interestPercent').val();
        var mCount = $('#monthCount').val();
        var mPay = $('#monthlyPay').val();
        if(interest.length>0 && interest!=="0" && mCount.length>0 && mCount!=="0")
        {
            loan = parseInt(loan);
            interest = parseFloat(interest);
            mCount = parseInt(mCount);

            mPay = this.calculateMonthlyPay(loan, interest, mCount);
            $('#monthlyPay').val(mPay);
        }
        else if(interest.length>0 && interest!=="0" && mPay.length>0 && mPay!=="0")
        {
            loan = parseInt(loan);
            interest = parseFloat(interest);
            mPay = parseInt(mPay);

            mCount = this.calculateMonthCount(loan, interest, mPay);
            $('#monthCount').val(mCount);
        }
        else if(mCount.length>0 && mCount!=="0" && mPay.length>0 && mPay!=="0")
        {
            loan = parseInt(loan);
            mCount = parseInt(mCount);
            mPay = parseInt(mPay);

            interest = this.calculateInterestRate(loan, mPay, mCount);
            $('#interestPercent').val(interest);
        }
    }
    interestPercentHandler(e)
    {
        var loan = $('#loanAmount').val();
        var interest = $('#interestPercent').val();
        var mCount = $('#monthCount').val();
        var mPay = $('#monthlyPay').val();
        if(loan.length>0 && loan!=="0" && mCount.length>0 && mCount!=="0")
        {
            loan = parseInt(loan);
            interest = parseFloat(interest);
            mCount = parseInt(mCount);

            mPay = this.calculateMonthlyPay(loan, interest, mCount);
            $('#monthlyPay').val(mPay);
        }
        else if(loan.length>0 && loan!=="0" && mPay.length>0 && mPay!=="0")
        {
            loan = parseInt(loan);
            interest = parseFloat(interest);
            mPay = parseInt(mPay);

            mCount = this.calculateMonthCount(loan, interest, mPay);
            $('#monthCount').val(mCount);
        }
        else if(mCount.length>0 && mCount!=="0" && mPay.length>0 && mPay!=="0")
        {
            interest = parseFloat(interest);
            mCount = parseInt(mCount);
            mPay = parseInt(mPay);
            loan = this.calculateLoanAmount(interest, mPay, mCount);
            $('#loanAmount').val(loan);
        }
    }
    monthCountHandler(e)
    {
        var loan = $('#loanAmount').val();
        var interest = $('#interestPercent').val();
        var mCount = $('#monthCount').val();
        var mPay = $('#monthlyPay').val();

        if(loan.length>0 && loan!=="0" && interest.length>0 && interest!=="0")
        {
            loan = parseInt(loan);
            interest = parseFloat(interest);
            mCount = parseInt(mCount);

            mPay = this.calculateMonthlyPay(loan, interest, mCount);
            $('#monthlyPay').val(mPay);
        }
        else if(loan.length>0 && loan!=="0" && mPay.length>0 && mPay!=="0")
        {
            loan = parseInt(loan);
            mCount = parseInt(mCount);
            mPay = parseInt(mPay);

            interest = this.calculateInterestRate(loan, mPay, mCount);
            $('#interestPercent').val(interest);
        }
        else if(interest.length>0 && interest!=="0" && mPay.length>0 && mPay!=="0")
        {
            interest = parseFloat(interest);
            mCount = parseInt(mCount);
            mPay = parseInt(mPay);

            loan = this.calculateLoanAmount(interest, mPay, mCount);
            $('#loanAmount').val(loan);
        }
    }
    monthlyPayHandler(e)
    {
        var loan = $('#loanAmount').val();
        var interest = $('#interestPercent').val();
        var mCount = $('#monthCount').val();
        var mPay = $('#monthlyPay').val();

        if(loan.length>0 && loan!=="0" && interest.length>0 && interest!=="0")
        {
            loan = parseInt(loan);
            interest = parseFloat(interest);
            mPay = parseInt(mPay);

            mCount = this.calculateMonthCount(loan, interest, mPay);
            $('#monthCount').val(mCount);
        }
        else if(loan.length>0 && loan!=="0" && mCount.length>0 && mCount!=="0")
        {
            loan = parseInt(loan);
            mCount = parseInt(mCount);
            mPay = parseInt(mPay);

            interest = this.calculateInterestRate(loan, mPay, mCount);
            $('#interestPercent').val(interest);
        }
        else if(interest.length>0 && interest!=="0" && mCount.length>0 && mCount!=="0")
        {
            interest = parseFloat(interest);
            mCount = parseInt(mCount);
            mPay = parseInt(mPay);
            
            loan = this.calculateLoanAmount(interest, mPay, mCount);
            $('#loanAmount').val(loan);
        }
        
    }
    calculateMonthlyPay(loan, interest, count)
    {
        return Math.round(loan * (100+interest) / (count*100));
    }
    calculateMonthCount(loan, interest, payment)
    {
        return Math.round(loan * (100+interest) / (payment*100));
    }
    calculateInterestRate(loan, payment, count)
    {
        return Math.round((((payment*count/loan)-1) * 100 + Number.EPSILON) * 100) / 100;
    }
    calculateLoanAmount(interest, payment, count)
    {
        return Math.round(payment * count * 100 /(100 + interest));
    }
    render()
    {
        return(

            <div className="card bg-primary mb-3" id="targetSection" >
                <div className="card-header"><i className="fas fa-landmark"></i>&nbsp;&nbsp;سوال 6</div>
                <div className="card-body">
                    <h4 className="card-title">محاسبات وام بانکی</h4>
                    <div className="card-text">
                        <br />
                        کاربر گرامی، پر کردن 3 فیلد از موارد زیر الزامیست.
                        <hr />
                        <form>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="form-group row">
                                        <label htmlFor="carName" className="col-sm-6 col-form-label">مبلغ وام (تومان)</label>
                                        <div className="col-sm-6">
                                            <input className="form-control form-control-lg" type="number" min="0" step="50000"  id="loanAmount" onInput={this.loanAmountHandler}/>
                                        </div>
                                    </div>
                                </div>  
                                <div className="col-md-3">
                                    <div className="form-group row">
                                        <label htmlFor="carName" className="col-sm-6 col-form-label">درصد سود(%)</label>
                                        <div className="col-sm-6">
                                            <input className="form-control form-control-lg" type="number" min="0" max="30" step="0.05" id="interestPercent"  onInput={this.interestPercentHandler}/>
                                        </div>
                                    </div>
                                </div>  
                                <div className="col-md-3">
                                    <div className="form-group row">
                                        <label htmlFor="carName" className="col-sm-6 col-form-label">تعداد ماه ها</label>
                                        <div className="col-sm-6">
                                            <input className="form-control form-control-lg" type="number" min="0" id="monthCount"  onInput={this.monthCountHandler}/>
                                        </div>
                                    </div>
                                </div>  
                                <div className="col-md-3">
                                    <div className="form-group row">
                                        <label htmlFor="carName" className="col-sm-6 col-form-label">هر قسط (تومان)</label>
                                        <div className="col-sm-6">
                                            <input className="form-control form-control-lg" type="number"  id="monthlyPay"  onInput={this.monthlyPayHandler}/>
                                        </div>
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

export default question6;