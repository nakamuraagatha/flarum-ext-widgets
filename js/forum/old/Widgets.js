import Component from 'flarum/Component';
import PopularDiscussionsWidget from 'davis/widgets/components/PopularDiscussionsWidget';

export default class Widgets extends Component {
  view() {
        return (
          <div className="Widgets-container">
            <ul>{listItems(this.items().toArray())}</ul>
          </div>
    )
  }

  /**
   * Build an item list of all the widgets.
   *
   * @return {ItemList}
   */
  items() {
    const items = new ItemList();

    items.add('popular-discussions',  PopularDiscussionsWidget.component());

    return items;
  }

}