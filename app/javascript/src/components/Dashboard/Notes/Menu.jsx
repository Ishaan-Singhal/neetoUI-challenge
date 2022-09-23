import React, { useState } from "react";

import { Search, Plus, Settings } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar } from "neetoui/layouts";

import { NOTES_MENU_BAR_VALUES } from "./constants";

const Menu = ({ showMenu }) => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);

  return (
    <MenuBar showMenu={showMenu} title="Notes">
      {NOTES_MENU_BAR_VALUES.notes.map(noteCategory => (
        <MenuBar.Block
          active={noteCategory.active}
          count={noteCategory.count}
          key={noteCategory.id}
          label={noteCategory.label}
        />
      ))}
      <MenuBar.SubTitle
        iconProps={[
          {
            icon: Search,
            onClick: () =>
              setIsSearchCollapsed(isSearchCollapsed => !isSearchCollapsed),
          },
        ]}
      >
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          Segments
        </Typography>
      </MenuBar.SubTitle>
      <MenuBar.Search
        collapse={isSearchCollapsed}
        onCollapse={() => setIsSearchCollapsed(true)}
      />
      {NOTES_MENU_BAR_VALUES.segments.map(segment => (
        <MenuBar.Block
          count={segment.count}
          key={segment.id}
          label={segment.label}
        />
      ))}
      <MenuBar.SubTitle
        iconProps={[
          {
            icon: Settings,
          },
          {
            icon: Plus,
          },
          {
            icon: Search,
          },
        ]}
      >
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          Tags
        </Typography>
      </MenuBar.SubTitle>
      {NOTES_MENU_BAR_VALUES.tags.map(tag => (
        <MenuBar.Block count={tag.count} key={tag.id} label={tag.label} />
      ))}
    </MenuBar>
  );
};

export default Menu;
