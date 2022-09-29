import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Avatar, Typography, Dropdown } from "neetoui";

const { Menu, MenuItem } = Dropdown;

export const renderAvatarWithNameAndRole = (firstName, { lastName, role }) => (
  <div className="flex space-x-2">
    <Avatar size="large" user={{ name: `${firstName} ${lastName}` }} />
    <div className="flex flex-col">
      <Typography style="h4">
        {firstName} {lastName}
      </Typography>
      <Typography style="body3">{role}</Typography>
    </div>
  </div>
);

export const renderActionDropdown = onDelete => (
  <Dropdown buttonStyle="text" icon={MenuHorizontal}>
    <Menu>
      <MenuItem.Button>Edit</MenuItem.Button>
      <MenuItem.Button style="danger" onClick={onDelete}>
        Delete
      </MenuItem.Button>
    </Menu>
  </Dropdown>
);
