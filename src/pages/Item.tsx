import { useState } from "react";
import { item } from "../types/item";
import { INIT_ITEM_LIST } from "../constants/data";
import { useItems } from "../hooks/useItems";

export const Item: React.FC = () => {
	const { items } = useItems();
  console.log(items)
	return (
		<ul>
			{items.map((item) => (
				<li key={item.id}>
					<div>{item.name}</div>
					<div>{item.price}</div>
				</li>
			))}
		</ul>
	);
};
