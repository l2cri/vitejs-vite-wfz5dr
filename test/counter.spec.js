import { mount } from '@vue/test-utils';
import Counter from '../src/components/Counter.vue';

test('mount component', async () => {
  expect(Counter).toBeTruthy();

  const wrapper = mount(Counter, {
    props: { count: 9 },
  });

  expect(wrapper.text()).toContain('Count : 9');
  expect(wrapper.html()).toMatchSnapshot();

  await wrapper.get('button').trigger('click');

  expect(wrapper.text()).toContain('Count : 10');

  await wrapper.get('button').trigger('click');

  expect(wrapper.text()).toContain('Count : 11');
  expect(wrapper.text()).toContain('More than 10');
});
