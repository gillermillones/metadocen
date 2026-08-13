import { SessionOptions } from "iron-session";

export interface SessionData {
  userId: string;
  email: string;
  name: string;
  isLoggedIn: boolean;
}

export const defaultSession: SessionData = {
  userId: "",
  email: "",
  name: "",
  isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
  password: "tz7Wxs2cFGpvq69k4XggDDMkwxkQQDtu",
  cookieName: "iron-session-metadocen",
};