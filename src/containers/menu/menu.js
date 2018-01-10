import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';

export const Menu = () => {

	return (
		
		 	 <aside>
	            <Nav bsStyle="pills" stacked activeKey={1}>
					<NavItem eventKey={1} href="/home">
						NavItem 1 content
					</NavItem>
					<NavItem eventKey={2} title="Item">
						NavItem 2 content
					</NavItem>
					<NavItem eventKey={3} disabled>
						NavItem 3 content
					</NavItem>
				</Nav>
          	</aside>
		
		)
}