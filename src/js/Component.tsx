import * as React from 'react';
import * as CSSModules from 'react-css-modules';
import * as styles from '../css/style.css';

@CSSModules(styles)
export default class Component extends React.Component {
  render(): JSX.Element {
    return (
      <div>
        <h1 styleName="title">Hello World</h1>
      </div>
    );
  }
}
