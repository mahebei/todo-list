import React, { Component } from "react"
import "./App.css"
import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer"

export default class App extends Component {
	state = {
		items: [
			{ id: "1", content: "Play", isDone: false },
			{ id: "2", content: "Read", isDone: true },
		],
	}

	addItem = (content) => {
		const { items } = this.state
		const newItems = {
			items: [
				{
					id: Date.now(),
					content,
					isDone: false,
				},
				...items,
			],
		}
		this.setState(newItems)
	}

	updateItem = (id) => {
		const { items } = this.state
		const newItems = items.map((item) => {
			if (item.id === id) return { ...item, isDone: !item.isDone }
			else return { ...item }
		})
		this.setState({ items: newItems })
	}

	updateAll = (flag) => {
		const { items } = this.state
		const newItems = items.map((item) => {
			return { ...item, isDone: flag }
		})
		this.setState({ items: newItems })
	}

	delItem = (id) => {
		const { items } = this.state
		const newItems = items.filter((item) => {
			return item.id !== id
		})
		this.setState({ items: newItems })
	}

	clearDone = () => {
		const { items } = this.state
		const newItems = items.filter((item) => {
			return !item.isDone
		})
		this.setState({ items: newItems })
	}

	render() {
		return (
			<div>
				<div className="todo-container">
					<div className="todo-wrap">
						<Header addItem={this.addItem} />
						<List
							items={this.state.items}
							updateItem={this.updateItem}
							delItem={this.delItem}
						/>
						<Footer
							items={this.state.items}
							updateAll={this.updateAll}
							clearDone={this.clearDone}
						/>
					</div>
				</div>
			</div>
		)
	}
}
