"use client";

import { signOut } from "next-auth/react";

const Users = () => {
 return <button onClick={() => signOut()}>logOUt</button>;
};

export default Users;
