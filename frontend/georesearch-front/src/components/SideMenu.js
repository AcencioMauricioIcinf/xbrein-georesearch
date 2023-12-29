import { useState, useEffect } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { categories } from '../assets/Categories';

export const SideMenu = props => {
    const [items, setItems] = useState([])
    useEffect(() => {
        setItems(props.items);
    },[props.items]);

    const changeCategory = e => {
        props.setCategory(e.target.value);
    };

    return (
        <div style={{maxHeight: '100vh', overflowY: 'scroll'}}>
        <Sidebar>
            <Menu>
                <select className="form-select" aria-label="Default select example" onChange={changeCategory}>
                    {categories.map((cat, i) => (
                        <option key={i} value={cat}>{cat || '(Todo)'}</option>
                    ))}
                </select>
            </Menu><Menu>
                {items?.map(i => (
                    <MenuItem key={i.id}>{i.name}</MenuItem>
                ))}
            </Menu>
        </Sidebar>
        </div>
    );
};