import React, { useState } from 'react';
import {Stock} from './Stock'

export const Stlist = (props) => {

	const [inp, setInp] = useState(0)

	const updInp = () =>{
		setInp(1-inp)
	}

	const giveid = (i) =>{
		return 'inp'+i
	}

	var comp = []
	comp.push(<div className='col'>
		<div className="row">
		<div className='col'>
		<lable >Name: </lable>
		</div>
		<div className='col'>
		<input type='text' id='inpname'/>
		</div>
		</div>
	</div>)

	for(let i=0;i<props.m;i++)
	{
		comp.push(<div className="col">
		<div className="row">
		<div className='col'>
			<lable >Value {i+1}: </lable>
			</div>
			<div className='col'>
		<input type='number' step='0.01' id={giveid(i)} />
		</div>
		</div>

	</div>)
	}

	comp.push(<div className='col'>
		<button className="btn btn-sm btn-success" onClick={() => {props.addst()
		updInp()}}>Add</button>
	</div>)


  return (
	<div className='container my-3'>


		{props.stocks.map((stock)=>{
                return <Stock stock={stock} key={stock.name} delst={props.delst} m={props.m}/>
            })}

		{(!inp ? 
			<button className="btn btn-sm btn-primary" onClick={updInp}>Add Stock</button>
			:
			<div className="row">
				{comp}
			</div>
		)}
	</div>
  )
}
