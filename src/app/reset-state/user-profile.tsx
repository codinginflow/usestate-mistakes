"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { User } from "./page";

export interface ProfileProps {
  user: User;
}

export default function Profile({ user }: ProfileProps) {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");

  // 🔴 Bad: Resetting state manually in useEffect. This is tedious and causes unnecessary re-renders.
  useEffect(() => {
    setTitle("");
    setComment("");
  }, [user.id]);

  console.count("UserProfile rendered");

  return (
    <Card>
      <CardHeader>
        <CardTitle>{user.name}&apos;s Profile</CardTitle>
        <CardDescription>
          Type a comment for {user.name}. The inputs should reset when you
          switch users. Check the console to see how many times the component is
          rendered.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor={`title-${user.id}`}>Comment Title</Label>
            <Input
              id={`title-${user.id}`}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter a title for your comment..."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor={`comment-${user.id}`}>Comment Text:</Label>
            <Textarea
              id={`comment-${user.id}`}
              value={comment}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setComment(e.target.value)
              }
              placeholder={`Write a comment for ${user.name}...`}
              className="w-full p-2 border rounded-md bg-background min-h-[80px]"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
