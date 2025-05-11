"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { getInitialData } from "./get-initial-data";

export default function Page() {
  const [showDetails, setShowDetails] = useState(false);

  // ✅ Good: The initializer function is only called once on initial render.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState(getInitialData);

  // ✅ Equivalent:
  // const [data, setData] = useState(() => getInitialData());

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
        <h1 className="text-3xl font-bold">Initializer Function Call</h1>
      </header>

      <Card>
        <CardHeader>
          <CardDescription>
            Each time we toggle this list, we cause a re-render. If the
            initializer function is called in each render, this can become slow
            and expensive. Check the console to see how often it is called.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            onClick={() => setShowDetails((prev) => !prev)}
            variant="outline"
          >
            {showDetails ? "Hide" : "Show"} List
          </Button>

          {showDetails && (
            <ul className="list-disc list-inside">
              {data.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
