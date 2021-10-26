import React from "react";

import $ from 'jquery';


class question3 extends React.Component
{
    constructor()
    {
        super();

        this.state = {
            details:[//0 dayName, 1date,  2 morningPray, 3 sunrise, 4 zohrPray, 5 maghrebPray, 6 midnight, 7 sunset,
                "-",
                "-",
                "-",
                "-",
                "-",
                "-",
                "-",
            ],
            city:"tehran",
            cityName:"تهران",
            morningPrayTimes : [],
            fullyPrayTimes:[]
        }
        this.changesHandler = this.changesHandler.bind(this);

    }
    componentDidMount() {
        var now = new Date();
        now = now.toISOString().split('T')[0];
        
        var start = new Date(now);
        var end = new Date(start.getTime() + 6 * 24 * 60 * 60 * 1000);
        //console.log(start.toISOString());
        //console.log(end.toISOString());

        var nCity = $('#city').find(':selected').val();
        var link = "https://api.pray.zone/v2/times/dates.json?city="+nCity+"&start="+start.toISOString().split('T')[0]+"&end="+end.toISOString().split('T')[0];
        //console.log(link);
        //var link = "https://api.pray.zone/v2/times/this_week.json?city="+this.state.city
        var times = [];
        var fullTimes = [];
        fetch(link)
        .then(res => res.json())
        .then(
          (result) => {

            if(result.code === 200 && result.status==="OK")
            {
                //console.log(result.results.datetime);
                $.each(result.results.datetime, function(i, field){
                    //console.log(field);
                    times[i] = {
                        prayTime:field.times.Imsak,
                        date:field.date.gregorian
                    };
                    fullTimes[i] = field;
                });
                this.setState({
                    morningPrayTimes:times,
                    fullyPrayTimes:fullTimes
                });
            }
            else
                this.setState({
                    morningPrayTimes:[],
                    fullyPrayTimes:[]
                });

          },
          (error) => {
            this.setState({
                morningPrayTimes:[],
                fullyPrayTimes:[]
            });
          }
        )
    }
    changesHandler(e)
    {
        var nCity = $('#city').find(':selected').val();
        var nCityName = $('#city').find(':selected').text();
        this.setState({
            fullyPrayTimes:[],//not working
            city: nCity,
            cityName: nCityName
        });
        this.componentDidMount();
    }
    clickRowHandler(rid)
    {
        //console.log(rid);
        var data = this.state.fullyPrayTimes[rid];
        //console.log(data);

        var date = new Date(data.date.gregorian);
        var info = [
            date.toLocaleDateString("fa-IR", { weekday: 'long' }),
            data.date.gregorian,
            data.times.Imsak,
            data.times.Sunrise,
            data.times.Dhuhr,
            data.times.Isha,
            data.times.Midnight,
            data.times.Sunset
        ]
        this.setState({details:info});
    }
    renderTableRows(data)
    {
        var self = this;
        return data.map(function(t, i){
            var date = new Date(t.date);
            return (
                <tr key={i} onClick={() => {self.clickRowHandler(i)}}>
                    <td>
                        {date.toLocaleDateString("fa-IR", { weekday: 'long' })}
                    </td>
                    <td>
                        {t.date} <br />
                        {t.prayTime}
                    </td>
                </tr>
            );
        });
    }
    render() {
        //console.log(this.state.morningPrayTimes);
        return (
            <div className="card border-info mb-3" id="targetSection" >
                <div className="card-header"><i className="fas fa-pray"></i>&nbsp;&nbsp;سوال 3</div>
                <div className="card-body">
                    <h4 className="card-title">اوقات شرعی</h4>
                    <div className="card-text">
                        <br />
                        اوقات شرعی هفته جاری در شهر {this.state.cityName} به شرح زیر است:
                        <div className="row">
                            <div className="col-4">
                                <select className="form-select " id="city" onChange={this.changesHandler}>
                                    <option value="tehran">تهران</option>
                                    <option value="ilam">ایلام</option>
                                    <option value="kermanshah">کرمانشاه</option>
                                    <option value="esfahan">اصفهان</option>
                                    <option value="mecca">مکه</option>
                                    <option value="karbala">کربلا</option>
                                </select>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <div className="col-6">
                                <table  className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>روز</th>
                                            <th>تاریخ و نماز صبح</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {this.state.morningPrayTimes.map((t, i) => <TableRow key={i} k={i} info={t} handler={this.clickRowHandler(i)} />)} */}
                                        {this.renderTableRows(this.state.morningPrayTimes)}
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-6">
                                <h3>اوقات شرعی <small className="text-muted">{this.state.details[0]}</small></h3>
                                <p className="text-muted">شهر : {this.state.cityName} </p>
                                <p className="text-primary">روز : {this.state.details[0]} مورخ {this.state.details[1]}</p>
                                <p className="text-secondary">اذان صبح : {this.state.details[2]}</p>
                                <p className="text-warning">طلوع آفتاب : {this.state.details[3]}</p>
                                <p className="text-danger">اذان ظهر : {this.state.details[4]}</p>
                                <p className="text-success">اذان مغرب : {this.state.details[5]}</p>
                                <p className="text-info">نیمه شب شرعی : {this.state.details[6]}</p>
                                <p className="text-light">غروب آفتاب : {this.state.details[7]}</p>
                            </div>
                        </div>
                        <hr></hr>
                        <p className="text-muted">باتشکر از <a href="https://prayertimes.date/">PrayerTimes.date</a> برای <a href="https://prayertimes.date/api/docs/dates">api</a> خوب و قوی</p>
                    </div>
                </div>
            </div>
        );
    }
}
// class TableRow extends React.Component{
//     render() {
//         var date = new Date(this.props.info.date);
//         return (
//             <tr >
//                 <td>
//                     <button type="button" onClick={this.props.handler} className="btn btn-light btn-block">{date.toLocaleDateString("fa-IR", { weekday: 'long' })}</button>
//                 </td>
//                 <td>
//                     {this.props.info.date} <br />
//                     {this.props.info.prayTime}
//                 </td>
//             </tr>
//         );
//     }
// }

export default question3;