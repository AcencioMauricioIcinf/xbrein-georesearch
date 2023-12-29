import { useState, useEffect } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { categories } from '../assets/Categories';

export const SideMenu = props => {
    const [items, setItems] = useState([])
    useEffect(() => {
        setItems(props.items);
    },[props.items]);
    return (
        <div style={{maxHeight: '100vh', overflowY: 'scroll'}}>
        <Sidebar>
            <Menu>
                <SubMenu label="Categorías">
                    {categories.map((cat, i) => (
                        <MenuItem key={i}>{cat || '(Todo)'}</MenuItem>
                    ))}
                </SubMenu>
            </Menu><Menu>
                {items?.map(i => (
                    <MenuItem key={i.id}>{i.name}</MenuItem>
                ))}
            </Menu>
        </Sidebar>
        </div>
    );
};