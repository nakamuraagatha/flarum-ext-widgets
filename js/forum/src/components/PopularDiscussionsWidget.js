import Widget from 'davis/widgets/components/Widget';
import ItemList from 'flarum/utils/ItemList';
import listItems from 'flarum/helpers/listItems';
import LinkButton from 'flarum/components/LinkButton';
import LoadingIndicator from 'flarum/components/LoadingIndicator';

/**
 * The `PopularDiscussionsWidget` component extends the `Widget`
 * and displays the current popular discussions.
 */
export default class PopularDiscussionsWidget extends Widget {
  init() {
    super.init();

    this.data = null;
    this.getData();
  }

  content() {
    return (
      <div className="Widget--list Widget-PopularDiscussions--list">
        {this.data ? <ul>{listItems(this.data.toArray())}</ul> : LoadingIndicator.component({ size: 'tiny' }) }
      </div>
    );
  }

  getData() {
    app.store.find('discussions', {
      page: { limit: 5 },
      sort: '-commentsCount',
    }).then((results) => {
      const data = new ItemList();

      results.forEach((result, index) => {
        data.add(`popular-discussions-${index}`,
          LinkButton.component({
            icon: 'comments',
            children: result.data.attributes.title,
            href: app.route.discussion(result),
          })
        );
      });

      this.data = data;
      m.redraw();
    });
  }

  title() {
    return app.translator.trans('davis-widgets.forum.widgets.popular-discussions.title');
  }

  className() {
    return 'Widget-PopularDiscussions';
  }
}
