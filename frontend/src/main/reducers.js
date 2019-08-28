import { combineReducers } from "redux";

//REDUCERS
import DashboardReducer from "../dashboard/dashboardReducer";
import tabReducer from "../common/tab/tabReducer";
import BillingCycleReducer from "../billingCycle/billingCycleReducer";

const rootReducers = combineReducers({
  dashboard: DashboardReducer,
  tab: tabReducer,
  billingCycle: BillingCycleReducer
});

export default rootReducers;
