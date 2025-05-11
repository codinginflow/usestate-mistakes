"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Profile from "./user-profile";

export interface User {
  id: string;
  name: string;
}

const users: User[] = [
  { id: "user1", name: "Alice" },
  { id: "user2", name: "Bob" },
  { id: "user3", name: "Charlie" },
];

export default function Page() {
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const currentUser = users[currentUserIndex];

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
        <h1 className="text-3xl font-bold">Component State Resetting</h1>
      </header>

      <div className="space-y-4">
        <div className="flex space-x-2">
          {users.map((user, index) => (
            <Button
              key={user.id}
              variant={currentUserIndex === index ? "default" : "outline"}
              onClick={() => setCurrentUserIndex(index)}
            >
              {user.name}&apos;s Profile
            </Button>
          ))}
        </div>

        <Profile user={currentUser} />
      </div>
    </div>
  );
}
