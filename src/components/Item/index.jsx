import React, { Component } from "react"
import "./index.css"

export default class Item extends Component {
	state = { isMouseIn: false }

	handleMouse = (flag) => {
		return () => {
			this.setState({ isMouseIn: flag })
		}
	}

	handleChange = (id) => {
		return () => {
			this.props.updateItem(id)
		}
	}
	handleDel = (id) => {
		return () => {
			this.props.delItem(id)
		}
	}
	render() {
		const { id, content, isDone } = this.props
		const { isMouseIn } = this.state
		return (
			<li
				onMouseEnter={this.handleMouse(true)}
				onMouseLeave={this.handleMouse(false)}
				style={{ backgroundColor: isMouseIn ? "lightgray" : "white" }}>
				<label>
					<input
						type="checkbox"
						checked={isDone}
						onChange={this.handleChange(id)}
					/>
					<span> {content}</span>
				</label>
				<button
					className="btn btn-danger"
					style={{ display: isMouseIn ? "block" : "none" }}
					onClick={this.handleDel(id)}>
					Delete
				</button>
			</li>
		)
	}
}
