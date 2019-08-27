import { combineReducers } from "redux";

//REDUCERS
import DashboardReducer from "../dashboard/dashboardReducer";

const rootReducers = combineReducers({
  dashboard: DashboardReducer
});

export default rootReducers;
