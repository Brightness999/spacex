export const selectModal = (state) => {
  return state.modal;
};

export const selectDashboardSetting = (state) => {
  return state.dashboardSettings;
};

export const selectDashboard = (state) => {
  return state.dashboardData;
};

export const selectRockets = (state) => {
  return state.rocketsData;
};

export const selectLaunches = (state) => {
  return state.launchesData;
};

export const selectWeather = (state) => {
  return state.weatherData;
};

export const selectCompany = (state) => {
  return state.companyData;
};

export const selectHistory = (state) => {
  return state.historyData;
};

export const selectRoute = (state) => {
  return state.currentRoute;
};

export const selectStarlink = (state) => {
  return state.starlinkData;
};

export const selectActiveStarlinks = (state) => {
  return state.activeStarlinksData;
};
