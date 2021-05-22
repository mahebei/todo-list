import React, { Component } from "react";
import "./index.css";
import Item from "../Item";

export default class List extends Component {
	render() {
		const { items } = this.props;
		return (
			<ul className="todo-main">
				{items.map((item) => {
					return (
						<Item
							key={item.id}
							{...item}
							updateItem={this.props.updateItem}
							delItem={this.props.delItem}
						/>
					)
				})}
			</ul>
		);
	}
}
