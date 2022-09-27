import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Table as NeetoUITable, Avatar, Typography, Dropdown } from "neetoui";

import { monthDateFormatter } from "utils/date";

const Table = ({ contacts = [] }) => (
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
          render: (firstName, { lastName, role }) => (
            <div className="flex space-x-2">
              <Avatar
                size="large"
                user={{ name: `${firstName} ${lastName}` }}
              />
              <div className="flex flex-col">
                <Typography style="h4">
                  {firstName} {lastName}
                </Typography>
                <Typography style="body3">{role}</Typography>
              </div>
            </div>
          ),
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
          render: () => (
            <Dropdown buttonStyle="text" icon={MenuHorizontal}>
              <div className="p-1.5">
                <li>Edit</li>
                <li>Delete</li>
              </div>
            </Dropdown>
          ),
        },
      ]}
    />
  </div>
);

export default Table;
