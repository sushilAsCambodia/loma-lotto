import React from 'react';

function Howtoplay() {
    return (
        <div className="working-process">
            <img src="img/bg-shape/bg-shape-3.png" alt="" className="bg-shape-3" />
            <img src="img/bg-shape/wp-shape-2.png" alt="" className="wp-bg-shape-2" />
            <img src="img/bg-shape/wp-shape-3.png" alt="" className="wp-bg-shape-3" />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-8">
                        <div className="section-title">
                            <h3 className="sub-title">How to play</h3>
                            <h2 className="title">easiest way to picking a number.</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                        <div className="single-process">
                            <div className="part-icon">
                                <img src="img/working-process/icon-1.png" alt="" />
                            </div>
                            <div className="part-text">
                                <span className="step-number">1.</span>
                                <span className="step-title">Set a budget.</span>
                                <p>Playing the lottery is gambling, so keep it fun by treating it as part of your entertainment budget.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                        <div className="single-process pp-2">
                            <div className="part-text">
                                <span className="step-title">Choose your Numbers.</span>
                                <p>Pick single/multiple 4 digit numbers from 0000 to 9999. Choose how you want to play (Big bet, Small bet etc..)</p>
                                <span className="step-number two">2.</span>
                            </div>
                            <div className="part-icon">
                                <img src="img/working-process/icon-2.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                        <div className="single-process">
                            <div className="part-icon">
                                <img src="img/working-process/icon-3.png" alt="" />
                            </div>
                            <div className="part-text">
                                <span className="step-number">3.</span>
                                <span className="step-title">Buy your numbers.</span>
                                <p>Add selected numbers to the cart, check if you have sufficient balance then place your order. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                        <div className="single-process pp-2">
                            <div className="part-text">
                                <span className="step-title">Check winnings.</span>
                                <p>Congratulations! <br />You are winner if your selected number are in the announced winners list.</p>
                                <span className="step-number four">4.</span>
                            </div>
                            <div className="part-icon">
                                <img src="img/working-process/icon-4.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Howtoplay;