import React, { Component } from "react"
import "./index.css"

export default class Header extends Component {
	handleKeyUp = (event) => {
		if (event.keyCode !== 13 || event.target.value === "") return
		this.props.addItem(event.target.value)
		event.target.value = ""
	}

	render() {
		return (
			<div className="todo-header">
				<input
					type="text"
					placeholder="Enter todo list item, press ENTER to confirm"
					onKeyUp={this.handleKeyUp}
				/>
			</div>
		)
	}
}
