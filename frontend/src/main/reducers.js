import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

//REDUCERS
import DashboardReducer from "../dashboard/dashboardReducer";
import tabReducer from "../common/tab/tabReducer";
import BillingCycleReducer from "../billingCycle/billingCycleReducer";

const rootReducers = combineReducers({
  dashboard: DashboardReducer,
  tab: tabReducer,
  billingCycle: BillingCycleReducer,
  form: formReducer
});

export default rootReducers;
