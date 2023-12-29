import { useState, useEffect } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';

export const SideMenu = props => {
    const [items, setItems] = useState([])
    useEffect(() => {
        setItems(props.items);
    },[props.items]);
    return (
        <div style={{maxHeight: '100vh', overflowY: 'scroll'}}>
        <Sidebar>
            <Menu>
                {items?.map(i => (
                    <MenuItem key={i.id}>{i.name}</MenuItem>
                ))}
            </Menu>
        </Sidebar>
        </div>
    );
};