import {Stlist} from './My_components/Stlist'
import {Header} from './My_components/Header'
import {Result} from './My_components/Result'
import React, { useState } from 'react';

import './App.css';

export const App = () =>{

	const [stocks, setStocks] = useState([
		{
			name: 'Example',
			vals: [1.8,-2.35,3,29.41]
		}
	])

	const [m,setM] = useState(4)

	const [res,setRes] = useState(0)

	const updM = () =>{
		setM(parseFloat(document.getElementById('min').value))
	}

	const updRes = () =>{
		setRes(1-res)
	}

	const addst = ()=>{

		var nameinp = document.getElementById('inpname')

		var ns={
			name: nameinp.value,
			vals: []
		}

		for(let i=0;i<m;i++)
		{
			ns.vals.push(document.getElementById('inp'+i).value)
		}

		setStocks([...stocks,ns])
	}

	const delst = (st)=>{
		setStocks(stocks.filter((ns)=>{
		  return ns.name!==st.name
		}))
	  }

  return (
	  <>
	  <Header title='Stock Selection Based On Weighted Average' updM={updM} res={res} updRes={updRes}/>
      {(!res ? 
	  	<Stlist stocks={stocks} addst={addst} delst={delst} m={m}/>
		  :
		<Result stocks={stocks} m={m}/>
	  )}
	  </>
  );
}

export default App