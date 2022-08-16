import React from 'react';
import Link from 'next/link';
function History({lottery}) {
    const pAccordionToggle = (id) => {
        $("#p-accordion-inners-"+id).slideToggle();
    }
    const cAccordionToggle = (id) => {
        $("#c-accordion-inners-"+id).slideToggle();
    }
    return (
            <div className='container mt-5'>
                
                <div className="main-container">
                    <div className="current-balance">
                        <h2>$1857.68 Current Balance<Link href='/lotteries'><span className="btn-outline-dark text-light" style={{ cursor: 'pointer', margin: '0' }}>Play Lottery</span></Link></h2>
                    </div>
                </div>

                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                            <b>Settled - Bookings</b>
                        </button>
                        <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                            <b>Unsettled - Bookings</b>
                        </button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        
                        <div className="">
                            <div className="card">
                                <div className="card-header">
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <h4>Booking Ref ID : KK-786-123</h4>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className='form-group'>
                                                <select className='form-control'>
                                                    <option>Seach By Booking Id</option>
                                                    <option></option>
                                                    <option></option>
                                                    <option></option>
                                                    <option></option>
                                                </select> 
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div className='form-group'>
                                                <input className='form-control' type='text' placeholder='Search' />
                                            </div>
                                        </div>
                                        <div className='col-md-1'>
                                            <div className='form-group'>
                                                <button className='btn btn-warning text-light'>
                                                    <i className="fa fa-search" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <ul className="accordion">
                                            {lottery.map(function(lottery, idx){
                                                return (
                                                    <li key={idx} className="accordion-chevron" style={{ margin: '.7em 0' }}>
                                                        <a className="accordion-toggle" onClick={() => { pAccordionToggle(lottery.id+'-1'); }} href="javascript:void(0);">
                                                            <i className="fa fa-chevron-down"></i>{lottery.day_name}
                                                        </a>
                                                        <ul className="accordion-inner" id={'p-accordion-inners-'+lottery.id+'-1'}>
                                                            {lottery.games.map(function(games, idxx){
                                                                return (
                                                                    <li key={idxx} className="accordion-chevron" style={{ margin: '.7em 0' }}>
                                                                        <a className="accordion-toggle" onClick={() => { cAccordionToggle(lottery.id+'-'+games.id+'-1'); }} href="javascript:void(0);">
                                                                            <i className="fa fa-chevron-down"></i>{games.game_name}
                                                                        </a>
                                                                        <div className="accordion-inner" id={'c-accordion-inners-'+lottery.id+'-'+games.id+'-1'}>
                                                                            
                                                                            <div>
                                                                                <table className="table table-bordered table-sm">
                                                                                    <thead>
                                                                                        <tr>
                                                                                            <th className="text-center">Sr.No.</th>
                                                                                            <th className="text-center">Number</th>
                                                                                            <th className="text-center">Big Bet</th>
                                                                                            <th className="text-center">Small Bet</th>
                                                                                            <th className="text-center">Bet Type</th>
                                                                                            <th className="text-center">Amount</th>
                                                                                            <th className="text-center">Commission</th>
                                                                                            <th className="text-center">Net Amount</th>
                                                                                            <th className="text-center">Action</th>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        {games.lotteries.map(function(lotteries, idxxx){
                                                                                        return (
                                                                                            <tr key={idxxx}>
                                                                                                <input type="hidden" name="manageall_id[]" />
                                                                                                <td className="text-center">{lotteries.srno}</td>
                                                                                                <td className="text-center">
                                                                                                    {lotteries.number_pattern}
                                                                                                </td>
                                                                                                <td className="text-center">
                                                                                                    {lotteries.big_bet_amount}
                                                                                                </td>
                                                                                                <td className="text-center">
                                                                                                    {lotteries.small_bet_amount}
                                                                                                </td>
                                                                                                <td className="text-center">
                                                                                                    {lotteries.bet_type == '0'? 'Box' : null }
                                                                                                    {lotteries.bet_type == '1'? 'iBox' : null }
                                                                                                    {lotteries.bet_type == '2'? null : null }
                                                                                                </td>
                                                                                                <td className="text-center">
                                                                                                    {lotteries.total_amount}
                                                                                                </td> 
                                                                                                <td className="text-center">
                                                                                                    {lotteries.commission}
                                                                                                </td>
                                                                                                <td className="text-center">
                                                                                                    {lotteries.net_amount}
                                                                                                </td>
                                                                                                <td className="text-center">
                                                                                                    <span className="btn btn-danger btn-sm" style={{ padding: '0px 10px' }}><i className="fa fa-trash" aria-hidden="true"></i></span>
                                                                                                </td>
                                                                                            </tr>
                                                                                            )
                                                                                        })}
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </li>
                                                )
                                            })}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        
                        <div className="">
                            <div className="card">
                                <div className="card-header">
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <h4>Booking Ref ID : KK-786-123</h4>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className='form-group'>
                                                <select className='form-control'>
                                                    <option>Seach By Booking Id</option>
                                                    <option></option>
                                                    <option></option>
                                                    <option></option>
                                                    <option></option>
                                                </select> 
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div className='form-group'>
                                                <input className='form-control' type='text' placeholder='Search' />
                                            </div>
                                        </div>
                                        <div className='col-md-1'>
                                            <div className='form-group'>
                                                <button className='btn btn-warning text-light'>
                                                    <i className="fa fa-search" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <ul className="accordion">
                                            {lottery.map(function(lottery, idx){
                                                return (
                                                    <li key={idx} className="accordion-chevron" style={{ margin: '.7em 0' }}>
                                                        <a className="accordion-toggle" onClick={() => { pAccordionToggle(lottery.id+'-2'); }} href="javascript:void(0);">
                                                            <i className="fa fa-chevron-down"></i>{lottery.day_name}
                                                        </a>
                                                        <ul className="accordion-inner" id={'p-accordion-inners-'+lottery.id+'-2'}>
                                                            {lottery.games.map(function(games, idxx){
                                                                return (
                                                                    <li key={idxx} className="accordion-chevron" style={{ margin: '.7em 0' }}>
                                                                        <a className="accordion-toggle" onClick={() => { cAccordionToggle(lottery.id+'-'+games.id+'-2'); }} href="javascript:void(0);">
                                                                            <i className="fa fa-chevron-down"></i>{games.game_name}
                                                                        </a>
                                                                        <div className="accordion-inner" id={'c-accordion-inners-'+lottery.id+'-'+games.id+'-2'}>
                                                                            
                                                                            <div>
                                                                                <table className="table table-bordered table-sm">
                                                                                    <thead>
                                                                                        <tr>
                                                                                            <th className="text-center">Sr.No.</th>
                                                                                            <th className="text-center">Number</th>
                                                                                            <th className="text-center">Big Bet</th>
                                                                                            <th className="text-center">Small Bet</th>
                                                                                            <th className="text-center">Bet Type</th>
                                                                                            <th className="text-center">Amount</th>
                                                                                            <th className="text-center">Commission</th>
                                                                                            <th className="text-center">Net Amount</th>
                                                                                            <th className="text-center">Action</th>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        {games.lotteries.map(function(lotteries, idxxx){
                                                                                        return (
                                                                                            <tr key={idxxx}>
                                                                                                <input type="hidden" name="manageall_id[]" />
                                                                                                <td className="text-center">{lotteries.srno}</td>
                                                                                                <td className="text-center">
                                                                                                    {lotteries.number_pattern}
                                                                                                </td>
                                                                                                <td className="text-center">
                                                                                                    {lotteries.big_bet_amount}
                                                                                                </td>
                                                                                                <td className="text-center">
                                                                                                    {lotteries.small_bet_amount}
                                                                                                </td>
                                                                                                <td className="text-center">
                                                                                                    {lotteries.bet_type == '0'? 'Box' : null }
                                                                                                    {lotteries.bet_type == '1'? 'iBox' : null }
                                                                                                    {lotteries.bet_type == '2'? null : null }
                                                                                                </td>
                                                                                                <td className="text-center">
                                                                                                    {lotteries.total_amount}
                                                                                                </td> 
                                                                                                <td className="text-center">
                                                                                                    {lotteries.commission}
                                                                                                </td>
                                                                                                <td className="text-center">
                                                                                                    {lotteries.net_amount}
                                                                                                </td>
                                                                                                <td className="text-center">
                                                                                                    <span className="btn btn-danger btn-sm" style={{ padding: '0px 10px' }}><i className="fa fa-trash" aria-hidden="true"></i></span>
                                                                                                </td>
                                                                                            </tr>
                                                                                            )
                                                                                        })}
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </li>
                                                )
                                            })}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

    );
}

export default History;