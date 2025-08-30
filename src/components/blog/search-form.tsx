"use client";
import type { FormEventHandler } from "react";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function BlogSearchForm() {
  const handleSearchSubmit: FormEventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSearchSubmit} className="flex justify-center">
      <div className="flex w-full max-w-lg gap-2">
        <Input type="type" placeholder="Search" className="grow" />
        <Button type="submit" variant="secondary">
          <Search />
        </Button>
      </div>
    </form>
  );
}
