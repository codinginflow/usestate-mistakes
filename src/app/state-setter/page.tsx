"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { performAsyncOperation } from "./perform-async-operation";

export default function Page() {
  const [count, setCount] = useState(0);
  const [asyncCount, setAsyncCount] = useState(0);

  const increment = () => {
    console.log("increment with count", count);
    // ✅ Good: Use the functional form of the setter function to always get the latest state.
    // ❗ This is not necessary for user events that simply update a state once.
    setCount((prevCount) => prevCount + 1);
  };

  const incrementAsync = async () => {
    console.log("incrementAsync with count", asyncCount);

    await performAsyncOperation(); // Simulates a network request or other async task

    // ✅ Good: Use the functional form of the setter function to avoid stale closures.
    setAsyncCount((prevCount) => prevCount + 1);
  };

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
        <h1 className="text-3xl font-bold">State Setter Function</h1>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Synchronous State Update</CardTitle>
          <CardDescription>
            Click the +1 and +3 buttons and see if they set the count correctly.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-2xl font-bold text-center">Count: {count}</p>
          <div className="flex justify-center space-x-2">
            <Button onClick={increment}>+ 1</Button>
            <Button
              onClick={() => {
                increment();
                increment();
                increment();
              }}
            >
              +3
            </Button>
            <Button onClick={() => setCount(0)} variant="outline">
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Asynchronous State Update</CardTitle>
          <CardDescription>
            The count will update after a short delay. Click the button multiple
            times in quick succession and see if the count updates correctly.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-2xl font-bold text-center">
            Delayed Count: {asyncCount}
          </p>
          <div className="flex justify-center space-x-2">
            <Button onClick={incrementAsync}>+ 1</Button>
            <Button onClick={() => setAsyncCount(0)} variant="outline">
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
