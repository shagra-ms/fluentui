import * as React from 'react';

import { Menu, MenuItem, MenuList, MenuPopover, MenuTrigger } from '@fluentui/react-menu';
import { CalendarMonth24Regular, Filter24Regular } from '@fluentui/react-icons';
import { SplitButton, MenuButtonProps } from '../../../index'; // codesandbox-dependency: @fluentui/react-button ^9.0.0-beta

export const Icon = () => (
  <>
    <Menu positioning="below-end">
      <MenuTrigger>
        {(triggerProps: MenuButtonProps) => (
          <SplitButton
            menuButton={triggerProps}
            primaryActionButton={'This is a split button'}
            icon={<CalendarMonth24Regular />}
          />
        )}
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          <MenuItem>Item a</MenuItem>
          <MenuItem>Item b</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>

    <Menu positioning="below-end">
      <MenuTrigger>
        {(triggerProps: MenuButtonProps) => (
          <SplitButton
            menuButton={triggerProps}
            primaryActionButton={'This is a split button'}
            icon={<CalendarMonth24Regular />}
            menuIcon={<Filter24Regular />}
          />
        )}
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          <MenuItem>Item a</MenuItem>
          <MenuItem>Item b</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>

    <Menu positioning="below-end">
      <MenuTrigger>
        {(triggerProps: MenuButtonProps) => (
          <SplitButton
            menuButton={triggerProps}
            primaryActionButton={'This is a split button'}
            icon={<CalendarMonth24Regular />}
          />
        )}
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          <MenuItem>Item a</MenuItem>
          <MenuItem>Item b</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  </>
);
Icon.parameters = {
  docs: {
    description: {
      story:
        'SplitButton has an `icon` slot that renders before the text, and `menuIcon` slot that renders after the text.',
    },
  },
};
