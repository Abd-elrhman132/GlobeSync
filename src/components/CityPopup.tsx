import styles from "./Map.module.css";
import { City } from "../contexts/CitiesContext";

interface CityPopupProps {
  city: City;
}

function CityPopup({ city }: CityPopupProps) {
  const { cityName, emoji, activeUsers, status } = city;

  return (
    <div className={styles.popupContent}>
      <div className={styles.popupHeader}>
        <span>{emoji}</span>
        <span className={styles.cityName}>{cityName}</span>
      </div>
      <div className={styles.popupMetrics}>
        <div className={styles.metric}>
          <span className={styles.label}>Active Users:</span>
          <span className={styles.value}>
            {activeUsers?.toLocaleString() ?? "N/A"}
          </span>
        </div>
        <div className={styles.statusRow}>
          <span className={styles.label}>Status:</span>
          <span
            className={`${styles.status} ${
              status === "online" ? styles.online : styles.offline
            }`}
          >
            {status?.toUpperCase() ?? "UNKNOWN"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CityPopup;
