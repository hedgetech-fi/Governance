import React, {Component} from 'react';

import '../layout/components/header.sass';

class Header extends Component {
  render() {
    return(
      <section className="header">
        <h1 className="header__title">
          HedgeTech Governance Proposals
        </h1>
        <p className="header__balance">
          {`HTG Balance: ${this.props.balance}`}
        </p>
      </section>
    );
  }
}

export default Header;