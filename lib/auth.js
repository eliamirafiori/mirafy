import { cookies } from "next/headers";

import { getMe } from "./user";

export async function createSession(token) {
  // for NextJS 15+
  (await cookies()).set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  // for NextJS <15
  /*
  cookies().set("session", token, {
    // httpOnly: true,
    // secure: true,
    // expires: expiresAt,
    // sameSite: "lax",
    // path: "/",
  });
  */
}

export async function verifySession() {
  const sessionCookie = cookies().get("session");

  if (!sessionCookie) {
    return {
      user: null,
      session: null,
    };
  }

  const sessionToken = sessionCookie.value;

  if (!sessionToken) {
    return { user: null, session: null };
  }

  const result = await getMe(sessionToken);

  console.log(result);

  return result;
}

export async function deleteSession() {
  // for NextJS 15+
  const cookieStore = await cookies();
  // for NextJS <15
  // const cookieStore = cookies();
  cookieStore.delete("session");
}
