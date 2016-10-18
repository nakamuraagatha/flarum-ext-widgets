'use strict';

System.register('davis/widgets/addIndexPageWidgets', ['flarum/components/IndexPage', 'flarum/helpers/listItems', 'davis/widgets/Widgets'], function (_export, _context) {
  "use strict";

  var IndexPage, listItems, Widgets;

  _export('default', function () {
    IndexPage.prototype.view = function () {
      return m(
        'div',
        { className: 'IndexPage' },
        this.hero(),
        m(
          'div',
          { className: 'container' },
          m(
            'div',
            { className: 'sideNav-container' },
            m(
              'nav',
              { className: 'IndexPage-nav sideNav' },
              m(
                'ul',
                null,
                listItems(this.sidebarItems().toArray())
              )
            ),
            Widgets.component()
          ),
          m(
            'div',
            { className: 'IndexPage-results sideNavOffset' },
            m(
              'div',
              { className: 'IndexPage-toolbar' },
              m(
                'ul',
                { className: 'IndexPage-toolbar-view' },
                listItems(this.viewItems().toArray())
              ),
              m(
                'ul',
                { className: 'IndexPage-toolbar-action' },
                listItems(this.actionItems().toArray())
              )
            ),
            app.cache.discussionList.render()
          )
        )
      );
    };
  });

  return {
    setters: [function (_flarumComponentsIndexPage) {
      IndexPage = _flarumComponentsIndexPage.default;
    }, function (_flarumHelpersListItems) {
      listItems = _flarumHelpersListItems.default;
    }, function (_davisWidgetsWidgets) {
      Widgets = _davisWidgetsWidgets.default;
    }],
    execute: function () {
      ;
    }
  };
});;
'use strict';

System.register('davis/widgets/components/PopularDiscussionsWidget', ['davis/widgets/components/Widget'], function (_export, _context) {
  "use strict";

  var Widget, PopularDiscussionsWidget;
  return {
    setters: [function (_davisWidgetsComponentsWidget) {
      Widget = _davisWidgetsComponentsWidget.default;
    }],
    execute: function () {
      PopularDiscussionsWidget = function (_Widget) {
        babelHelpers.inherits(PopularDiscussionsWidget, _Widget);

        function PopularDiscussionsWidget() {
          babelHelpers.classCallCheck(this, PopularDiscussionsWidget);
          return babelHelpers.possibleConstructorReturn(this, (PopularDiscussionsWidget.__proto__ || Object.getPrototypeOf(PopularDiscussionsWidget)).apply(this, arguments));
        }

        babelHelpers.createClass(PopularDiscussionsWidget, [{
          key: 'content',
          value: function content() {
            return 'Work in progress';
          }
        }, {
          key: 'title',
          value: function title() {
            return app.translator.trans('davis-widgets.forum.widgets.popular-discussions.title');
          }
        }, {
          key: 'className',
          value: function className() {
            return 'Widget-PopularDiscussions';
          }
        }]);
        return PopularDiscussionsWidget;
      }(Widget);

      _export('default', PopularDiscussionsWidget);
    }
  };
});;
"use strict";

System.register("davis/widgets/components/Widget", ["flarum/Component"], function (_export, _context) {
  "use strict";

  var Component, Widget;
  return {
    setters: [function (_flarumComponent) {
      Component = _flarumComponent.default;
    }],
    execute: function () {
      Widget = function (_Component) {
        babelHelpers.inherits(Widget, _Component);

        function Widget() {
          babelHelpers.classCallCheck(this, Widget);
          return babelHelpers.possibleConstructorReturn(this, (Widget.__proto__ || Object.getPrototypeOf(Widget)).apply(this, arguments));
        }

        babelHelpers.createClass(Widget, [{
          key: "content",
          value: function content() {}
        }, {
          key: "view",
          value: function view() {
            return m(
              "div",
              { className: "Widgets-nav sideNav " + this.className() },
              m(
                "h3",
                { className: "widget-title" },
                this.title()
              ),
              this.content()
            );
          }
        }, {
          key: "title",
          value: function title() {}
        }, {
          key: "className",
          value: function className() {}
        }]);
        return Widget;
      }(Component);

      _export("default", Widget);
    }
  };
});;
'use strict';

System.register('davis/widgets/main', ['flarum/app', 'davis/widgets/addIndexPageWidgets'], function (_export, _context) {
  "use strict";

  var app, addIndexPageWidgets;
  return {
    setters: [function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_davisWidgetsAddIndexPageWidgets) {
      addIndexPageWidgets = _davisWidgetsAddIndexPageWidgets.default;
    }],
    execute: function () {

      app.initializers.add('davis-widgets', function () {
        addIndexPageWidgets();
      });
    }
  };
});;
'use strict';

System.register('davis/widgets/Widgets', ['flarum/Component', 'flarum/utils/ItemList', 'flarum/helpers/listItems', 'davis/widgets/components/PopularDiscussionsWidget'], function (_export, _context) {
  "use strict";

  var Component, ItemList, listItems, PopularDiscussionsWidget, Widgets;
  return {
    setters: [function (_flarumComponent) {
      Component = _flarumComponent.default;
    }, function (_flarumUtilsItemList) {
      ItemList = _flarumUtilsItemList.default;
    }, function (_flarumHelpersListItems) {
      listItems = _flarumHelpersListItems.default;
    }, function (_davisWidgetsComponentsPopularDiscussionsWidget) {
      PopularDiscussionsWidget = _davisWidgetsComponentsPopularDiscussionsWidget.default;
    }],
    execute: function () {
      Widgets = function (_Component) {
        babelHelpers.inherits(Widgets, _Component);

        function Widgets() {
          babelHelpers.classCallCheck(this, Widgets);
          return babelHelpers.possibleConstructorReturn(this, (Widgets.__proto__ || Object.getPrototypeOf(Widgets)).apply(this, arguments));
        }

        babelHelpers.createClass(Widgets, [{
          key: 'view',
          value: function view() {
            return m(
              'div',
              { className: 'Widgets-container' },
              m(
                'ul',
                null,
                listItems(this.items().toArray())
              )
            );
          }
        }, {
          key: 'items',
          value: function items() {
            var items = new ItemList();

            items.add('popular-discussions', PopularDiscussionsWidget.component());

            return items;
          }
        }]);
        return Widgets;
      }(Component);

      _export('default', Widgets);
    }
  };
});