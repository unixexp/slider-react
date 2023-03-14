import React from "react"
import { useState, useRef, useEffect } from "react"

import styles from "./slider.module.scss"
import SliderIcons from "./slider.svg"

const POSITION_START = 1;
const POSITION_MIDDLE = 2;
const POSITION_END = 3;

const Slider = ({ images }) => {

    const item = useRef(null)
    const track = useRef(null)
    const slider = useRef(null)

    useEffect(() => {
        console.log(item.current.offsetWidth)
        console.log(track.current.offsetWidth)
        console.log(slider.current.offsetWidth)
    })

    const [state, setState] = useState({
        offset: 0,
		maxOffset: 0,
		position: POSITION_START
    })

    const slideLeft = () => {
        setState((prevState) => {
            if (prevState.offset >= 0) {
                return {
                    offset: 0,
                    position: POSITION_START
                }
            } else {
                return {
                    offset: prevState.offset + item.current.offsetWidth,
                    position: POSITION_MIDDLE
                }
            }
        })
    }

    const slideRight = () => {
        setState((prevState) => {
            if (prevState.offset >= 0) {
                return {
                    offset: 0,
                    position: POSITION_START
                }
            } else {
                return {
                    offset: prevState.offset + itemWidth,
                    position: POSITION_MIDDLE
                }
            }
        })
    }

    return (
        <div
            className={`${styles.Slider}`}
            ref={el => slider.current = el && el}
            >
            <div className={`${styles.SliderArrow}`}>
                <svg className={`${styles.SliderArrowImg}`} viewBox="0 0 32 32" onClick={slideLeft}>
                        <use xlinkHref={`${SliderIcons}#ArrowLeft`}></use>
                </svg>
            </div>
            <div className={`${styles.SliderContainer}`}>
                <div
                    className={`${styles.SliderTrack}`}
                    ref={el => track.current = el && el}
                    style={{marginLeft: `${state.offset}px`}}>
                    {
                        images.map((image) => {
                            return (
                                <div
                                    className={`${styles.SliderItem}`}
                                    key={image.src} 
                                    ref={el => item.current = el && el}
                                >
                                    <div className={`${styles.SliderItemImage}`}>
                                        <img alt={image.src} src={`assets/img/${image.src}`}/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={`${styles.SliderArrow}`}>
                <svg className={`${styles.SliderArrowImg}`} viewBox="0 0 32 32" onClick={slideRight}>
                    <use xlinkHref={`${SliderIcons}#ArrowRight`}></use>
                </svg>
            </div>
        </div>
    )

}

export default Slider