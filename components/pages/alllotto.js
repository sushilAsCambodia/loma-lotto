import React,{ useState } from 'react';
import Link from 'next/link';

import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Lotterydetails from './lotteryDetails';
import Router from "next/router";
import { Audio, BallTriangle, ThreeDots } from 'react-loader-spinner'
import { useTranslation } from "react-i18next";

function Alllotto({ day, games }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalHtml, setModalHtml] = useState(<>loader......</>);
    const [refeNum, setRefeNum] = useState(0);
    const [successModal, setSuccessModal] = useState(false);
    const [successBody, setSuccessBody] = useState(<>Lodaing......</>)
    //let history = useHistory();
    const nofnumber = [
        { "id": 1 }, { "id": 2 }, { "id": 3 }, { "id": 4 }, { "id": 5 }, { "id": 6 }, { "id": 7 }, { "id": 8 }, { "id": 9 }, { "id": 10 }

    ];

    const getCountOfDates = () => {
        var dates = [];
        $('input[name="dates[]"]:checkbox:checked').each(function (i) {
            dates[i] = $(this).val();
        });
        if (dates.length == 0) {
            return 0;
        } else {
            return dates.length;
        }
    }
    const getCountOfGames = () => {
        var games = [];
        $('input[name="games[]"]:checkbox:checked').each(function (i) {
            games[i] = $(this).val();
        });
        if (games.length == 0) {
            return 0;
        } else {
            return games.length;
        }
    }
    const netAmountFound = (id) => {

        var amount = $("#amount" + id).val();
        var commission = $("#commission" + id).val();
        var coommiAmount = (amount * commission) / 100;
        var netAmount = amount - coommiAmount;
        $("#netamount" + id).val(netAmount);
    }

    const _removeNumber = () => {
        alert('ggg');

        var amount = $("#amount" + id).val();
        var commission = $("#commission" + id).val();
        var coommiAmount = (amount * commission) / 100;
        var netAmount = amount - coommiAmount;
        $("#netamount" + id).val(netAmount);

    }
    // onclick dates
    const getToatalAmountDateGame = (id, work) => {
        if (work === 'game') {
            if ($('#fordateqqqp' + id).is(":checked")) {
                $("#main" + id).addClass("active");
            } else {
                $("#main" + id).removeClass("active");
            }
        }
        if (work === 'day') {
            if ($('#fordateqqqp' + id).is(":checked")) {
                $("#main" + id).addClass("active");
            } else {
                $("#main" + id).removeClass("active");
            }
        }
        var manageall_id = [];
        $('input[name="manageall_id[]"]').each(function (i) {
            manageall_id[i] = $(this).val();
        });
        {
            manageall_id.map(function (id) {
                var bigBat = $("#big-bet" + id).val();
                var smallBat = $("#small-bet" + id).val();
                if (bigBat == '') { bigBat = 0; }
                if (smallBat == '') { smallBat = 0; }
                const witchTypeVal = witchTypesOf(id);
                if ($("#radio16" + id).prop("checked")) {
                    if (witchTypeVal != 0) {
                        var totalDG = getCountOfDates() * getCountOfGames();
                        var totalDataAmount = ((parseFloat(bigBat) + parseFloat(smallBat)) * witchTypeVal) * totalDG;
                        if (totalDataAmount == 0) { totalDataAmount = '' }
                        $("#amount" + id).val(totalDataAmount);
                    }
                } else {
                    var totalDG = getCountOfDates() * getCountOfGames();
                    var totalDataAmount = (parseFloat(bigBat) + parseFloat(smallBat)) * totalDG;
                    if (totalDataAmount == 0) { totalDataAmount = '' }
                    $("#amount" + id).val(totalDataAmount);
                }
                netAmountFound(id);
            })
        }
        totalStake();
    }
    // onckeup bit bet
    const netAmountFoundBigbet = (e, id) => {
        // alert(e.target.value);

        if (Math.sign(e.target.value) === -1) {
            e.target.value = 0;
        }

        var bigBat = e.target.value;
        var smallBat = $("#small-bet" + id).val();
        if (bigBat == '') { bigBat = 0; }
        if (smallBat == '') { smallBat = 0; }
        const witchTypeVal = witchTypesOf(id);
        if ($("#radio16" + id).prop("checked")) {
            if (witchTypeVal != 0) {
                var totalDG = getCountOfDates() * getCountOfGames();
                var totalDataAmount = ((parseFloat(bigBat) + parseFloat(smallBat)) * witchTypeVal) * totalDG;
                if (totalDataAmount == 0) { totalDataAmount = '' }
                $("#amount" + id).val(totalDataAmount);
            }
        } else {
            var totalDG = getCountOfDates() * getCountOfGames();
            var totalDataAmount = (parseFloat(bigBat) + parseFloat(smallBat)) * totalDG;
            if (totalDataAmount == 0) { totalDataAmount = '' }
            $("#amount" + id).val(totalDataAmount);
        }
        netAmountFound(id);
        totalStake();
    }
    // onckeyup small bet
    const netAmountFoundSmallbet = (e, id) => {

        // var myString = e.target.value.replace(/[^\w\s]/gi, '');
        // e.target.value = myString.replace(/\D/g,'');

        if (Math.sign(e.target.value) === -1) {
            e.target.value = 0;
        }

        var bigBat = $("#big-bet" + id).val();
        var smallBat = e.target.value;
        if (bigBat == '') { bigBat = 0; }
        if (smallBat == '') { smallBat = 0; }
        const witchTypeVal = witchTypesOf(id);
        if ($("#radio16" + id).prop("checked")) {
            if (witchTypeVal != 0) {
                var totalDG = getCountOfDates() * getCountOfGames();
                var totalDataAmount = ((parseFloat(bigBat) + parseFloat(smallBat)) * witchTypeVal) * totalDG;
                if (totalDataAmount == 0) { totalDataAmount = '' }
                $("#amount" + id).val(totalDataAmount);
            }
        } else {
            var totalDG = getCountOfDates() * getCountOfGames();
            var totalDataAmount = (parseFloat(bigBat) + parseFloat(smallBat)) * totalDG;
            if (totalDataAmount == 0) { totalDataAmount = '' }
            $("#amount" + id).val(totalDataAmount);
        }
        netAmountFound(id);
        totalStake();
    }
    const getAllDataForOne = (id) => {
        var bigBat = $("#big-bet" + id).val();
        var smallBat = $("#small-bet" + id).val();
        if (bigBat == '') { bigBat = 0; }
        if (smallBat == '') { smallBat = 0; }
        const witchTypeVal = witchTypesOf(id);
        if ($("#radio16" + id).prop("checked")) {
            if (witchTypeVal != 0) {
                var totalDG = getCountOfDates() * getCountOfGames();
                var totalDataAmount = ((parseFloat(bigBat) + parseFloat(smallBat)) * witchTypeVal) * totalDG;
                if (totalDataAmount == 0) { totalDataAmount = '' }
                $("#amount" + id).val(totalDataAmount);
            }
        } else {
            var totalDG = getCountOfDates() * getCountOfGames();
            var totalDataAmount = (parseFloat(bigBat) + parseFloat(smallBat)) * totalDG;
            if (totalDataAmount == 0) { totalDataAmount = '' }
            $("#amount" + id).val(totalDataAmount);
        }
        netAmountFound(id);
        totalStake();
    }
    // ONCLICK box method
    const forBoxMethods = (id, e) => {
        var bigBat = $("#big-bet" + id).val();
        var smallBat = $("#small-bet" + id).val();
        if (bigBat == '') { bigBat = 0; }
        if (smallBat == '') { smallBat = 0; }
        const witchTypeVal = witchTypesOf(id);
        if (witchTypeVal != 0) {
            var totalDG = getCountOfDates() * getCountOfGames();
            var totalDataAmount = ((parseFloat(bigBat) + parseFloat(smallBat)) * witchTypeVal) * totalDG;
            if (totalDataAmount == 0) { totalDataAmount = '' }
            $("#amount" + id).val(totalDataAmount);
        }
        $('#ibox_' + id).removeClass("chk-active");
        $('#radio17' + id).attr("checked", false);
        if ($('#box_' + id).hasClass('chk-active')) {
            if (witchTypeVal != 0) {
                var totalDG = getCountOfDates() * getCountOfGames();
                var totalDataAmount = (parseFloat(bigBat) + parseFloat(smallBat)) * totalDG;
                if (totalDataAmount == 0) { totalDataAmount = '' }
                $("#amount" + id).val(totalDataAmount);
            }
            $('#radio16' + id).attr("checked", false);
            $('#box_' + id).removeClass("chk-active");
        } else {
            $('#radio16' + id).attr("checked", true);
            $('#box_' + id).addClass("chk-active");
        }
        if (witchTypeVal != 0) {
            netAmountFound(id);
        }
        totalStake();
    }
    // onclick ibox
    const foriBoxMethods = (id) => {
        const witchTypeVal = witchTypesOf(id);
        $('#box_' + id).removeClass("chk-active");
        $('#radio16' + id).attr("checked", false);
        if ($('#ibox_' + id).hasClass('chk-active')) {
            $('#radio17' + id).attr("checked", false);
            $('#ibox_' + id).removeClass("chk-active");
        } else {
            $('#radio17' + id).attr("checked", true);
            $('#ibox_' + id).addClass("chk-active");
        }

        var bigBat = $("#big-bet" + id).val();
        var smallBat = $("#small-bet" + id).val();

        if (bigBat == '') { bigBat = 0; }
        if (smallBat == '') { smallBat = 0; }

        if (witchTypeVal != 0) {
            var totalDG = getCountOfDates() * getCountOfGames();
            var totalDataAmount = (parseFloat(bigBat) + parseFloat(smallBat)) * totalDG;
            if (totalDataAmount == 0) { totalDataAmount = '' }
            $("#amount" + id).val(totalDataAmount);
        }
        totalStake();
    }
    const totalStake = () => {
        var manageall_id = [];
        $('input[name="manageall_id[]"]').each(function (i) {
            manageall_id[i] = $(this).val();
        });
        var amountStake = 0;
        {
            manageall_id.map(function (id) {
                if ($("#amount" + id).val() != '') {
                    if (id == 1) {
                        amountStake = $("#amount" + id).val();
                    } else {
                        amountStake = parseFloat($("#amount" + id).val()) + parseFloat(amountStake);
                    }
                }
            })
        }
        $('#totalStake').val(amountStake);
    }
    var firstDigit = 1;
    var secondDigit = 1;
    var thirdDigit = 1;
    var fourthDigit = 1;
    const witchTypesOf = (id) => {
        var num = $("#setautolotto" + id).val();
        var numArray = numberToArray(num);
        var first = firstDigitFunction(numArray, firstDigit = 1);
        var second = secondDigitFunction(numArray, secondDigit = 1);
        var third = thirdDigitFunction(numArray, thirdDigit = 1);
        var fourth = fourthDigitFunction(numArray, fourthDigit = 1);
        if (num.length == 4) {
            if (first == 1 && second == 1 && third == 1 && fourth == 1) {
                return 24;
            }
            if (first == 2 || second == 2 || third == 2 || fourth == 2) {
                if (first == 2 && second == 2 && third == 2 && fourth == 2) {
                    return 6;
                } else {
                    return 12;
                }
            }
            if (first == 3 || second == 3 || third == 3 || fourth == 3) {
                return 4;
            }
        }
        return 0;
    }

    /////////////////////////////////////////////////////////////// /////

    const autoLottoNumber = (id) => {
        var pad = '0000',
            rand = randInt(0, 10000) + '',
            val = pad.substring(0, pad.length - rand.length) + rand;
        $("#setautolotto" + id).val(val);
        getAllDataForOne(id);
    }
    const randInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    const onlyNumbers = (e, id) => {
        if (e.target.value.length > e.target.maxLength)
            e.target.value = e.target.value.slice(0, e.target.maxLength)
        getAllDataForOne(id);
    }
    const oneDiferentThreeSimalrDigits = (num) => {
        return ('' + num[0] + num[1] + num[2] + num[3] + ', ' + num[1] + num[0] + num[2] + num[3] + ', ' + num[1] + num[2] + num[0] + num[3] + ', ' + num[1] + num[2] + num[3] + num[0]);
    }
    const firstDigitFunction = (numArray, firstDigit) => {
        if (numArray[0] == numArray[1]) {
            firstDigit++;
        }
        if (numArray[0] == numArray[2]) {
            firstDigit++;
        }
        if (numArray[0] == numArray[3]) {
            firstDigit++;
        }
        return firstDigit;
    }
    const secondDigitFunction = (numArray, secondDigit) => {
        if (numArray[1] == numArray[0]) {
            secondDigit++;
        }
        if (numArray[1] == numArray[2]) {
            secondDigit++;
        }
        if (numArray[1] == numArray[3]) {
            secondDigit++;
        }
        return secondDigit;
    }
    const thirdDigitFunction = (numArray, thirdDigit) => {
        if (numArray[2] == numArray[1]) {
            thirdDigit++;
        }
        if (numArray[2] == numArray[0]) {
            thirdDigit++;
        }
        if (numArray[2] == numArray[3]) {
            thirdDigit++;
        }
        return thirdDigit;
    }
    const fourthDigitFunction = (numArray, fourthDigit) => {
        if (numArray[3] == numArray[1]) {
            fourthDigit++;
        }
        if (numArray[3] == numArray[2]) {
            fourthDigit++;
        }
        if (numArray[3] == numArray[0]) {
            fourthDigit++;
        }
        return fourthDigit;
    }
    const numberToArray = (num) => {
        var digits = num.toString().split('');
        return digits.map(Number)
    }

    const removeLottoNumber = (id) => {
        $('#setautolotto' + id).val(function () {
            this.defaultValue;
        });
        $('#big-bet' + id).val(function () {
            this.defaultValue;
        });
        $('#small-bet' + id).val(function () {
            this.defaultValue;
        });
        $('#amount' + id).val(function () {
            this.defaultValue;
        });
        $('#radio16' + id).attr("checked", false);
        $('#radio17' + id).attr("checked", false);
        $('#box_' + id).removeClass("chk-active");
        $('#ibox_' + id).removeClass("chk-active");
        getToatalAmountDateGame();
    }

    const resetAllForm = (e) => {
        e.preventDefault()
        $('#form_id').trigger("reset");
        $('.box_remove').removeClass("chk-active");
        $('.ibox_remove').removeClass("chk-active");
        $('input[type="radio"]').attr('checked', false);

    }

    const handleSubmit = async (event) => {

        event.preventDefault()
        var dates = [];
        var games = [];

        $('input[name="dates[]"]:checkbox:checked').each(function (i) {
            dates[i] = $(this).val();
        });
        $('input[name="games[]"]:checkbox:checked').each(function (i) {
            games[i] = $(this).val();
        });
        if (dates.length === 0) {

            toast.error('Please choose at least one date selection.', {
                position: "top-right",

                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,

            });
            // alert("Please choose at least one date selection.") 
        } else if (games.length === 0) {
            toast.error('Please select game first !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,

            });
        } else {

            var manageall_id = [];
            $('input[name="manageall_id[]"]').each(function (i) {
                manageall_id[i] = $(this).val();
            });
            var datas = [];
            var xx = 0;

            {
                manageall_id.map(function (valid, id) {
                    if ($('#setautolotto' + valid).val() != '' && $('#setautolotto' + valid).val().length == 4) {
                        var setautolotto = $('#setautolotto' + valid).val();
                        var big_bet = $('#big-bet' + valid).val();
                        var small_bet = $('#small-bet' + valid).val();
                        var box = $('#radio16' + valid + ':radio:checked').val();
                        // if(box){
                        //     box ='on';
                        // }else{
                        //     box ='off';  
                        // }
                        var ibox = $('#radio17' + valid + ':radio:checked').val();
                        // if(ibox){
                        //     ibox = 'on';
                        // }else{
                        //     ibox = 'off';
                        // }
                        var amount = $('#amount' + valid).val();
                        if (big_bet == '' && small_bet == '') {
                            toast.error('Please Fill number,bet amount first !', {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,

                            });
                        } else if (big_bet <= 0 && small_bet <= 0) {
                            toast.error('Please Fill number,bet amount first !', {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,

                            });
                        }
                        datas[id] = {
                            number: setautolotto,
                            big_bet: big_bet,
                            small_bet: small_bet,
                            box: box,
                            ibox: ibox,
                            amount: amount,
                        }
                    } else {
                        // alert('Please enter 4 digit number');
                        xx++;
                    }
                })
            }
            if (xx == 10) {
                toast.error('Please Fill number,bet amount first !', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,

                });

                {
                    manageall_id.map(function (valid, id) {
                        if ($('#setautolotto' + valid).val() != '' && $('#setautolotto' + valid).val().length == 4) {
                            var setautolotto = $('#setautolotto' + valid).val();
                            var big_bet = $('#big-bet' + valid).val();
                            var small_bet = $('#small-bet' + valid).val();
                            var box = $('#radio16' + valid + ':radio:checked').val();
                            var ibox = $('#radio17' + valid + ':radio:checked').val();
                            var amount = $('#amount' + valid).val();
                            if (big_bet == '' && small_bet == '') {
                                alert('Please fill in at least one stake');
                            } else if (big_bet <= 0 && small_bet <= 0) {
                                alert('Please fill in at least one stake');
                            }
                            datas[id] = {
                                number: setautolotto,
                                big_bet: big_bet,
                                small_bet: small_bet,
                                box: box,
                                ibox: ibox,
                                amount: amount,
                            }
                        } else {
                            // alert('Please enter 4 digit number');
                            xx++;
                        }
                    })
                }
                if (xx == 10) {
                    alert('Please fill in at least one number');

                }
            }
            const data = {
                dates: dates,
                games: games,
                datas: datas,
            }
            console.log(data);
            // return false;
            const JSONdata = JSON.stringify(data)
            const endpoint = process.env.siteUrl + '/api/lottery-store'
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSONdata,
            }
            const response = await fetch(endpoint, options)
            const result = await response.json()
            console.log(result);


            if (result.success) {
                setModalOpen(true);

                setModalHtml(<ThreeDots color="#00BFFF" height={80} width={80} />);

                let refNum = result.reference_number;
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ reference_number: refNum })
                };
                const response = await fetch(process.env.siteUrl + '/api/lottery-slave-list', requestOptions);
                const resultList = await response.json();
                console.log(data);

                let dataset = resultList.data;


                const Html = <Lotterydetails gridData={dataset} />;


                setModalHtml(Html);
                setRefeNum(refNum);
                toast.success('Ticket have been generated', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,

                });
            }


        }
    }

    const _saveOk = async (e, _refId) => {

        setModalOpen(false);
        setSuccessModal(true);
        setSuccessBody(<ThreeDots color="#00BFFF" height={80} width={80} />);
        let data = {}
        data.id = _refId
        const JSONdata = JSON.stringify(data)
        const endpoint = process.env.siteUrl + '/api/lottery-change-status'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }
        const response = await fetch(endpoint, options)
        const result = await response.json()
        console.log(result);

        if (result.success == true) {
            let succMsg = (<div className="alert alert-success" role="alert">
                <p> Thank You , i have accsepted your request.</p>
                <p> Referance ID : {_refId} .</p>


            </div>);
            setSuccessBody(<>{succMsg}</>);
        }

    }

    const _redirectTohistory = () => {
        setSuccessModal(!successModal)
        Router.push("/history");

    }


    const { t } = useTranslation();
    return (
        <>
            <ToastContainer />
            <div className="lotteries">
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
                                <h3 className="sub-title">{ t('All_lotteries') }</h3>
                                <h2 className="title">{ t('pick_your_lucky_number') }</h2>
                            </div>
                        </div>
                    </div>
                    <div className="part-picking-number">
                        <div className="animation-body animated">
                            <form onSubmit={handleSubmit} id="form_id">
                                <div className="picking-number-header mb-1">
                                    <img src="img/lottery/lottery-header-right-img.png" alt="" className="lottery-bg-img" />
                                    <div className="part-lottery-info">
                                        <div className="part-text">
                                            <span className="lottery-name" aria-describedby="ui-tooltip-3">{ t('Select_Date') }:</span>
                                        </div>
                                    </div>
                                    <div className="part-lottery-function-btn">
                                        <div className="job-tab">
                                            <div className="nav nav-tabs radio-toolbar border-0">
                                                {day.map((day) => {
                                                    return (
                                                        <div key={day.id} className="nav-item px-1">
                                                            <input type="checkbox" name="dates[]" onClick={() => { getToatalAmountDateGame(day.id, 'day'); }} id={'fordateqqqp' + day.id} value={day.day} style={{ display: 'none' }} />
                                                            <label style={{ border: '1px solid' }} className="nav-link text-light" id={'main' + day.id} htmlFor={'fordateqqqp' + day.id} >
                                                                {day.day}
                                                            </label>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="picking-number-header">
                                    <img src="img/lottery/lottery-header-right-img.png" alt="" className="lottery-bg-img" />
                                    <div className="part-lottery-info">
                                        <div className="part-text">
                                            <span className="lottery-name">{ t('Select_Game') }:</span>
                                        </div>
                                    </div>
                                    <div className="part-lottery-function-btn">
                                        <div className="job-tab">
                                            <div className="nav nav-tabs radio-toolbar border-0">
                                                {games.brands.map((games) => {
                                                    {
                                                        if (games.status == 'enabled') {
                                                            return (
                                                                <div key={games.id} className="nav-item px-1">
                                                                    <input onClick={() => { getToatalAmountDateGame(games.id, 'game'); }} type="checkbox" name="games[]" id={'forgameqqq-' + games.id} value={games.id} style={{ display: 'none' }} />
                                                                    <label className="nav-link text-light" id={'maingame' + games.id} htmlFor={'forgameqqq-' + games.id} type="button" style={{ border: '1px solid' }}>

                                                                        <img src={games.image} alt="" style={{ borderRadius: '100%', height: '44px', width: '44px;' }} /> {games.name}

                                                                    </label>
                                                                </div>
                                                            )
                                                        }
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="picking-number-body">
                                    <div className="tab-content" id="pills-tabContent">

                                        <div className="tab-pane fade show active" id="pills-numbers" role="tabpanel" aria-labelledby="pills-numbers-tab">

                                        <div className="main-container mb-3">
                                                        <div className="current-balance">
                                                            <h2>$1857.68 { t('Current_Balance') }<Link href='/history'><span className="btn-outline-dark text-light" style={{ cursor: 'pointer', margin: '0' }}>{ t('Go_To_History') }</span></Link></h2>
                                                        </div>
                                                    </div>
                                            <div className="picking-number-palate">

                                                <div className="number-box special">


                                                    <table className="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th className="text-center">{ t('Sr_No') }</th>
                                                                <th className="text-center">{ t('Auto') }</th>
                                                                <th className="text-center">{ t('Number') }</th>
                                                                <th className="text-center">{ t('Big_Bet') }</th>
                                                                <th className="text-center">{ t('Small_Bet') }</th>
                                                                <th className="text-center">{ t('Bet_Type') }</th>
                                                                <th className="text-center">{ t('Amount') }</th>
                                                                <th className="text-center">{ t('Action') }</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {nofnumber.map(function (d, idx) {
                                                                return (
                                                                    <tr key={idx}>
                                                                        <input type="hidden" value={d.id} name="manageall_id[]" />
                                                                        <td className="text-center">{d.id}</td>
                                                                        <td className="text-center">
                                                                            <span className="btn btn-primary" onClick={() => { autoLottoNumber(d.id); }} ><i className="fa-solid fa-arrows-rotate"></i></span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <input id={'setautolotto' + d.id} style={{ width: '147px' }} className="form-control text-center" type="number" onChange={(event) => { onlyNumbers(event, d.id); }} maxLength="4" minLength="4" />
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <input onKeyPress={(event) => { if (!/[0-9.]/.test(event.key)) { event.preventDefault(); } }} type="input" onKeyUp={(event) => { netAmountFoundBigbet(event, d.id); }} style={{ width: '147px' }} defaultValue="" id={'big-bet' + d.id} className="form-control text-center" />
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <input onKeyPress={(event) => { if (!/[0-9.]/.test(event.key)) { event.preventDefault(); } }} type="input" onKeyUp={(event) => { netAmountFoundSmallbet(event, d.id); }} style={{ width: '147px' }} defaultValue="" id={'small-bet' + d.id} className="form-control text-center" />
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <div className="radio-toolbar">
                                                                                <span className="box_remove marginRightRadio" id={'box_' + d.id} onClick={() => { forBoxMethods(d.id); }}><input id={'radio16' + d.id} type="radio" name={'bet-type' + d.id} />{ t('Box') }</span>
                                                                                <span className='ibox_remove' id={'ibox_' + d.id} onClick={() => { foriBoxMethods(d.id); }}><input id={'radio17' + d.id} type="radio" name={'bet-type' + d.id} />{ t('iBox') }</span>
                                                                            </div>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <input type="number" disabled style={{ width: '147px' }} value="" id={'amount' + d.id} className="form-control text-center" />
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span className="btn btn-danger" onClick={() => { removeLottoNumber(d.id); }} ><i className="fa fa-trash" aria-hidden="true"></i></span>
                                                                        </td>
                                                                    </tr>

                                                                )
                                                            })}
                                                        </tbody>
                                                    </table>
                                                    <div className="picking-number-result" style={{ marginTop: '0px' }}>
                                                        <div className="part-title">
                                                            <h3 className="title">{ t('Total_Stake') }:</h3>
                                                        </div>
                                                        <div className="result-number-palate" style={{ marginLeft: '56px' }}>
                                                            <input type="number" disabled className="form-control text-center" value="0" id="totalStake" style={{ width: '110px' }} />
                                                        </div>
                                                        <div className="picking-number-quick-buttons" style={{ marginLeft: '40px' }}>
                                                            <button onClick={(e) => resetAllForm(e)} className="clear-btn">{ t('Cancel') } <i className="fa-solid fa-xmark"></i></button>
                                                            <button className="auto-select-btn btn-pok" onClick={(e) => handleSubmit(e)}>{ t('Check_Continue') } <i className="fas fa-save"></i></button>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen} className="modal-lg">
                <div className=" modal-header">
                    <h2 className="text-dark modal-title" id="exampleModalLabel">
                        Bet Details
                    </h2>
                    <button
                        aria-label="Close"
                        className="btn btn-danger close"
                        type="button"
                        onClick={() => setModalOpen(!modalOpen)}
                    >
                        <i className="fa fa-times" aria-hidden="true"></i>
                        {/* <span aria-hidden={true}>×</span> */}
                    </button>
                </div>
                <ModalBody>
                    <div id="accordion">

                        {modalHtml}



                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button onClick={(e) => resetAllForm(e)} className="btn btn-danger close">Cancel <i className="fa-solid fa-xmark"></i></Button>
                    <Button
                        className="btn btn-success"
                        color="secondary"
                        type="button"
                        onClick={(e, id) => _saveOk(e, refeNum)}
                    >
                        Ok
                    </Button>

                </ModalFooter>
            </Modal>
            <Modal toggle={() => setSuccessModal(!successModal)} isOpen={successModal}>
                <div className=" modal-header">
                    <h5 className=" modal-title" id="exampleModalLabel">
                        Success
                    </h5>
                    <button
                        aria-label="Close"
                        className=" close"
                        type="button"
                        onClick={() => _redirectTohistory()}
                    >
                        <span aria-hidden={true}>×</span>
                    </button>
                </div>
                <ModalBody>
                    <div id="accordion">

                        {successBody}



                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => _redirectTohistory()} className="close">Ok </Button>


                </ModalFooter>
            </Modal>
        </>

    );
}

export default Alllotto;