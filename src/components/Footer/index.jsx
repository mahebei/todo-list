import React, { Component } from "react"
import "./index.css"

export default class Footer extends Component {
	handleUpdateAll = (event) => {
		this.props.updateAll(event.target.checked)
    }
    
    clearDone = () => {
        this.props.clearDone()
    }

	render() {
		const { items } = this.props
		const total = items.length
		let doneCount = 0
		items.forEach((item) => {
			if (item.isDone) doneCount += 1
		})
		return (
			<div className="todo-footer">
				<label>
					<input
						type="checkbox"
						checked={total === doneCount && total !== 0}
						onChange={this.handleUpdateAll}
					/>
				</label>
				<span>
					<span>Done {doneCount}</span> / All {total}
				</span>
				<button className="btn btn-danger" onClick={this.clearDone}>
					Clear Done todos
				</button>
			</div>
		)
	}
}
