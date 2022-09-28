import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Table as NeetoUITable, Avatar, Typography, Dropdown } from "neetoui";

import { monthDateFormatter } from "utils/date";

const Table = ({ contacts = [], onDelete }) => {
  const renderAvatarWithNameAndRole = (firstName, { lastName, role }) => (
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
  const renderActionDropdown = () => (
    <Dropdown buttonStyle="text" icon={MenuHorizontal}>
      <li>Edit</li>
      <li onClick={onDelete}>Delete</li>
    </Dropdown>
  );

  return (
    <div className="notes-table-height w-full">
      <NeetoUITable
        allowRowClick
        rowData={contacts}
        columnData={[
          {
            title: "Name and Role",
            dataIndex: "firstName",
            key: "name",
            width: "30%",
            render: renderAvatarWithNameAndRole,
          },
          {
            title: "Email",
            dataIndex: "email",
            key: "email",
            width: "30%",
          },
          {
            title: "Created at",
            dataIndex: "createdAt",
            key: "createdAt",
            width: "30%",
            render: monthDateFormatter,
          },
          {
            title: "",
            dataIndex: "id",
            key: "id",
            width: "10%",
            render: renderActionDropdown,
          },
        ]}
      />
    </div>
  );
};

export default Table;
