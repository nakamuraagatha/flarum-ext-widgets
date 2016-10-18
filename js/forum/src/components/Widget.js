import Component from 'flarum/Component';

/**
 * The `Widget` component
 *
 * @abstract
 */
export default class Widget extends Component {
  /**
   * Get the content of the widget.
   *
   * @return {VirtualElement}
   * @abstract
   */
  content() {
  }

  view() {
    return (
      <div className={`Widgets-nav sideNav ${this.className()}`}>
        <h3 className="widget-title">{this.title()}</h3>
        {this.content()}
      </div>
    );
  }

  /**
   * Get the title of the widget.
   *
   * @return {String}
   * @abstract
   */
  title() {
  }

  /**
   * Get additional classnames of the widget.
   *
   * @return {String}
   * @abstract
   */
  className() {
  }
}
