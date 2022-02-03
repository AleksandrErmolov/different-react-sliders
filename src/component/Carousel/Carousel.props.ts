import {DetailedHTMLProps, HTMLAttributes, ReactElement} from "react";

export interface CarouselProps  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
 children: ReactElement | ReactElement[];
}