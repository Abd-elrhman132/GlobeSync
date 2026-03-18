import CityItem from "./CityItem.tsx";
import styles from "./CityList.module.css";
import Spinner from "./Spinner.tsx";
import Message from "./Message.tsx";
import { useCities } from "../contexts/CitiesContext.tsx";

function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
