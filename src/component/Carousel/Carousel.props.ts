import {DetailedHTMLProps, HTMLAttributes, ReactElement, ReactNode} from "react";

export interface CarouselProps  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
 children:  ReactElement[]
}