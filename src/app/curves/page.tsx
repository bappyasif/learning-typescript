"use client"

import React, { useEffect } from 'react'
import styles from "./Curves.module.css"
import KUTE, {fromTo} from "kute.js"

const CurvesPage = () => {
    // const animateBlob = () => {
    //     // KUTE.fromTo("#blob1", { path: "#blob1" }, { path: "blob2" }, { repeat: 999, duration: 2000, yoyo: true })
    //     const tween = fromTo("#blob1", { path: "#blob1" }, { path: "blob2" }, { repeat: 999, duration: 2000, yoyo: true })

    //     tween.start()
    // }
    
    // useEffect(() => {
    //     animateBlob()
    // }, [])

    return (
        <div className='overflow-hidden'>
            <h1>CurvesPage</h1>
            <section className={styles.section + " bg-blue-900"}>
                <h2>Nice Curves</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quis architecto corrupti voluptas, libero accusantium est enim, quo iusto hic in, quia cupiditate obcaecati quidem inventore illo tempora esse voluptatum!</p>
                <div className={styles.curve}></div>
            </section>
            <section className={`${styles.section} ${styles.bubble}`}>
                <h2>Nice Curves</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quis architecto corrupti voluptas, libero accusantium est enim, quo iusto hic in, quia cupiditate obcaecati quidem inventore illo tempora esse voluptatum!</p>
                {/* <div className={styles.curve}></div> */}
            </section>
            <section className={`${styles.section} ${styles.dark}`}>
                <h2>Nice Curves</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quis architecto corrupti voluptas, libero accusantium est enim, quo iusto hic in, quia cupiditate obcaecati quidem inventore illo tempora esse voluptatum!</p>
                {/* <div className={styles.curve}></div> */}
            </section>
            <section className={`${styles.section} bg-emerald-400`}>
                <h2>Nice Curves</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quis architecto corrupti voluptas, libero accusantium est enim, quo iusto hic in, quia cupiditate obcaecati quidem inventore illo tempora esse voluptatum!</p>
                {/* <div className={styles.curve}></div> */}
                <div className={styles.wave}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                    </svg>
                </div>
            </section>

            <div className={`${styles.spacer} ${styles.svgLayer}`}></div>
            <section className={`${styles.section}`}>
                <h2>Nice Curves</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quis architecto corrupti voluptas, libero accusantium est enim, quo iusto hic in, quia cupiditate obcaecati quidem inventore illo tempora esse voluptatum!</p>
                {/* <div className={styles.curve}></div> */}
            </section>

            <div className={`${styles.spacer} ${styles.svgLayer} ${styles.flip}`}></div>

            <section className={`${styles.section} bg-pink-400`}>
                <h2>Nice Curves</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quis architecto corrupti voluptas, libero accusantium est enim, quo iusto hic in, quia cupiditate obcaecati quidem inventore illo tempora esse voluptatum!</p>
                {/* <div className={styles.curve}></div> */}
            </section>

            <svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(458.049622473566 317.66946558235725)"><path id='blob1' d="M99.8 -33.9C128.4 55.3 149.7 145.4 116.6 172.2C83.5 199 -4.1 162.6 -65.3 112.8C-126.4 62.9 -161.2 -0.4 -145.9 -71.4C-130.6 -142.4 -65.3 -221.2 -14.8 -216.4C35.7 -211.6 71.3 -123.2 99.8 -33.9" fill="#BB004B"></path></g><g transform="translate(416.94462984168536 355.1684454884372)"><path id='blob2' d="M201.2 -96.1C212.3 -31.5 139.2 29.8 74.3 69.1C9.4 108.4 -47.3 125.8 -86.6 101.5C-125.8 77.1 -147.5 11.1 -130.2 -62.3C-112.9 -135.7 -56.4 -216.3 19.3 -222.6C95.1 -228.9 190.2 -160.8 201.2 -96.1" fill="#BB004B"></path></g></svg>

            <div className={`${styles.spacer} ${styles.svgLayer}`}></div>

            <section className={`${styles.section}`}>
                <h2>Nice Curves</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quis architecto corrupti voluptas, libero accusantium est enim, quo iusto hic in, quia cupiditate obcaecati quidem inventore illo tempora esse voluptatum!</p>
                {/* <div className={styles.curve}></div> */}
            </section>
            <section className={`${styles.section}`}>
                <h2>Nice Curves</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quis architecto corrupti voluptas, libero accusantium est enim, quo iusto hic in, quia cupiditate obcaecati quidem inventore illo tempora esse voluptatum!</p>
                {/* <div className={styles.curve}></div> */}
            </section>
        </div>
    )
}

export default CurvesPage