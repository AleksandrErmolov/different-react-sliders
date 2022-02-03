import {
    Children,
    cloneElement,
    ReactElement,
    useEffect,
    useState
} from 'react';
import {CarouselProps} from "./Carousel.props";
import './Carousel.css'


export const Carousel = ({children}: CarouselProps): JSX.Element => {
    const [pages, setPages] = useState<ReactElement | ReactElement[]>();

    useEffect(() => {
        return setPages(
            Children.map(children, (child: ReactElement) => {
                return cloneElement(child, {
                    style: {
                        height: "100%",
                        minWidth:'100%',
                        maxWidth: "100%"
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
