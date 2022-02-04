import React, {useEffect, useState} from 'react';
import {data} from "./ButtonSliderData";
import './ButtonSlider.css'
import {ButtonSliderInterface} from "./Button.slider.interface";
import cn from 'classnames';


export const ButtonSlider = (): JSX.Element => {


    const [currentStep, setCurrentStep] = useState<any>(null)
    const [isAnimation, setIsAnimation] = useState<boolean>(true)

    console.log(currentStep)

    const changeSlideAnimation = (): void => {

        if (isAnimation) {
            if (currentStep === 0) {
                setTimeout(() => {
                    setCurrentStep(currentStep + 1)
                }, 10000)

            } else  if( currentStep === 1 || currentStep === null){
                setTimeout(() => {
                    setCurrentStep(0)
                }, 10000)
            }
        }
    }


    useEffect(() => {
        setCurrentStep(0)
        changeSlideAnimation()
    }, [currentStep])


    const changeSlide = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.stopPropagation();
        if (currentStep === 0) {
            setCurrentStep(1)
            setIsAnimation(false)
        } else {
            setCurrentStep(0)
            setIsAnimation(false)
        }
    }


    return (
        <div className='button-slider-container'>
            <span> {currentStep + 1} Шаг</span>
            <div className='button-container'>
                {data.map((el: ButtonSliderInterface, index: number) =>
                    <button
                        key={index}
                        className={cn('button', {
                            ['active']: !isAnimation && currentStep === index,
                            ['disabled']: !isAnimation && currentStep !== index
                        })}
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => changeSlide(e)}
                    >
                        <div className={cn('line', {
                            ['act']: isAnimation && currentStep === index,
                            ['dis']: isAnimation && currentStep !== index,

                        })}>
                        </div>
                    </button>
                )}

            </div>
            <div className='content-card'>
                <div className='left-side'>
                    <p className='title'>{ data[currentStep].title}</p>
                    <p className='sub-title'>{data[currentStep].text}</p>
                    <a href='#'> Подробнее </a>
                </div>

                <div className='right-side'>
                    <img className='img-card' src={data[currentStep].img}/>
                </div>
            </div>
        </div>
    );
};

