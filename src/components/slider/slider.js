import React from "react"

import styles from "./slider.module.scss"

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
            <use xlinkHref="assets/img/sprites.svg#ArrowLeft"></use>
        </svg>
        <svg className={`${styles.SliderArrowImg}`} viewBox="0 0 32 32" onClick={turnRight}>
            <use xlinkHref="assets/img/sprites.svg#ArrowRight"></use>
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
                        <img alt={photo} src={`assets/img/photos/${photo}`}/>
                    )
                })
            }
        </div>
    )

}

export default Slider