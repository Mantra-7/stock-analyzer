import React from 'react'
import Table from 'react-bootstrap/Table';

export const Result = (props) => {

	var ranks = []
	for(let i=0;i<props.m;i++)
	{
		let x = []
		for(let j=0;j<props.stocks.length;j++)
		{
			x.push({})
		}
		ranks.push(x)
	}

	for(let i=0;i<props.stocks.length;i++)
	{
		for(let j=0;j<props.m;j++)
		{
			ranks[j][i].first = props.stocks[i].vals[j]
			ranks[j][i].second = i
		}
	}
	
	for(let i=0;i<props.m;i++)
	{
		ranks[i].sort(function(a, b){return b.first - a.first});
	}

	var marks = []
	
	for(let i=0;i<props.stocks.length;i++)
	{
		let rank = []
		for(let i=0;i<props.m;i++) rank.push(0)
		marks.push({
			name: 'lol',
			rank: rank,
			total: 0
		})
	}

	for(let i=0;i<props.stocks.length;i++)
	{
		marks[i].name = props.stocks[i].name
		for(let j=0;j<props.m;j++)
		{
			marks[ranks[j][i].second].rank[j] = i+1
			marks[ranks[j][i].second].total += i+1
		}
	}

	marks.sort(function(a, b){
		if(a.total !== b.total) return a.total-b.total
	});

	const getThead = (i) =>{
		return 'value '+i;
	}

	var st ={
		'text-align': 'center',
		'font-weight': 'normal'
	}

	var st1 ={
		'text-align': 'center',
	}

	var tabl_head = []
	for(let i=0;i<props.m;i++)
	{
		tabl_head.push(
			<th scope="col" style={st1}>{getThead(i+1)}</th>)
	}

	const giveComp = (obj, i) =>{
		var tx = []
		tx.push(<th scope="row" style={st}>{i}</th>)
		tx.push(<th scope="row" style={st}>{obj.name}</th>)

		for(let j=0;j<props.m;j++)
		{
			tx.push(<th scope="col" style={st}>{obj.rank[j]}</th>)
		}
		tx.push(<th scope="col" style={st}>{obj.total}</th>)
		
		return tx
	}

	var tabl = []
	for(let i=0;i<props.stocks.length;i++)
	{
		tabl.push(<tr>{giveComp(marks[i],i+1)}</tr>)
	}
	console.log(tabl)

  return (
	  <div className="container my-3">
		<Table striped bordered hover size="sm">
		<thead>
			<tr>
				<th scope="col" style={st1}>#</th>
				<th scope="col" style={st1}>Name</th>
				{tabl_head}
				<th scope="col" style={st1}>Total</th>
			</tr>
		</thead>
		<tbody>
			{tabl}
		</tbody>
		</Table>
	</div>

  )
}
