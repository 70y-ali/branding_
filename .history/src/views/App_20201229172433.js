import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../App.css';
import {HomePage, SignupPage} from './HomePage/index.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        {/* ene hesegt navbar bichij bolno */}
          <Switch>
            <Route 
              path='/'
              exact
              component={HomePage}
            />
            <Route 
              path='sign-up'
              exact
              component={SignupPage}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
// import React, { Fragment } from 'react'
// import { Route, Switch } from 'react-router-dom'
// import Cookie from 'utilities/CookieUtility'
// import {
// 	Navbar,
// 	Footer,
// 	CallReceiveModal
// } from 'components/OtherComponents'
// import AgentPage from './AgentPage'
// import AnnouncementPage from './AnnouncementPage'
// import BonusPage from './BonusPage'
// import CallRegisterPage from './CallRegisterPage'
// import LostPage from './LostCallPage'
// import CallTypePage from './CallTypePage'
// import CallTypeTestPage from './CallTypeTestPage'
// import ConsumerPage from './ConsumerPage'
// import {DashboardPage} from './DashboardPage'

// import HomePage from './HomePage'
// import LoginPage from './LoginPage'
// import RolePage from './RolePage'
// import IVRPage from './IVRPage'
// import ChatPage from './ChatPage'
// import ChangePasswordPage from './ChangePasswordPage'
// import {
// 	TicketPage,
// 	TicketOtherEmploymentPage,
// 	TicketReportListPage
// } from './TicketPage'
// import {
// 	OperatorReportPage,
// 	OperatorHistoryPage,
// 	OperatorPage
// } from './OperatorPage'
// import {
// 	CallReportPage
// } from './CallReportPage'
// import { MessagePage,
// 	MessageHistoryPage
// } from './MessagePage'
// import {TestHourPage}  from './TestHourPage'
// import {TestPage} from './TestPage'
// import {NewOrderPage, 
// 	OrderFilterPage, 
// 	NewOrderRegistrationPage, 
// 	OrderRangePage, 
// 	ReportPage} from './OrderPage'
// import NewComponent from './NewComponentsPage'
// import {SocialReportPage} from './SocialReportPage'
// import MergePage from './SocialMergePage'
// import {AdminPage}from './AdminPage'
// import {
// 	OutingPage,
// 	LevelOnePage,
// 	LevelTwoPage
// } from './OutingPage'

// const Routes = () => {
// 	const authorization = Cookie.get('auth')
// 	if (authorization)
// 		return (
// 			<Fragment>
// 				<Navbar />
// 				<CallReceiveModal />
// 				<Switch>
// 					<Route
// 						path='/outing-telesales'
// 						component={OutingPage}
// 						exact
// 					/>
// 					<Route
// 						path='/outing-level-one'
// 						component={LevelOnePage}
// 						exact
// 					/>
// 					<Route
// 						path='/outing-level-two'
// 						component={LevelTwoPage}
// 						exact
// 					/>
// 					<Route
// 						path='/order-report'
// 						component={ReportPage}
// 						exact
// 					/>
// 					<Route
// 						path='/social-report'
// 						component={SocialReportPage}
// 						exact
// 					/>
// 					<Route
// 						path='/admin-panel'
// 						component={AdminPage}
// 						exact
// 					/>
// 					<Route
// 						path='/merge'
// 						component={MergePage}
// 						exact
// 					/>	
// 					<Route
// 						path='/new-order'
// 						component={NewOrderPage}
// 						exact
// 					/>	
// 					<Route
// 						path='/operator-order'
// 						component={OrderFilterPage}
// 						exact
// 					/>	
// 					<Route
// 						path='/order-range'
// 						component={OrderRangePage}
// 						exact
// 					/>	
// 					<Route
// 						path='/order-registration'
// 						component={NewOrderRegistrationPage}
// 						exact
// 					/>	
// 					<Route
// 						path='/operator-work-report'
// 						component={OperatorPage}
// 						exact
// 					/>	
// 					<Route
// 						path='/management-operator-hour'
// 						component={TestPage}
// 						exact
// 					/>	
// 					<Route
// 						path='/test-test'
// 						component={TestHourPage}
// 						exact
// 					/>	
// 					<Route
// 						path='/type-test'
// 						component={CallTypeTestPage}
// 						exact
// 					/>		
// 					<Route
// 						path='/'
// 						component={HomePage}
// 						exact
// 					/>
// 					<Route
// 						path='/send-message'
// 						component={MessagePage}
// 					/>	
// 					<Route
// 						path='/message-history'
// 						component={MessageHistoryPage}
// 					/>	
// 					<Route
// 						path='/lost-call-report'
// 						component={LostPage}
// 					/>	
// 					<Route
// 						path='/dashboard'
// 						component={DashboardPage}
// 						exact
// 					/>
// 					<Route
// 						path='/agent'
// 						component={AgentPage}
// 						exact
// 					/>
// 					<Route
// 						path='/announcement'
// 						component={AnnouncementPage}
// 						exact
// 					/>
// 					<Route
// 						path='/help'
// 						component={BonusPage}
// 						exact
// 					/>
// 					<Route
// 						path='/call-register'
// 						component={CallRegisterPage}
// 						exact
// 					/>
// 					<Route
// 						path='/call-type'
// 						component={CallTypePage}
// 						exact
// 					/>
// 					<Route
// 						path='/consumer'
// 						component={ConsumerPage}
// 						exact
// 					/>
// 					<Route
// 						path='/role'
// 						component={RolePage}
// 						exact
// 					/>
// 					<Route
// 						path='/change-password'
// 						component={ChangePasswordPage}
// 						exact
// 					/>
// 					<Route
// 						path='/ticket'
// 						component={TicketPage}
// 						exact
// 					/>
// 					<Route
// 						path='/ticket-other-employment'
// 						component={TicketOtherEmploymentPage}
// 						exact
// 					/>
// 					<Route
// 						path='/ticket-report-list'
// 						component={TicketReportListPage}
// 						exact
// 					/>
// 					<Route
// 						path='/operator-history'
// 						component={OperatorHistoryPage}
// 						exact
// 					/>
// 					<Route
// 						path='/operator-report'
// 						component={OperatorReportPage}
// 						exact
// 					/>
// 					<Route
// 						path='/ivr'
// 						component={IVRPage}
// 						exact
// 					/>
// 					<Route
// 						path='/call-account-report'
// 						component={CallReportPage}
// 						exact
// 					/>
// 					<Route
// 						path='/chat'
// 						component={ChatPage}
// 						exact
// 					/>
// 					<Route
// 						path='/test-newComponent'
// 						component={NewComponent}
// 						exact
// 					/>
// 				</Switch>
// 				<Footer />
// 			</Fragment>
// 		)
// 	else return <LoginPage />
// }

// export default Routes