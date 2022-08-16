import React from 'react';

function Lotterydetails(props) {
    let gridData = props.gridData;
    const removeNumber = async (id) => {
        let data = {}
         data.id= id
        const JSONdata = JSON.stringify(data)
        const endpoint = process.env.siteUrl + '/api/lottery-delete'
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
    }
    return (
        <div className="card">
            {gridData.map(function(list, idx){
                return (
                    <div key={idx}>
                        <div className="card-header text-light" style={{background: 'linear-gradient(223.14deg, #F44A33 -17.3%, #E8AE3D 101.56%)'}}>
                            <b>{list.day_name}</b>
                        </div>
                        <div className="card-body">
                            <ul>
                                {list.games.map(function(game, idxx){
                                    return (
                                        <li key={idxx} className="accordion-chevron">
                                            <a className="accordion-toggle" href="javascript:void(0);">
                                                <i className="fa fa-chevron-down text-success"></i>{game.game_name}
                                            </a>
                                            <div>
                                                <table className="table table-bordered table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th className="text-center">Sr.No.</th>
                                                            <th className="text-center">Number</th>
                                                            {/* <th className="text-center">Big Bet</th>
                                                            <th className="text-center">Small Bet</th>
                                                            <th className="text-center">Bet Type</th> */}
                                                            <th className="text-center">Amount</th>
                                                            <th className="text-center">Commission</th>
                                                            {/* <th className="text-center">Net Amount</th> */}
                                                            <th className="text-center">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {game.lotteries.map(function(listlottery,index){
                                                        return (
                                                            <tr key={index}>
                                                                <input type="hidden" name="manageall_id[]" />
                                                                <td className="text-center">{index} .</td>
                                                                <td className="text-center">
                                                                    {listlottery.lottery_number}
                                                                </td>
                                                                {/* <td className="text-center">
                                                                    {listlottery.big_bet_amount}
                                                                </td>
                                                                <td className="text-center">
                                                                    {listlottery.small_bet_amount}
                                                                </td>
                                                                <td className="text-center">
                                                                    {listlottery.bet_type == '0'? 'Box' : null }
                                                                    {listlottery.bet_type == '1'? 'iBox' : null }
                                                                    {listlottery.bet_type == '2'? null : null }
                                                                </td> */}
                                                                <td className="text-center">
                                                                    {listlottery.amount}
                                                                </td> 
                                                                <td className="text-center">
                                                                    {listlottery.commission}
                                                                </td>
                                                                {/* <td className="text-center">
                                                                    {listlottery.net_amount}
                                                                </td> */}
                                                                <td className="text-center">
                                                                    <span className="btn btn-danger btn-sm" onClick={()=>removeNumber(listlottery.id)} style={{ padding: '0px 10px' }}><i className="fa fa-trash" aria-hidden="true"></i></span>
                                                                </td>
                                                            </tr>
                                                            )
                                                        })}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Lotterydetails;