import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import { Cog } from "lucide-react";

export default function BlogHeader() {
  return (
    <nav className="text-text bg-ctp-surface1 container mx-auto mt-6 hidden rounded-full p-2 px-8 shadow md:flex">
      <div className="flex w-full items-center gap-8">
        <Link href="/blog" className="flex items-center gap-2">
          <h1 className="tex-xl text-xl font-bold tracking-wider uppercase">
            Foreynd
            <span className="text-ctp-blue">Blog</span>
          </h1>
        </Link>
        <div className="flex grow justify-start">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/blog" className="font-medium">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
}
