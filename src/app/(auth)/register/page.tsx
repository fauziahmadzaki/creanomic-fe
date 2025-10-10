"use client";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState, useTransition } from "react";
import { toast, Toaster } from "sonner";
import Link from "next/link";
import { registerAction } from "@/actions/authAction";
import { registerSchema } from "@/lib/zod/schema";

export default function RegisterPage() {
  const [isPending, startTransition] = useTransition();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      fullname: "",
      password: "",
      confirm_password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("fullname", values.fullname);
    formData.append("password", values.password);
    formData.append("confirm_password", values.confirm_password);

    startTransition(async () => {
      const result = await registerAction(formData);
      result.success
        ? toast.success(result.message)
        : toast.error(result.message);
      if (result.success) form.reset();
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 md:p-8">
        <Toaster position="top-center" />
        <FieldGroup>
          <div className=" gap-2 ">
            <h1 className="text-2xl font-bold">Welcome</h1>
            <p className="text-muted-foreground text-balance">
              Please Create Your Account
            </p>
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="m@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="name">Fullname</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email">Password</FormLabel>
                <FormControl>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    {...field}
                    placeholder="********"
                    endIcon={showPassword ? EyeOff : Eye}
                    onClickEndIcon={() => setShowPassword((value) => !value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email">Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    id="confirm_password"
                    type={showConfirmPassword ? "text" : "password"}
                    {...field}
                    placeholder="********"
                    endIcon={showConfirmPassword ? EyeOff : Eye}
                    onClickEndIcon={() =>
                      setShowConfirmPassword((value) => !value)
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Field>
            <Button type="submit">
              {isPending ? "Registering..." : "Register"}
            </Button>
          </Field>
          <FieldDescription className="text-center">
            Already have an account? <Link href="/login">Sign in</Link>
          </FieldDescription>
        </FieldGroup>
      </form>
    </Form>
  );
}
