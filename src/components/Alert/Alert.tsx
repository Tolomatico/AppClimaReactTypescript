import { ReactNode } from "react"
import styles from "./Alert.module.css"
type AlertProp={
    children:ReactNode
}


export default function Alert({children}:AlertProp) {
  return (
    <p className={styles.alert}>
        {children}
    </p>
  )
}
