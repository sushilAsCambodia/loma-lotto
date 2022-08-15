import React from 'react';
import Script from 'next/script';

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/hello');
    const data = await res.json();
    return {
      props: { day: data }
    }
  }
// console.log(allAlbums);
const data =[
    {"id":1},{"id":2},{"id":3},{"id":4},{"id":5},{"id":6},{"id":7},{"id":8},{"id":9},{"id":10}
];

function randInt(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function autoLottoNumber(id){
    var pad = '0000',
    rand = randInt(0, 10000) + '',
    val = pad.substring(0, pad.length - rand.length) + rand;
    $("#setautolotto"+id).val(val);
}
function removeLottoNumber(id){
    $('#setautolotto' + id).val(function() {
        this.defaultValue;
    });
    $('#big-bet' + id).val(function() {
        this.defaultValue;
    });
    $('#small-bet' + id).val(function() {
        this.defaultValue;
    });
    $('#amount' + id).val(function() {
        this.defaultValue;
    });
    $('input[name="bet-type'+id+'"]').prop('checked', false);
}

// document.querySelectorAll('input[type=radio]').forEach((elem) => {
//     elem.addEventListener('click', allowUncheck);
//     elem.previous = elem.checked;
// });

function allowUncheck(e) {
    if (this.previous) {
        this.checked = false;
    }
    document.querySelectorAll(`input[type=radio][name=${this.name}]`).forEach((elem) => {
        elem.previous = elem.checked;
    });
}
function forActiveTab(id){
    $("#main"+id).toggleClass("active");
}
function forActiveTabgames(id){
    $("#maingame"+id).toggleClass("active");
}


// For box working here sushil

function foriBoxMethods(id){
    
    var bigBat   = $("#big-bet"+id).val();
    var smallBat = $("#small-bet"+id).val();
    $("#amount"+id).val((parseInt(bigBat)+parseInt(smallBat)));

}
var firstDigit = 1;
var secondDigit = 1;
var thirdDigit = 1;
var fourthDigit = 1;
function forBoxMethods(id){
    var num = $("#setautolotto"+id).val();
    var numArray = numberToArray(num);
    var first  = firstDigitFunction(numArray, firstDigit = 1);
    var second = secondDigitFunction(numArray, secondDigit = 1);
    var third  = thirdDigitFunction(numArray, thirdDigit = 1);
    var fourth = fourthDigitFunction(numArray, fourthDigit = 1);

    if(first == 1 && second == 1 && third == 1 && fourth == 1){
        var bigBat   = $("#big-bet"+id).val();
        var smallBat = $("#small-bet"+id).val();
        $("#amount"+id).val((parseInt(bigBat)+parseInt(smallBat))*24);
        console.log('all defferents');
    }
    if(first == 2 || second == 2 || third == 2 || fourth == 2){
        if(first == 2 && second == 2 && third == 2 && fourth == 2){
        var bigBat   = $("#big-bet"+id).val();
        var smallBat = $("#small-bet"+id).val();
        $("#amount"+id).val((parseInt(bigBat)+parseInt(smallBat))*6);

            console.log('2 pair and 2 similar');
        }else{
        var bigBat   = $("#big-bet"+id).val();
        var smallBat = $("#small-bet"+id).val();
        $("#amount"+id).val((parseInt(bigBat)+parseInt(smallBat))*12);

            console.log('2 different and 2 similar');
        }
    }
    if(first == 3 || second == 3 || third == 3 || fourth == 3){
        var bigBat   = $("#big-bet"+id).val();
        var smallBat = $("#small-bet"+id).val();
        $("#amount"+id).val((parseInt(bigBat)+parseInt(smallBat))*4);

        alert(oneDiferentThreeSimalrDigits(numArray));
        console.log('1 different and 3 similar');
    }
}
function oneDiferentThreeSimalrDigits(num){
    return (''+num[0]+num[1]+num[2]+num[3]+', '+num[1]+num[0]+num[2]+num[3]+', '+num[1]+num[2]+num[0]+num[3]+', '+num[1]+num[2]+num[3]+num[0]);
}
function firstDigitFunction(numArray,firstDigit) {
    if(numArray[0] == numArray[1]){
        firstDigit++;
    }
    if(numArray[0] == numArray[2]){
        firstDigit++;
    }
    if(numArray[0] == numArray[3]){
        firstDigit++;
    }
    return firstDigit;
}
function secondDigitFunction(numArray,secondDigit) {
    if(numArray[1] == numArray[0]){
        secondDigit++;
    }
    if(numArray[1] == numArray[2]){
        secondDigit++;
    }
    if(numArray[1] == numArray[3]){
        secondDigit++;
    }
    return secondDigit;
}
function thirdDigitFunction(numArray,thirdDigit) {
    if(numArray[2] == numArray[1]){
        thirdDigit++;
    }
    if(numArray[2] == numArray[0]){
        thirdDigit++;
    }
    if(numArray[2] == numArray[3]){
        thirdDigit++;
    }
    return thirdDigit;
}
function fourthDigitFunction(numArray,fourthDigit) {
    if(numArray[3] == numArray[1]){
        fourthDigit++;
    }
    if(numArray[3] == numArray[2]){
        fourthDigit++;
    }
    if(numArray[3] == numArray[0]){
        fourthDigit++;
    }
    return fourthDigit;
}
function numberToArray(num){
    var digits = num.toString().split('');
    return digits.map(Number)
}


const Alllottery = ({ day,games }) => {
    return (
        <div className="lotteries">
            {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> */}
            <Script src="js/jquery-3.6.0.min.js" />
            <div className="bg-shape-2">
                <img src="img/bg-shape/bg-shape-2.png" alt="" />
            </div>
            <div className="bg-shape-1">
                <img src="img/bg-shape/bg-shape-1.png" alt="" />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                        <div className="section-title">
                        <h3 className="sub-title">All lotteries</h3>
                        <h2 className="title">pick your lucky number</h2>
                        </div>
                    </div>
                </div>
                <div className="part-picking-number">
                    <div className="animation-body animated">
                        <div className="picking-number-header mb-3">
                            <img src="img/lottery/lottery-header-right-img.png" alt="" className="lottery-bg-img" />
                            <div className="part-lottery-info">
                                <div className="part-text">
                                <span className="lottery-name">Choose Date:</span>
                                </div>
                            </div>
                            <div className="part-lottery-function-btn">
                                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                
                                    {day.map(day => (
                                        <li key={day.id} className="nav-item" role="presentation">
                                            <input type="checkbox" name="dates[]" id={'fordateqqqp'+day.id} value={day.day} style={{display: 'none'}} />
                                            <label className="nav-link" id={'main'+day.id} onClick={() => forActiveTab(day.id)} htmlFor={'fordateqqqp'+day.id} type="button">{ day.day }</label>
                                        </li>
                                    ))}
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="picking-number-header">
                            <img src="img/lottery/lottery-header-right-img.png" alt="" className="lottery-bg-img" />
                            <div className="part-lottery-info">
                                <div className="part-text">
                                <span className="lottery-name">Choose Game:</span>
                                </div>
                            </div>
                            <div className="part-lottery-function-btn">
                                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                    {games.map((games) => {
                                        {if(games.status=='enabled') {
                                            return (
                                                <li key={games.id} className="nav-item" role="presentation">
                                                    <input type="checkbox" name="games[]" id={'fordateqqq'+games.id} value={games.id} style={{display: 'none'}} />
                                                    <label className="nav-link " id={'maingame'+games.id} onClick={() => forActiveTabgames(games.id)} htmlFor={'fordateqqq-'+games.id} type="button">
                                                    <img src={games.image} alt="" style={{borderRadius: '100%', height: '44px', width: '44px;'}} /> { games.name } </label>
                                                </li>
                                            )
                                        }}
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="picking-number-body">
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-numbers" role="tabpanel" aria-labelledby="pills-numbers-tab">
                                    <div className="picking-number-palate">
                                        <div className="number-box special">
                                            <table className="table-responsive table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th className="text-center">Sr.No.</th>
                                                        <th className="text-center">Auto</th>
                                                        <th className="text-center">Number</th>
                                                        <th className="text-center">Big Bet</th>
                                                        <th className="text-center">Small Bet</th>
                                                        <th className="text-center">Bet Type</th>
                                                        <th className="text-center">Amount</th>
                                                        <th className="text-center">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data.map(function(d, idx){
                                                        return (
                                                            <tr key={idx}>
                                                                <td className="text-center">{d.id}</td>
                                                                <td className="text-center">
                                                                <span className="btn btn-primary" onClick={() => autoLottoNumber(d.id)} ><i className="fa-solid fa-arrows-rotate"></i></span>
                                                                </td>
                                                                <td className="text-center">
                                                                    <input id={'setautolotto'+d.id} style={{ width: '142px' }}  className="form-control text-center" type="input" maxLength="4" minLength="4" />
                                                                </td>
                                                                <td className="text-center">
                                                                    <input type="number" style={{ width: '142px' }} defaultValue="" id={'big-bet'+d.id} className="form-control text-center" />
                                                                </td>
                                                                <td className="text-center">
                                                                    <input type="number" style={{ width: '142px' }} defaultValue="" id={'small-bet'+d.id} className="form-control text-center" />
                                                                </td>
                                                                <td className="text-center">
                                                                <div className="radio-toolbar">
                                                                    <input id={'radio16'+d.id} value="6" type="radio" name={'bet-type'+d.id} onClick={() => forBoxMethods(d.id)} />
                                                                    <label htmlFor={'radio16'+d.id}>Box</label>
                                                                    <input id={'radio17'+d.id} value="7" type="radio" name={'bet-type'+d.id} onClick={() => foriBoxMethods(d.id)} />
                                                                    <label htmlFor={'radio17'+d.id}>iBox</label>
                                                                </div>
                                                                </td>
                                                                <td className="text-center">
                                                                    <input type="text" disabled style={{ width: '142px' }} value="" id={'amount'+d.id} className="form-control text-center" />
                                                                </td>  
                                                                <td className="text-center">
                                                                    <span className="btn btn-danger" onClick={() => removeLottoNumber(d.id)}><i className="fa fa-trash" aria-hidden="true"></i></span>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })}
                                                </tbody>
                                            </table>
                                            <div className="picking-number-result" style={{marginTop: '0px'}}>
                                                <div className="part-title">
                                                    <h3 className="title">Total Stake:</h3>
                                                </div>
                                                <div className="result-number-palate" style={{marginLeft: '56px'}}>
                                                    <input type="text" disabled className="form-control text-center" value="$ 1000" style={{width: '110px'}} />
                                                </div>
                                                <div className="picking-number-quick-buttons" style={{marginLeft: '40px'}}>
                                                    <button className="clear-btn">Cancel <i className="fa-solid fa-xmark"></i></button>
                                                    <button className="auto-select-btn btn-pok">Submit <i className="fas fa-save"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="picking-number-final-step">
                                        <div className="part-text">
                                            <p><span className="b-txt">Note :</span> Problem set compensation the harmonics, understood. Hundreds times, <br /> of until they employed sure a behind boundless their for.</p>
                                        </div>
                                        <div className="part-btn">
                                            <a href="http://localhost/loma-lotto/lotteries" className="btn-pok">Continue to cart <i className="fa-solid fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Alllottery;