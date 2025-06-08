"use client";

import { useActionState } from "react";

import { auth } from "@/actions/auth-actions";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function AuthForm({ className, mode, ...props }) {
  const [formState, formAction] = useActionState(auth.bind(null, mode), {});

  let cardHeader = (
    <CardHeader>
      <CardTitle>Login to your account</CardTitle>
      <CardDescription>
        Enter your email below to login to your account
      </CardDescription>
    </CardHeader>
  );
  let usernameField;

  if (mode === "signup") {
    cardHeader = (
      <CardHeader>
        <CardTitle>Signup with a new account</CardTitle>
        <CardDescription>
          Choose your username, enter your email and password below to signup
        </CardDescription>
      </CardHeader>
    );

    usernameField = (
      <div className="grid gap-3">
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          type="username"
          placeholder="myusername"
          required
        />
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        {cardHeader}
        <CardContent>
          <form action={formAction}>
            <div className="flex flex-col gap-6">
              {usernameField}
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Login
                </Button>
                <Button variant="outline" className="w-full">
                  Login with Google
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              {mode === "login" && (
                <p>
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/?mode=signup"
                    className="underline underline-offset-4"
                  >
                    Sign up
                  </Link>
                </p>
              )}

              {mode === "signup" && (
                <p>
                  Already have an account?{" "}
                  <Link
                    href="/?mode=login"
                    className="underline underline-offset-4"
                  >
                    Log in
                  </Link>
                </p>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
