"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { getInitials } from "./get-initials";

export default function Page() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // ✅ Good: Calculate the full name during rendering.
  const fullName = firstName + " " + lastName;

  // ✅ Also for function calls:
  // ⚠️ Before React 19 Compiler, expensive operations should be wrapped in useMemo.
  const initials = getInitials(firstName, lastName);

  // ✅ Also for map, filter, etc.
  const lastNameAnonymized = lastName
    .split("")
    .map((char, index) => (index < 2 ? char : "*"))
    .join("");

  console.count("Page rendered");

  return (
    <div className="max-w-xl mx-auto p-4 space-y-8">
      <div className="text-center">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:underline inline-flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Overview
        </Link>
      </div>

      <header className="text-center">
        <h1 className="text-3xl font-bold">Deriving State</h1>
      </header>

      <Card>
        <CardHeader>
          <CardDescription>
            The values below are derived from the First Name + Last Name inputs.
            These values can be calculated directly during component render,
            which is more efficient than using additional state variables with
            useEffect.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-6 space-y-4 text-center">
            <p className="text-lg font-semibold">
              Full Name: <span className="text-primary">{fullName}</span>
            </p>

            <p className="text-lg font-semibold">
              Initials: <span className="text-primary">{initials}</span>
            </p>

            <p className="text-lg font-semibold">
              Anonymized Name:{" "}
              <span className="text-primary">
                {firstName + " " + lastNameAnonymized}
              </span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
