// @flow
import { FlowRouter } from "meteor/kadira:flow-router";

const clientAdapter = {
  getCurrentName() {
    return FlowRouter.getRouteName();
  },
  getCurrentPath() {
    FlowRouter.watchPathChange();
    return FlowRouter.current().path;
  },
  getPath({ routeName, routeParams, routeQueryParams }) {
    return FlowRouter.path(routeName, routeParams, routeQueryParams);
  },
};

export default clientAdapter;
