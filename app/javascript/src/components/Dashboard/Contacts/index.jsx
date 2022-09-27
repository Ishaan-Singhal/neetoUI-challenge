import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";

import ContactMenu from "./ContactMenu";
import Table from "./Table";

import { CONTACTS_VALUES } from "../Notes/constants";

const Contacts = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <ContactMenu showMenu={showMenu} />
      <Container>
        <Header
          menuBarToggle={() => setShowMenu(showMenu => !showMenu)}
          title="All Contacts"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add New Contact"
              onClick={() => {}}
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {CONTACTS_VALUES.length > 0 ? (
          <Table contacts={CONTACTS_VALUES} />
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            primaryAction={() => null}
            primaryActionLabel="Add New Contact"
            subtitle="Add your contacts to send customized emails to them."
            title="Looks like you don't have any contacts!"
          />
        )}
      </Container>
    </>
  );
};

export default Contacts;
