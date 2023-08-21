import React from 'react'
import styles from "./Lines.module.css"

const DrawingPage = () => {
    return (
        <>
            <div className={styles.test}>DrawingPage</div>

            <p className={styles.my_element + " flex justify-center"}>My Element</p>

            <p className={styles.my_element_2 + " flex justify-center my-2 mx-0.5"}>My Element Two</p>

            <p className={styles.my_element_3 + " flex justify-center my-2 mx-0.5"}>My Element Three</p>

            <p className={styles.my_element_3 + " decorative_line flex justify-center my-2 mx-0.5"}>My Element Three - II</p>

            <p className={styles.my_element_4 + " flex justify-center my-2 mx-0.5"}>My Element Four</p>

            {/* <p className={styles.my_element_5 + " decorative_line_2 flex justify-center my-2 mx-0.5"}>My Element Five</p> */}
            <p className={styles.decorative_line_2 + " flex justify-center my-2 mx-0.5"}>My Element Five</p>
            {/* <p className={styles.decorative_line_3 + "  flex justify-center 
            my-2 mx-0.5"}>My Element Five - II</p> */}

            <p className={styles.my_element_6 + " flex justify-center text-blue-950 my-2 mx-0.5"}>My Element Six</p>

            <p className={styles.my_element_7 + " flex justify-center my-2 mx-0.5"}>My Element Seven</p>
        </>
    )
}

export default DrawingPage