export type TYPE_USER = "ADMIN" | "USER" | "VIEWER";

export interface User {
  username: string;
  role: TYPE_USER;
}

export const currentUser: User[] = [
  {
    username: "Peter634",
    role: "ADMIN",
  },
  {
    username: "JohnDoe753",
    role: "USER",
  },
  {
    username: "JaneSmith456",
    role: "VIEWER",
  },
];
