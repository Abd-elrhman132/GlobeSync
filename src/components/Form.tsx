import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import styles from "./Form.module.css";
import Button from "./Button";
import BackButton from "./BackButton";
import { useUrlPosition } from "../hooks/useUrlPosition";
import Message from "./Message";
import Spinner from "./Spinner";
import { convertToEmoji } from "../utils/helpers";
import { useCities } from "../contexts/CitiesContext";

const BASE_URL = import.meta.env.VITE_GEO_API_URL;

const citySchema = z.object({
  cityName: z.string().min(2, "City name must be at least 2 characters"),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date",
  }),
  notes: z.string().optional(),
});

type CityFormData = z.infer<typeof citySchema>;

function Form() {
  const [lat, lng] = useUrlPosition();
  const { createCity, isLoading } = useCities();
  const navigate = useNavigate();

  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [country, setCountry] = useState("");
  const [emoji, setEmoji] = useState("");
  const [geocodingError, setGeocodingError] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CityFormData>({
    resolver: zodResolver(citySchema),
    defaultValues: {
      date: new Date().toISOString().split("T")[0],
    },
  });

  useEffect(
    function () {
      if (!lat || !lng) return;

      async function fetchCityData() {
        try {
          setIsLoadingGeocoding(true);
          setGeocodingError("");

          const res = await fetch(
            `${BASE_URL}?latitude=${lat}&longitude=${lng}`,
          );
          const data = await res.json();

          if (!data.countryCode)
            throw new Error(
              "That doesn't seem to be a city. Click somewhere else 😉",
            );

          setValue("cityName", data.city || data.locality || "");
          setCountry(data.countryName);
          setEmoji(convertToEmoji(data.countryCode));
        } catch (err) {
          if (err instanceof Error) setGeocodingError(err.message);
        } finally {
          setIsLoadingGeocoding(false);
        }
      }
      fetchCityData();
    },
    [lat, lng, setValue],
  );

  const onSubmit = async (data: CityFormData) => {
    if (!lat || !lng) return;

    const newCity = {
      ...data,
      date: new Date(data.date).toISOString(),
      country,
      emoji,
      notes: data.notes || "",
      position: { lat: Number(lat), lng: Number(lng) },
    };

    await createCity(newCity);
    navigate("/app/cities");
  };

  if (isLoadingGeocoding) return <Spinner />;

  if (!lat || !lng)
    return <Message message="Start by clicking somewhere on the map" />;

  if (geocodingError) return <Message message={geocodingError} />;

  return (
    <form
      className={`${styles.form} ${isLoading ? styles.loading : ""}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input id="cityName" {...register("cityName")} />
        <span className={styles.flag}>{emoji}</span>
        {errors.cityName && (
          <span className={styles.error}>{errors.cityName.message}</span>
        )}
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to?</label>
        <input id="date" type="date" {...register("date")} />
        {errors.date && (
          <span className={styles.error}>{errors.date.message}</span>
        )}
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip</label>
        <textarea id="notes" {...register("notes")} />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
