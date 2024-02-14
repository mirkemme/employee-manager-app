import styles from "./Overlay.module.scss"
import { IOverlayProps } from "@/interfaces/IComponentsProps";

const Overlay = ({handleClick}: IOverlayProps) => {
    return (
        <section className={styles.Overlay} onClick={handleClick}>
        </section>
    )
}

export default Overlay;