import React from 'react'

export const Header = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>

				<div className="container my-3">
					<lable>Number of values in each stock: </lable>
					<input type="number" id='min' step='1' default='4' placeholder='4'/>
					<button className="btn btn-sm btn-secondary mx-3" onClick={() => {props.updM()}}>Set</button>
				</div>

					{(!props.res ?
				<button className="btn btn-sm btn-secondary mx-3" onClick={() => {props.updRes()}}>
						Results
				</button>
						:
				<button className="btn btn-sm btn-secondary mx-3" onClick={() => {props.updRes()}}>
						Back
				</button>
					)}
            </div>
            </nav>
        </div>
    )
}