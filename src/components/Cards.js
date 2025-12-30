import React from "react";
import CardItem from "./CardItem";
import './Cards.css'

function Cards(props) {
    return (
        <div>
            <div className='cards'>
                <h1>Check out these epic destinations</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                                src='images/lighthouse.jpg'
                                alt='Lighthouse'
                                text='Explore the rich history of the Canadian Maritimes'
                                label='History'
                                path='/maritimes'
                            />
                            <CardItem
                                src='images/st-johns-newfoundland.jpg'
                                alt='Colorful houses perched on a rocky cliff'
                                text='Explore the eastern-most point of North America at Newfoundland and Labrador'
                                label='Luxury'
                                path='/newfoundland'
                            />
                        </ul>
                        <ul className='cards__items'>
                            <CardItem
                                src='images/polar-bears.jpg'
                                alt='polar bears'
                                text='Go beyond the Arctic Circle to the end of the world.'
                                label='Adventure'
                                path='/arctic'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;