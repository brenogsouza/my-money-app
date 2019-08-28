import { combineReducers } from "redux";

//REDUCERS
import DashboardReducer from "../dashboard/dashboardReducer";
import tabReducer from "../common/tab/tabReducer";

const rootReducers = combineReducers({
  dashboard: DashboardReducer,
  tab: tabReducer
});

export default rootReducers;
