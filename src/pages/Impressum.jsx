import styles from './Impressum.module.css'
import { useState } from 'preact/hooks';


export function Impressum() {

    return (
        <>
            <section className={styles.slider}>
                <div className={styles.container}>
                    <div className={styles.sliderLeft}>
                        <h1 className={styles.title}>
                            Impressum
                            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        </h1>
                    </div>
                </div>
            </section>
        </>
    );
}
