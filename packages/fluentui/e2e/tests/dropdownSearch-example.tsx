import { Dropdown, DropdownSearchInput } from '@fluentui/react-northstar';
import * as React from 'react';

export const selectors = {
  input: `.${DropdownSearchInput.slotClassNames.input}`,
};

const DropdownSearchExample = () => <Dropdown items={['Bar', 'Baz', 'Qux']} search />;

export default DropdownSearchExample;
