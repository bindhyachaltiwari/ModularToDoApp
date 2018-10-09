import React from 'react';
import Item from './../../atoms/Item/Item.js';
import Anchor from './../../atoms/Anchor/Anchor.js';

const ListItem = ({ removeTask, textValue, id, completed }) => (
		<div>
		<div className="list-item">
			<Item itemText={textValue} className='' />
			{
				!completed 
				?
					<Anchor to='' className="toRem" onClick={() => removeTask(id)}>
						<p>
							Remove Task
						</p>
					</Anchor>
				:
				''
			}
			</div>
		</div>
	);

export default ListItem;