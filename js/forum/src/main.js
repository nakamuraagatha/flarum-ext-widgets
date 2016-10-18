import app from 'flarum/app';

import addIndexPageWidgets from 'davis/widgets/addIndexPageWidgets';

app.initializers.add('davis-widgets', () => {
  addIndexPageWidgets();
});
