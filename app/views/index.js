// @flow
import * as React from 'react';
import RsideNav from '@/components/rsideNav';
import TitleSlogin from '@/components/titleslogin';
import Animation from '@/components/animation';
import { Switch, Route } from 'react-router-dom';


class ViewsIndex extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
    };
  }

  render () {
    return (
      <div>
        <TitleSlogin />
        <RsideNav />
        <Switch>
          <Route to="/animation" exact component={Animation} />
        </Switch>
      </div>
    );
  }
}

export default ViewsIndex;
