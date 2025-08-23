import { cookies } from "next/headers";

export class Cookies {
  constructor() { }
  static async getSessionCookies() {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("sessionToken");
    if (!sessionToken) return;
    return sessionToken.value;
  }
}
