import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
} from "../ui/card";

export default function BlogCard() {
  return (
    <Card className="pt-0 overflow-hidden">
      <CardHeader className="p-0">
        <div className="w-full h-40 bg-black"></div>
      </CardHeader>
      <CardContent>
        <CardTitle>Test</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          eveniet error cumque eos qui culpa iusto tenetur excepturi enim
          similique?
        </CardDescription>
      </CardContent>
      <CardFooter>
        <p className="text-sm font-normal text-muted-foreground">Author</p>
      </CardFooter>
    </Card>
  );
}
