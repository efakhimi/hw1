import React from "react";
import customData from './q1data.json';
import $ from 'jquery';

class question1 extends React.Component
{
    constructor()
    {
        super();
        this.data = customData;

        this.calculation = this.calculation.bind(this);
    }
    calculation(e)
    {
        e.preventDefault();
        var insurance = 0;
        var accident = 0;
        var paint = 0;
        var basePrice = $("#carName").find(":selected").val();
        var productionYear = parseInt($("#productionYear").find(":selected").val());
        var usage = parseInt($("#carUsage").find(":selected").val());  
        if($("input:radio[name='insurance']").is(":checked")) {
            insurance = parseInt($('input:radio[name="insurance"]:checked').val());
        }
        if($("input:radio[name='accident']").is(":checked")) {
            accident = parseInt($('input:radio[name="accident"]:checked').val());
        }
        if($("input:radio[name='paint']").is(":checked")) {
            paint = parseInt($('input:radio[name="paint"]:checked').val());
        }

        var factor = 100 - productionYear - usage - accident - paint - paint - accident +insurance;
        var price = Math.round(basePrice * factor / 100);
        var html = "<div class=\"alert  alert-success\">"+
        "قیمت تقریبی خودرو شما با <strong>شرایط ذکر شده</strong> مبلغ "+ (new Intl.NumberFormat().format(price)) +" تومان میباشد."+
        "</div>";
        $('#result').html(html).hide().fadeIn(1000);
        

    }

    render(){
        return(
            <div className="card border-warning mb-3" >
                <div className="card-header"><i className="fa fa-car"></i>&nbsp;&nbsp;سوال 1</div>
                <div className="card-body">
                    <h4 className="card-title">محاسبه قیمت خودرو</h4>
                    <div className="card-text">
                        <br />
                        <form>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group row">
                                        <label htmlFor="carName" className="col-sm-3 col-form-label">نام خودرو</label>
                                        <div className="col-sm-9">
                                        <select className="form-select" id="carName">
                                            {this.data.carNamesAndPrice.data.map((car, i) => <option value = {car.price}  key={i}>{car.Name}</option>)}
                                        </select>
                                        </div>
                                    </div>
                                </div>  
                                <div className="col-4">
                                    <div className="form-group row">
                                        <label htmlFor="productionYear" className="col-sm-4 col-form-label">سال ساخت</label>
                                        <div className="col-sm-8">
                                        <select className="form-select" id="productionYear">
                                            {this.data.modelsAndReduction.data.map((option, i) => <option value = {option.Reduction}  key={i}>{option.Year}</option>)}
                                        </select>
                                        </div>
                                    </div>
                                </div>  
                                <div className="col-4">
                                    <div className="form-group row">
                                        <label htmlFor="carUsage" className="col-sm-4 col-form-label">کارکرد</label>
                                        <div className="col-sm-8">
                                        <select className="form-select" id="carUsage">
                                            {this.data.drivenKiloM.data.map((usage, i) => <option value = {usage.Reduction} key={i}>{usage.Usage}</option>)}
                                        </select>
                                        </div>
                                    </div>
                                </div>   
                                <div className="col-4">
                                    <fieldset className="form-group">
                                        <legend className="mt-4">بیمه</legend>
                                        {this.data.insurance.data.map((rButton, i) => <RadioButtonOptions key={i} d = {rButton} />)}
                                    </fieldset>
                                </div> 
                                
                                <div className="col-4">
                                    <fieldset className="form-group">
                                        <legend className="mt-4">میزان تصادفات</legend>
                                        {this.data.accident.data.map((rButton, i) => <RadioButtonOptions key={i} d = {rButton} />)}
                                    </fieldset>
                                </div>  
                                <div className="col-4">
                                    <fieldset className="form-group">
                                        <legend className="mt-4">رنگ دارد؟</legend>
                                        {this.data.paint.data.map((rButton, i) => <RadioButtonOptions key={i} d = {rButton} />)}
                                    </fieldset>
                                </div>
                                <div className="col-8 mx-auto">
                                    <button type="submit" className="btn btn-light btn-block" id="calculate" onClick={this.calculation}>برآورد قیمت</button>
                                </div>
                            </div>   
                        </form>
                        <hr></hr>
                        <div id="result"></div>
                    </div>
                </div>
            </div>
        );
    }
}


class RadioButtonOptions extends React.Component {
    render() {
       return (
        <div className="form-check" key={this.props.k}>
            <label className="form-check-label">
                 <input type="radio" className="form-check-input" name={this.props.d.name} id={this.props.d.id} value={this.props.d.Affect} /> 
                {this.props.d.value}
            </label>
        </div>
       );
    }
 }
export default question1;