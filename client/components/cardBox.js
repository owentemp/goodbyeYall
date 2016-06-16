'use strict'

import React from 'react';
import ReactDOM from 'react-dom'
import CardTitle from '../components/cardTitle'
import PhotoRoll from '../components/photoRoll'


class CardBox extends React.Component {
	render() {
		return(
			<div className='container'>

					<CardTitle className='card-title col-md-12' />


					<PhotoRoll className='row' />


			</div>

		)
	}
	//Currently hard-coded, will accept a package_group arguement on click event
	_getDestinations(){

		const destinationsList = [
			{id:1, title: 'Colosseum', airport_code: 'ROME-sky', country:'Italy', 
			city_name: 'Rome', intro: "a", package_group: 'Seven Wonders of the World',
			main_image_url: '/assets/images/colusseum.png', next_image_url: 
			'/assets/images/colusseum.jpeg'
	   },
	   {id:2, title: 'Colosseum', airport_code: 'ROME-sky', country:'Italy', 
			city_name: 'Rome', intro: "a", package_group: 'Seven Wonders of the World',
			main_image_url: '/assets/images/colusseum.png', next_image_url: 
			'/assets/images/colusseum.jpeg'
	   }]

		return destinationsList.map((obj,index) => {
			if(index === 0){
				obj.currentlyActivePhoto = true
			}
			else{
				obj.currentlyActivePhoto = false            
			}
		})
	}



}

ReactDOM.render(
	<CardBox />, document.querySelector('.card-box')
);

export default CardBox;
