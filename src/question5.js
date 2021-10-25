import React from "react";

import $ from 'jquery';
import click1 from './click1.wav';
import tik from './sound.mp3';

class question5 extends React.Component
{
    constructor()
    {
        super();

        this.state ={
            value:100,
            playing:false
        }
        this.click1 = new Audio(click1);
        this.sound = new Audio(tik);

        this.changeBPMHandler = this.changeBPMHandler.bind(this);
        this.playingHandler = this.playingHandler.bind(this);
    }
    changeBPMHandler(e)
    {
        var v = $('#customRange').val();
        //$('#count').text(v);
        this.setState({
            value: v
        });
        if(this.state.playing)
            this.sound.playbackRate = v/100;
    }
    playingHandler(e)
    {
        var currentState = this.state.playing;
        $('#actionButton').html((!this.state.playing ? "<i class=\"fas fa-pause\"></i> Pause" : "<i class=\"fas fa-play\"></i> Play"));
        this.setState({
            playing: !this.state.playing
        });
        if(!currentState){
            this.sound.play();
            this.sound.playbackRate = this.state.value/100;
        }
        else
            this.sound.pause();
    }
    render() {
        return (
             
            <div className="card border-success mb-3" id="targetSection" >
                <div className="card-header"><i className="fas fa-heartbeat"></i>&nbsp;&nbsp;سوال 5</div>
                <div className="card-body">
                    <h4 className="card-title">مترونوم</h4>
                    <div className="card-text">
                        <br />
                        لطفا با استفاده از نوار لغزنده سرعت مورد نظر خود را انتخاب کنید.
                        <hr />
                        <form>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group row">
                                        <label htmlFor="customRange" className="col-sm-12 col-form-label text-center"><span id="count">{this.state.value}</span> BPM</label>
                                        <div className="col-sm-8 mx-auto">
                                            <input type="range" className="form-range" min="5" max="180" step="1" value={this.state.value}  id="customRange" onChange={this.changeBPMHandler}/>
                                        </div>
                                    </div>
                                </div>  
                                <div className="col-md-12">
                                    <div className="form-group row">
                                        <div className="col-sm-8 mx-auto text-center">
                                            <button className="btn btn-lg btn-success" type="button" id="actionButton" onClick={this.playingHandler}><i className="fas fa-play"></i> Play</button>
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
export default question5;