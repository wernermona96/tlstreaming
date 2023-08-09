import React from "react";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

import useCurrentUser from "@/hooks/usecurrentUser";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data: user } = useCurrentUser();

  return (
    <>
      <h1 className="text-6xl text-white">The Lazy Streaming</h1>
      <p className="mt-4 text-white">Salut : {user?.name}</p>
      <button
        onClick={() => signOut()}
        className="bg-yellow-600 py-3 text-white rounded-md w-60 mt-10 hover:bg-yellow-700 transition"
      >
        Deconnexion
      </button>
    </>
  );
}
