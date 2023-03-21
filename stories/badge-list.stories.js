import { html } from 'lit';
import '../src/badge-list.js';

export default {
  title: 'BadgeList',
  component: 'badge-list',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <badge-list
      style="--badge-list-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </badge-list>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
