import React from "react";

import { Clock, MenuVertical } from "neetoicons";
import { Typography, Avatar, Tooltip, Dropdown, Tag } from "neetoui";

import { calculateTimeDifference, dayTimeFormatter } from "utils/date";

const NoteDetail = ({ title, description, created_at: createdAt }) => (
  <div className="my-2 flex w-full flex-col rounded-sm border border-solid border-gray-300 p-4 shadow">
    <div className="flex justify-between">
      <Typography style="h4" weight="semibold">
        {title}
      </Typography>
      <Dropdown buttonStyle="text" icon={MenuVertical}>
        <div className="p-1.5">
          <li>Edit</li>
          <li>Delete</li>
        </div>
      </Dropdown>
    </div>
    <Typography style="body2">{description}</Typography>
    <div className="h-0 border-b border-solid border-gray-300" />
    <div className="mt-2 flex justify-between">
      <div className="flex-initial">
        <Tag label="Getting Started" style="secondary" type="solid" />
        <Tag label="Onboarding" style="secondary" type="solid" />
      </div>
      <div className="align-center flex justify-center ">
        <Clock size={16} />
        <Tooltip content={dayTimeFormatter(createdAt)} position="bottom">
          <Typography
            className="px-1"
            style="body3"
          >{`Created ${calculateTimeDifference(createdAt)}`}</Typography>
        </Tooltip>
        <Avatar size="small" user={{ name: "Temporary User" }} />
      </div>
    </div>
  </div>
);

export default NoteDetail;
