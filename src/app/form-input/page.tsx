"use client";

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
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  street: string;
  city: string;
  zipCode: string;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  street: "",
  city: "",
  zipCode: "",
};

export default function Page() {
  // ✅ Good: Using a single useState hook with an object.
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submitted: " + JSON.stringify(formData, null, 2));
  };

  const handleReset = () => {
    setFormData(initialFormData);
  };

  const isFormValid = Object.values(formData).every(
    (value) => value.trim() !== ""
  );

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-8">
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
        <h1 className="text-3xl font-bold">Handling Form Input</h1>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>User Information Form</CardTitle>
          <CardDescription>
            Using a single state object is more efficient than multiple state
            variables for forms.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="street">Street Address</Label>
              <Input
                id="street"
                name="street"
                value={formData.street}
                onChange={handleChange}
                placeholder="Enter street address"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter city"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zipCode">Zip Code</Label>
                <Input
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder="Enter zip code"
                />
              </div>
            </div>

            <div className="flex justify-end pt-2 space-x-2">
              <Button type="button" variant="outline" onClick={handleReset}>
                Reset Form
              </Button>
              <Button type="submit" disabled={!isFormValid}>
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Current Form Data</CardTitle>
          <CardDescription>
            This card displays the current state of the form data.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 bg-muted rounded-md overflow-x-auto">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
}
