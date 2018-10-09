import React from 'react';
import ListItem from './../../molecules/ListItem/ListItem.js';

const List = ({tasks, removeTask}) => (
	<div>
		{
			tasks && tasks.map((item, index) => <ListItem key={item.id} id={item.id} removeTask={removeTask} textValue={item.text} index={index} completed={item.done} />)
		}
	</div>
);

export default List;