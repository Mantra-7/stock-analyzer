import React from 'react'

export const Stock = (props) => {

	var cols = []
	for(let i=0;i<props.m;i++)
	{
		cols.push(<div className="col">
		{props.stock.vals[i]}
	</div>)
	}

  return (
	<div className='row my-3'>
		<div className='col'>
			{props.stock.name}
		</div>
		{cols}


		<div className="col">
		<button className="btn btn-sm btn-danger" onClick={()=>{props.delst(props.stock)}}>Delete</button>

		</div>
	</div>
  )
}
