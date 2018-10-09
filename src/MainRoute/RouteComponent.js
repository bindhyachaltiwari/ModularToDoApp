import React from 'react';

const asyncComponent = (importedComponent) => {
  class RouteComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { component: null }
    }
    async componentDidMount() {
      const {default: component} = await importedComponent();
      this.setState({ component });
    }
    render() {
      const Comp = this.state.component;
      return Comp ? <Comp {...this.props} /> : <p>To Do App...</p>
    }
  }
  return RouteComponent;
};

export default asyncComponent;