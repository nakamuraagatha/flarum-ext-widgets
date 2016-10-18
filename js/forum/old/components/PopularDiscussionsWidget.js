import Widget from 'davis/widgets/components/Widget';

/**
 * The `PopularDiscussionsWidget` component extends the `Widget`
 * and displays the current popular discussions.
 */
export default class PopularDiscussionsWidget extends Widget {
  static title() {
    return app.translator.trans('davis-widgets.forum.widgets.popular-discussions.title');
  }

  static className() {
    return 'Widget-PopularDiscussions';
  }

  content() {
    return 'Work in progress';
  }
}