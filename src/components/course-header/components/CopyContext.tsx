"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { MdContentCopy } from "react-icons/md";

interface IContentCopyProps {
  title: string;
  content: string;
  children: React.ReactNode;
}

export const ContentCopy = ({ title, children, content }: IContentCopyProps) => {

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
      {children}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="p-2 bg-paper border border-primary rounded-lg flex flex-col gap-2 min-w-72 max-w-sm">
          <span>{title}</span>

          <div className="flex items-center gap-1">
            <input 
              readOnly
              autoFocus        
              value={content}
              onFocus={(e) => e.target.select()}
              className="bg-background p-1 px-2 rounded w-full"
            />

            <button className="p-2">
              <MdContentCopy />
            </button>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>

    </DropdownMenu.Root>
  );
} ;