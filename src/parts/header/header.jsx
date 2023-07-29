import styles from './header.module.css';

import { useState } from 'preact/hooks';

import mailImage from '../../assets/img/mail.svg'
import phoneImage from '../../assets/img/phone.svg'
import logoImage from '../../assets/img/logo-netalliance.webp';
import waterMarkImage from '../../assets/img/netalliance-watermark.png'

export function Header() {
    const [menu, showMenu] = useState(false);

    return (
        <>
            <header className={styles.header}>
                <section className={styles.topbar}>
                    <div className={styles.container}>
                        <div className={styles.topbarMail}>
                            <a href="https://www.netalliance.eu" className={styles.topbarLink}><img src={mailImage} className="invertWh" width="15" height="15" />www.netalliance.eu</a>
                        </div>
                        <div className={styles.topbarPhone}>
                            <a href="https://www.netalliance.eu" className={styles.topbarLink}><img src={phoneImage} className="invertWh" width="15" height="15" />06062 / 956 138</a>
                        </div>
                    </div>
                </section>
                <section className={styles.navigation}>
                    <div className={styles.container}>
                        <nav className={styles.navbar}>
                            <a className={styles.brand} href="https://www.netalliance.eu/"><img src={logoImage} className={styles.logo} width="211" height="40" alt="NETALLIANCE Logo" title="NETALLIANCE Logo" /></a>
                            <label onClick={() => showMenu((prevMenu) => !prevMenu)} className={styles.navToggle}>
                                <span className={menu ? styles.burgerClose : ''}></span>
                                <span className={menu ? styles.burgerClose : ''}></span>
                                <span className={menu ? styles.burgerClose : ''}></span>
                            </label>
                            <div className={menu ? styles.wrapper + ' ' + styles.menuActive : styles.wrapper}>
                                <ul className={styles.menu}>
                                    <li className={styles.menuItem}><a href="/" onClick={() => showMenu((prevMenu) => !prevMenu)} className={styles.menuLink + ' ' + styles.active}>Startseite</a>
                                    </li>
                                    <li className={styles.menuItem}><a href="/ueber-uns" onClick={() => showMenu((prevMenu) => !prevMenu)} className={styles.menuLink}>Über Uns</a>
                                    </li>
                                    <li className={styles.menuItem}><a href="/leistungen" onClick={() => showMenu((prevMenu) => !prevMenu)} className={styles.menuLink}>Leistungen</a>
                                    </li>
                                    <li className={styles.menuItem}><a href="/kontakt" onClick={() => showMenu((prevMenu) => !prevMenu)} className={styles.menuLink}>Kontakt</a>
                                    </li>
                                    <li className={styles.menuItem}><a href="/impressum" onClick={() => showMenu((prevMenu) => !prevMenu)} className={styles.menuLink}>Impressum</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </section>
            </header>
        </>
    );
}
