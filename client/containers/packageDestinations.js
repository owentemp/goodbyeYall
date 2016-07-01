'use strict'
import axios from 'axios';
import React from 'react';
import PassiveDestination from './passiveDestination';
import ActiveDestination from '../components/activeDestination';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {FETCH_PACKAGE, fetchPackage} from '../actions/fetchPackage';

class PackageDestinations extends React.Component {
	render() {
		return(
			<div className='package-view'>
				<div className='photo-roll' >
				{
					this.props.passive.map( (dest, i) => {
						return <PassiveDestination 
							key={i}
							_id = {dest.id}
							main_image_url = {dest.main_image_url}
							price = {dest.bookDetails.price}
						/>
					})
				}
				</div>

					{
						this.props.active.map( (dest, i) => {
							return <ActiveDestination 
								key={i}
								_id = {dest.id}
								title={dest.title} 
								airport_code={dest.airport_code} 
								country={dest.country} 
								city_name={dest.city_name} 
								intro={dest.intro} 
								package_group={dest.package_group} 
								next_image_url={dest.next_image_url}
								bookingDetails={dest.bookDetails}
								temperatures={dest.temperature}
						    lang ={dest.countryData.languages} 
                plugs = {dest.countryData.electricity.plugs}
                callingCode={dest.countryData.telephone.callingcode}
               	vaccinations={dest.countryData.vaccinations}
                currencyName={dest.countryData.currency.name}
                currencyRate={dest.countryData.currency.rate}
               	water={dest.countryData.water}
							/>
						})
					}

			</div>
		)
	}
}


function mapDispatchToProps( dispatch ){
	return bindActionCreators({fetchPackage: fetchPackage}, dispatch)
}

export default connect(null, mapDispatchToProps)(PackageDestinations);
