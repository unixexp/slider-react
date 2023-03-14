import React from "react"

import styles from "./slider.module.scss"
import SliderIcons from "./slider.svg"

const Slider = ({ photos }) => {

    const turnLeft = () => {
        console.log("turn left")
    }

    const turnRight = () => {
        console.log("turn right")
    }

    return (
        <>
        <svg className={`${styles.SliderArrowImg}`} viewBox="0 0 32 32" onClick={turnLeft}>
            <use xlinkHref={`${SliderIcons}#ArrowLeft`}></use>
        </svg>
        <svg className={`${styles.SliderArrowImg}`} viewBox="0 0 32 32" onClick={turnRight}>
            <use xlinkHref={`${SliderIcons}#ArrowRight`}></use>
        </svg>
        <SliderTrack photos={photos}/>
        </>
    )

}

const SliderTrack = ({ photos }) => {

    return (
        <div className={`${styles.SliderTrack}`}>
            {
                photos.map((photo) => {
                    return (
                        <img key={photo} alt={photo} src={`assets/img/${photo}`}/>
                    )
                })
            }
        </div>
    )

}

export default Slider