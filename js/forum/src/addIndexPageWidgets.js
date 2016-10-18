import IndexPage from 'flarum/components/IndexPage';
import listItems from 'flarum/helpers/listItems';
import Widgets from 'davis/widgets/Widgets';

export default function () {
  IndexPage.prototype.view = function () {
    return (
      <div className="IndexPage">
        {this.hero()}
        <div className="container">
          <div className="sideNav-container">
            <nav className="IndexPage-nav sideNav">
              <ul>{listItems(this.sidebarItems().toArray())}</ul>
            </nav>
            {Widgets.component()}
          </div>
          <div className="IndexPage-results sideNavOffset">
            <div className="IndexPage-toolbar">
              <ul className="IndexPage-toolbar-view">
                {listItems(this.viewItems().toArray())}
              </ul>
              <ul className="IndexPage-toolbar-action">
                {listItems(this.actionItems().toArray())}
              </ul>
            </div>
            {app.cache.discussionList.render()}
          </div>
        </div>
      </div>
    );
  };
};
