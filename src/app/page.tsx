import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">React useState Mistakes</h1>
        <p className="text-lg text-muted-foreground">
          Learn common mistakes when using React&apos;s useState hook and how to
          avoid them
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/initializer-function">
          <Card className="h-full hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Initializer Functions</CardTitle>
              <CardDescription>
                Learn how to pass initializer functions to useState correctly
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link href="/reset-state">
          <Card className="h-full hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Resetting State</CardTitle>
              <CardDescription>
                Learn how to reset component state with keys
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link href="/state-setter">
          <Card className="h-full hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>State Setter Functions</CardTitle>
              <CardDescription>
                Learn when and when not to use the functional form of state
                setters
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link href="/derive-state">
          <Card className="h-full hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Deriving State</CardTitle>
              <CardDescription>
                Understand why you should calculate values during render
                whenever possible
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link href="/form-input">
          <Card className="h-full hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Form Input Handling</CardTitle>
              <CardDescription>
                Learn how to efficiently manage form state with a single object
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>
    </main>
  );
}
