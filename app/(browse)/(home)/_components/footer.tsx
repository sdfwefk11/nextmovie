import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export function Footer() {
  return (
    <footer className="flex flex-col p-8 items-center justify-center text-center text-sm">
      <p className="text-muted-foreground font-sans">
        Copyright © 2024 sdfwefk11. All rights reserved.
      </p>
      <div className="flex justify-center items-center gap-x-2">
        <p className="text-muted-foreground font-sans">
          Contact for more information
        </p>
        <a href="https://github.com/sdfwefk11">
          <Button variant="outline" type="button" size="sm">
            <GitHubLogoIcon />
          </Button>
        </a>
      </div>
    </footer>
  );
}
