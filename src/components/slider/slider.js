import React from "react"

import styles from "./slider.module.scss"
import SliderIcons from "./slider.svg"

const Slider = ({ images }) => {

    const turnLeft = () => {
        console.log("turn left")
    }

    const turnRight = () => {
        console.log("turn right")
    }

    return (
        <div className={`${styles.Slider}`}>
            <div className={`${styles.SliderArrow}`}>
                <svg className={`${styles.SliderArrowImg}`} viewBox="0 0 32 32" onClick={turnLeft}>
                        <use xlinkHref={`${SliderIcons}#ArrowLeft`}></use>
                </svg>
            </div>
            <div className={`${styles.SliderContainer}`}>
                <div className={`${styles.SliderTrack}`}>
                    {
                        images.map((image) => {
                            return (
                                <div key={image.src} className={`${styles.SliderItem}`}>
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
                <svg className={`${styles.SliderArrowImg}`} viewBox="0 0 32 32" onClick={turnRight}>
                    <use xlinkHref={`${SliderIcons}#ArrowRight`}></use>
                </svg>
            </div>
        </div>
    )

}

export default Slider