import * as yup from "yup";

export const CONTACT_MENU_BAR_VALUES = {
  contacts: [
    {
      id: 0,
      count: 0,
      label: "All",
    },
    {
      id: 1,
      count: 0,
      label: "Archived",
    },
    {
      id: 2,
      count: 0,
      label: "Completed",
    },
    {
      id: 3,
      count: 0,
      label: "Phase 2",
    },
  ],
  segments: [
    {
      id: 4,
      count: 0,
      label: "Segment 1",
    },
  ],
  tags: [
    {
      id: 5,
      count: 0,
      label: "Tag 1",
    },
  ],
};

export const CONTACTS_VALUES = [
  {
    id: 0,
    firstName: "Alpha",
    lastName: "Richards",
    email: "alpha@email.com",
    createdAt: "2018-04-13 19:18",
    role: "owner",
  },
  {
    id: 1,
    firstName: "Beta",
    lastName: "Jones",
    email: "beta@email.com",
    createdAt: "2018-04-13 19:18",
    role: "owner",
  },
  {
    id: 2,
    firstName: "Gamma",
    lastName: "Richards",
    email: "gamma@email.com",
    createdAt: "2018-04-13 19:18",
    role: "owner",
  },
  {
    id: 3,
    firstName: "Theta",
    lastName: "Jones",
    email: "theta@email.com",
    createdAt: "2018-04-13 19:18",
    role: "owner",
  },
];

export const CONTACTS_INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: null,
};

export const ROLES_VALUES = [
  {
    id: 0,
    name: "Owner",
  },
  {
    id: 1,
    name: "Admin",
  },
  {
    id: 2,
    name: "User",
  },
];

export const CONTACTS_VALIDATION = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Valid email is required")
    .required("Email is required"),
  role: yup
    .object()
    .nullable()
    .shape({
      label: yup.string().oneOf(ROLES_VALUES.map(role => role.name)),
      value: yup.number().oneOf(ROLES_VALUES.map(role => role.id)),
    })
    .required("Role is required"),
});
