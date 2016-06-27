'use strict'

import React from 'react';
import ReactDOM from 'react-dom'
import NavBar from '../components/navBar'
import OuterCardBox from '../components/outerCardBox'
import MissionStatement from '../components/missionStatement'
import MeetTheDevs from '../components/meetTheDevs'
import { Route, IndexRoute } from 'react-router'
// import routes from '../routes'
import CardBox from '../containers/cardBox'
import UserForm from '../components/userForm'
import login from '../components/login'

class Test extends React.Component {
	render(){
		return (<div>test</div>)
	}

}

export default(
				<Route path="/" component={NavBar}>
					<IndexRoute component={OuterCardBox} / >
					<Route path="/Package/:package_name" component={CardBox} />
					<Route path="/HowItWorks" component={MissionStatement} />
					<Route path="/MeetTheDevs" component={MeetTheDevs} />
					<Route path="/Preferences" component={UserForm} />
					<Route path="/login" component={login} />
				</Route>
)