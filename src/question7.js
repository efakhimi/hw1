import React from "react";

import $ from 'jquery';

class question7 extends React.Component
{
    constructor()
    {
        super();
        this.currencies = {
            data : [
                {
                    "persianName" : "دلار امریکا",
                    "name" : "USD",
                    "sign" : "$",
                    "rate" : "1", // change rate from this currency to USD
                },
                {
                    "persianName" : "یورو",
                    "name" : "EUR",
                    "sign" : "&euro;",
                    "rate" : "1.17", // change rate from this currency to USD
                },
                {
                    "persianName" : "ین ژاپن",
                    "name" : "JPY",
                    "sign" : "&yen;",
                    "rate" : "0.0088", // change rate from this currency to USD
                },
                {
                    "persianName" : "یوان چین",
                    "name" : "CNY",
                    "sign" : "元",
                    "rate" : "0.16", // change rate from this currency to USD
                },
                {
                    "persianName" : "درهم امارات",
                    "name" : "AED",
                    "sign" : "",
                    "rate" : "0.27", // change rate from this currency to USD
                },
                {
                    "persianName" : "ریال ایران",
                    "name" : "IRR",
                    "sign" : "",
                    "rate" : "0.000024", // change rate from this currency to USD
                },
                {
                    "persianName" : "دینار کویت",
                    "name" : "KWD",
                    "sign" : "",
                    "rate" : "3.32", // change rate from this currency to USD
                },
            ]
        }
        this.state = {
            money :1,
            currency : "USD",
            rates:[]
        }
        // this.money =0;
        // this.currency = "USD";
        // this.rates=[];
        this.changesHandler = this.changesHandler.bind(this);
    }
    changesHandler(e)
    {
        var nMoney = parseFloat($('#money').val());
        var nCurrency = $('#currency').find(':selected').val();
        var nRates =this.calculateChangeRates(nCurrency);
        nMoney = nMoney<1 ? 1 : nMoney;
        this.setState({
            money: nMoney,
            currency: nCurrency,
            rates: nRates
        });
    }
    calculateChangeRates(to)
    {
        var toVal=-1;
        for(var cur of this.currencies.data)
        {
            if(cur.name === to)
                toVal = cur.rate;
        }
        if(toVal===-1)
            return [];
        var rates = [];
        var counter = 0;
        for(var curr of this.currencies.data)
        {
            rates[counter] = Math.round(curr.rate * 1000000 / toVal)/1000000;
            counter++
        }
        return rates;
    }
    calculateChangeRate(from, to)
    {
        var fromVal=-1;
        var toVal=-1;
        for(var cur of this.currencies.data)
        {
            if(cur.name === from)
                fromVal = cur.rate;
            if(cur.name === to)
                toVal = cur.rate;
        }
        return ((fromVal===-1 || toVal===-1) ? -1 : Math.round(fromVal * 1000000 / toVal)/1000000);
    }
    render()
    {
        //console.log(this.state.rates);
        return(
            <div className="card bg-secondary mb-3" id="targetSection" >
                <div className="card-header"><i className="fas fa-hand-holding-usd"></i>&nbsp;&nbsp;سوال 7</div>
                <div className="card-body">
                    <h4 className="card-title">تبدیلات نرخ ارز</h4>
                    <div className="card-text">
                        <br />
                        کاربر گرامی برای مشاهده مقدار قابل خرید از ارز های مختلف لطفا موجودی و ارز خودرا مشخص کنید.
                        <hr />
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label htmlFor="carName" className="col-sm-4 col-form-label">مقدار موجودی :</label>
                                        <div className="col-sm-8">
                                            <input className="form-control " type="number" min="1" step="0.01"  id="money" value="1" onInput={this.changesHandler}/>
                                        </div>
                                    </div>
                                </div>  
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label htmlFor="carName" className="col-sm-4 col-form-label">ارز شما:</label>
                                        <div className="col-sm-8">
                                            <select className="form-select " id="currency" onChange={this.changesHandler}>
                                                {this.currencies.data.map((currency, i) => <option value = {currency.name}  key={i}>{currency.persianName}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                </div>  
                                
                                <hr></hr>
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">ردیف</th>
                                            <th scope="col">ارز</th>
                                            <th scope="col">نرخ تبدیل</th>
                                            <th scope="col">مقدار قابل خرید</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/*<TableRow key={i} r={rate} currency={this.currencies.data[i]} money={this.money} /> */}
                                        {this.state.rates.map((rate, i) => <TableRow key={i} id={i+1} r={rate} currency={this.currencies.data[i]} money={this.state.money} /> )}
                                    </tbody>
                                </table>
                            </div>   
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

class TableRow extends React.Component{
    render()
    {
        return(
            <tr>
                <th scope="row">{this.props.id}</th>
                <td>{this.props.currency.name}</td>
                <td>{this.props.r}</td>
                <td>{this.props.r * this.props.money}</td>
            </tr>
        );
    }
}

export default question7;