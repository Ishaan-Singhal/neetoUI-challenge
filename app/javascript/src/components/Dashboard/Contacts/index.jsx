import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";

import { CONTACTS_VALUES } from "./constants";
import DeleteAlert from "./DeleteAlert";
import Menu from "./Menu";
import NewPane from "./Pane/Create";
import Table from "./Table";

const Contacts = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showNewContactPane, setShowNewContactPane] = useState(false);

  const onDelete = () => {
    setShowDeleteAlert(true);
  };
  const afterDelete = () => {
    setShowDeleteAlert(false);
  };
  return (
    <>
      <Menu showMenu={showMenu} />
      <Container>
        <Header
          menuBarToggle={() => setShowMenu(showMenu => !showMenu)}
          title="All Contacts"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add New Contact"
              onClick={() => setShowNewContactPane(true)}
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {CONTACTS_VALUES.length > 0 ? (
          <Table contacts={CONTACTS_VALUES} onDelete={onDelete} />
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            primaryAction={() => null}
            primaryActionLabel="Add New Contact"
            subtitle="Add your contacts to send customized emails to them."
            title="Looks like you don't have any contacts!"
          />
        )}
        <NewPane
          setShowPane={setShowNewContactPane}
          showPane={showNewContactPane}
        />
        {showDeleteAlert && <DeleteAlert onClose={afterDelete} />}
      </Container>
    </>
  );
};

export default Contacts;
