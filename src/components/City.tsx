import { useParams } from "react-router-dom";
import styles from "./City.module.css";
import { useQuery } from "@tanstack/react-query";
import { getCity as getCityApi } from "../services/apiCities";
import Spinner from "./Spinner";
import BackButton from "./BackButton";

const formatDate = (date: string | null) => {
  if (!date) return "";
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));
};

function City() {
  const { id } = useParams<{ id: string }>();

  const { data: currentCity, isLoading, error } = useQuery({
    queryKey: ["city", id],
    queryFn: () => getCityApi(id || ""),
    enabled: !!id,
  });

  if (isLoading) return <Spinner />;
  if (error || !currentCity) return <p>Could not load city data.</p>;

  const { cityName, emoji, date, notes } = currentCity;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <BackButton />
      </div>
    </div>
  );
}

export default City;
