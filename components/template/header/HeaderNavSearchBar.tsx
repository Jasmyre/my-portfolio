import React from "react";
import { Input } from "../../ui/input";
import { Search } from "lucide-react";
import { Button } from "../../ui/button";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  placeHolder?: string;
}

const HeaderNavSearchBar = ({ placeHolder, ...props }: Props) => {
  return (
    <div
      className="group flex flex-row justify-center items-center cursor-pointer border rounded-md"
      {...props}
    >
      <Input
        className="px-2 focus-visible:ring-0 rounded-none border-none shadow-none focus:border-2 border-foreground cursor-pointer"
        type="text"
        placeholder={placeHolder ?? "Search..."}
      ></Input>
      <Button className="px-2 " size={"icon"} variant={"ghost"}>
        <Search size={24} />
      </Button>
    </div>
  );
};

export default HeaderNavSearchBar;
