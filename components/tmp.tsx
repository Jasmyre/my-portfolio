import React from 'react'

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface Props<T> extends React.HTMLAttributes<T> {
    className?: string;
}

const Tmp = ({ className, ...props }: Props<HTMLDivElement>) => {
  return (
    <Card className={`${className} animate-[float-up_both] animation-timeline-view hover:opacity-100 hover:bg-muted`} {...props}>
      <CardHeader>
        <CardTitle className="text-wrap">My Card</CardTitle>
        <CardDescription className="text-wrap">
          This is my awesome card. I Love Pizza!!
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}

export default Tmp