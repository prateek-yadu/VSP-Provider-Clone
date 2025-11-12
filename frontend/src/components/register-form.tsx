import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link, Navigate } from "react-router";
import { useState, type SetStateAction } from "react";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"form">) {

  // gets AuthState
  const authState = useSelector((state: RootState) => state.AuthState);

  // user input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // register handling logic
  const handleRegister = async (event: { preventDefault: () => void; }) => {
    event?.preventDefault();

    // sends data to DB
    const response = await (await fetch("/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, email: email, phone: "8602848818", password: password })
    })).json();

    // clears input
    setName("");
    setEmail("");
    setPassword("");

    // shows toast
    if (response.status == 201) {
      toast.success(response.message);
    } else if (response.status == 409) {
      toast.error(response.message);
    } else {
      toast.error(response.message);
    }
  };

  if (authState.isAuthenticated) {
    return <Navigate to={"/"} replace={true} />;
  }

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props} onSubmit={handleRegister}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Create a new account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email and password below to register
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="name">Full Name</FieldLabel>
          <Input id="name" type="text" value={name} onChange={(e: { target: { value: SetStateAction<string>; }; }) => {
            setName(e.target.value);
          }} placeholder="Edward Snowden" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" value={email} onChange={(e: { target: { value: SetStateAction<string>; }; }) => {
            setEmail(e.target.value);
          }} placeholder="me@example.com" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input id="password" type="password" value={password} onChange={(e: { target: { value: SetStateAction<string>; }; }) => {
            setPassword(e.target.value);
          }} placeholder="••••••••••••" required />
          <div className="w-fit flex items-center justify-end">
          </div>
        </Field>
        <Field>
          <Button type="submit" className="cursor-pointer">Register</Button>
        </Field>
        <FieldSeparator>Or continue with</FieldSeparator>
        <Field>
          <Button variant="outline" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                fill="currentColor"
              />
            </svg>
            Register with GitHub
          </Button>
          <FieldDescription className="text-center">
            Already have an account?{" "}
            <Link to="/login" className="underline underline-offset-4">
              Login
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
