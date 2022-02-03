import {
    Children,
    cloneElement,
    ReactElement,
    useEffect,
    useState
} from 'react';
import {CarouselProps} from "./Carousel.props";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

import './Carousel.css'

const PAGE_WIDTH = 450;


export const Carousel = ({children}: CarouselProps): JSX.Element => {
    const [pages, setPages] = useState<ReactElement | ReactElement[]>([]);
    const [offset,setOffset] = useState(0)

    console.log(pages,)



    useEffect(() => {
        return setPages(
            Children.map(children, (child: ReactElement) => {
                return cloneElement(child, {
                    style: {
                        height: "100%",
                        minWidth:`${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`,
                    }
                });
            })
        );
    }, []);




    function handleLeftArrowClick() {
        setOffset (prevState =>Math.min(prevState + PAGE_WIDTH, 0))
    }

    function handleRightArrowClick() {

        // const maxOffset = -(PAGE_WIDTH * (pages?.length - 1))
        // setOffset (prevState => Math.max(prevState - PAGE_WIDTH, maxOffset))

    }


    return (
        <div className="main-container">
            <FiChevronLeft className='arrow' onClick={handleLeftArrowClick} />
            <div className="window">
                <div className="all-pages-container"

                style={{
                    transform: `translateX(${offset}px)`
                }}
                > {pages} </div>
            </div>
            <FiChevronRight className='arrow' onClick={handleRightArrowClick} />
        </div>
    );
};
