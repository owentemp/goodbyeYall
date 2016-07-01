'use strict'

import React from 'react';
import CardTitle from '../components/cardTitle';
import PackageDestinations from './packageDestinations';
import axios from 'axios';
import {createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import promise from 'redux-promise';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {FETCH_PACKAGE, fetchPackage} from '../actions/fetchPackage'
import {IS_FETCHING, changeFetching} from '../actions/isFetching';
import Loading from 'react-loading';



const createStoreWithMiddleware = applyMiddleware(
	promise
	)(createStore);

class CardBox extends React.Component {
	componentWillMount(){
		this.setState({'cachedAirport': localStorage.getItem('originairport')});
		// console.log('line 26 this.props', this.props);
		this.props.changeFetching(true);
		this.props.fetchPackage(`${this.props.params.package_name}`)
	}
	componentDidUpdate(){
		// console.log('lin 26 containers/cardBox.js this.state.cachedAirport',this.state.cachedAirport);
		// console.log('lin 33 containers/cardBox.js this.props',this.props);
		if (this.props.params.package_name !== this.props.package_name){
			this.props.changeFetching(true);
			this.props.fetchPackage(`${this.props.params.package_name}`)
		}
		if (this.state.cachedAirport !== this.props.originairport){
			this.props.changeFetching(true);
			localStorage.setItem('originairport',this.props.originairport)
			this.setState({'cachedAirport': this.props.originairport});
			this.props.fetchPackage(`${this.props.params.package_name}`)
		}
	}
	render() {
		if (this.props.fetching){
			return (
				<div className='seven-view'> 
					<div className="card-title"> 
						✈  ✈  ✈ fetching  ✈  ✈  ✈ 
						<div id="loader"><Loading type='spokes' color='#333' /></div>
					</div>
				</div>)
		}
		else{
			return(			
			<div className='seven-view'>
				<CardTitle title={this.props.package_name} /> 
				<PackageDestinations  active={this.props.active} passive={this.props.passive} package_name={this.props.params.package_name} className='row' />
			</div>
		)
		}
	}
}

function mapStateToProps ( state ){
	return {
		passive: state.destinations.passive,
		active: state.destinations.active,
		package_name:state.destinations.package_name,
		originairport:state.airport.originairport,
		fetching: state.destinations.fetching
	}
}

function mapDispatchToProps( dispatch ){
	return bindActionCreators({changeFetching:changeFetching, fetchPackage: fetchPackage}, dispatch)
}


 
export default connect(mapStateToProps, mapDispatchToProps)(CardBox);