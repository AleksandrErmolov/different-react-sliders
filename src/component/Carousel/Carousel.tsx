import {Children, cloneElement, FC, PropsWithChildren, ReactNode, useEffect, useState} from 'react';
import {CarouselProps} from "./Carousel.props";
import './Carousel.css'


export const Carousel: FC = ({children}: PropsWithChildren<CarouselProps>): JSX.Element => {

    const [pages, setPages] = useState()

    useEffect(() => {
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height: "100%",
                        width: "100%"
                    }
                });
            })
        );
    }, []);

    return (
        <div className='main-container'>
            <div className='window'>
                <div className='all-pages-container'>
                    {children}
                </div>
            </div>
        </div>
    );
};
