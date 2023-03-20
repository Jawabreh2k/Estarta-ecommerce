import { PulseLoader } from "react-spinners";
import styles from "./styles.module.css";

export default function Spinner() {
  return (
    <div className={styles.SpinnerContainer}>
      <PulseLoader
        color="rgba(255, 255, 255, 0.05)"
        size={50}
        speedMultiplier={0}
      />
    </div>
  );
}
