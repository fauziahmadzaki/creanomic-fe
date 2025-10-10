"use server";
import axios, { AxiosError } from "axios";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const registerAction = async (formData: FormData) => {
  const data = {
    email: formData.get("email"),
    fullname: formData.get("fullname"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };
  try {
    const res = await axios.post(
      "http://localhost:3001/api/auth/register",
      data
    );
    return { success: true, message: res.data?.message };
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.data.message)
        return { success: false, message: error.response?.data.message };
    }
    return { success: false, message: "Internal Server Error!" };
  }
};

export const loginAction = async (formData: FormData) => {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  try {
    const res = await axios.post("http://localhost:3001/api/auth/login", data);
    const user = res.data.data.user;
    const token = res.data.data.token;
    console.log(res);
    if (token) {
      const cookieStore = await cookies();
      cookieStore.set({
        name: "token",
        value: token,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 1,
      });
      cookieStore.set({
        name: "user",
        httpOnly: false,
        value: JSON.stringify(user),
        path: "/",
      });
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.data.message)
        return { success: false, message: error.response?.data.message };
    }
    return { success: false, message: "Gagal Login" };
  }
  redirect("/");
};
