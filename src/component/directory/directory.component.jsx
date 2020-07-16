import React from 'react';
import './directory.style.scss';
import MenuItem from '../menu-item/menu-item.component';
class Directory extends React.Component {
    constructor(){
        super(); //to pull every thing form react
        this.state = {
            sections: [{
                title : 'spoons',
                imageurl : 'https://weedmaps.com/learn/wp-content/uploads/2019/08/181016_Learn_Pipe_29.jpg',
                id : 1
            },

            {
                title : 'bongs',
                imageurl : 'https://weedmaps.com/learn/wp-content/uploads/2019/08/180918_Bong_05.jpg',
                id : 2
            },

            {
                title : 'bubblers',
                imageurl : 'https://weedmaps.com/learn/wp-content/uploads/2019/08/181008_OutdoorSesh140.jpg',
                id : 3
            },

            {
                title : 'chillums',
                imageurl : 'https://weedmaps.com/learn/wp-content/uploads/2019/08/shutterstock_1417424039-1.jpg',
                size : 'large',
                id : 4
            },

            {
                title : 'dab rigs',
                imageurl : 'https://weedmaps.com/learn/wp-content/uploads/2019/08/180918_Dab_03.jpg',
                size : 'large',
                id : 5
            },
            
        ]
    }
    }

    render() {
        return(
            <div className="directory-menu">
                {this.state.sections.map(({title, imageurl, id, size}) => (
                    <MenuItem key = {id} title = {title} imageUrl={imageurl} size = {size}/>
                ))}
            </div>
        )
    }
}

export default Directory;