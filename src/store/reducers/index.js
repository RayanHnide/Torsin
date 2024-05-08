import { combineReducers } from 'redux';
import ProfileReducers from "./profile";
import DashboardReducers from './dashboard';
import ChatReducers from './chat';
import ProposalReducers from './proposal';
import NotificationReducers from './notifications';
import ContractReducers from './contracts';
import PaymentMethodReducers from './paymentMethods';
import FeedsReducers from './feeds';
import ReportReducers from './report';
import SupportReducers from './support';
import RatingReducers from './ratings';
import SidebarReducer from './sidebartoggle';

const appReducer = combineReducers({
    ProfileReducers,
    DashboardReducers,
    ChatReducers,
    ProposalReducers,
    NotificationReducers,
    ContractReducers,
    PaymentMethodReducers,
    FeedsReducers,
    ReportReducers,
    SupportReducers,
    RatingReducers,
    SidebarReducer
});

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT') {
        state = {};
    }
    return appReducer(state, action);
};

export default rootReducer;