import React from 'react';
import Anchor from './../../atoms/Anchor/Anchor.js';

const NavLinks = () => (
			<div>
				<Anchor to='/'>
					All Tasks
				</Anchor>
				<Anchor to='/addNew'>
					Add Task
				</Anchor>
				<Anchor to='/completed'>
					Completed Tasks
				</Anchor>
				<Anchor to='/pending'>
					Pending tasks
				</Anchor>
			</div>
		);

export default NavLinks;