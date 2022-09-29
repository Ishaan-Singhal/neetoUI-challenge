import React from "react";

import { Table as NeetoUITable } from "neetoui";

import { monthDateFormatter } from "utils/date";

import { renderAvatarWithNameAndRole, renderActionDropdown } from "./utils";

const Table = ({ contacts = [], onDelete }) => (
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
          render: () => renderActionDropdown(onDelete),
        },
      ]}
    />
  </div>
);
export default Table;
