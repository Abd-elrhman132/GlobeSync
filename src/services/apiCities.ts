import { City } from "../contexts/CitiesContext";

const BASE_URL = import.meta.env.VITE_API_URL;

export async function getCities(): Promise<City[]> {
  const res = await fetch(`${BASE_URL}/cities`);
  if (!res.ok) throw new Error("Cities could not be loaded");
  const data = await res.json();
  return data;
}

export async function getCity(id: string): Promise<City> {
  const res = await fetch(`${BASE_URL}/cities/${id}`);
  if (!res.ok) throw new Error("City could not be loaded");
  const data = await res.json();
  return data;
}

export async function createCity(newCity: Omit<City, "id">): Promise<City> {
  const res = await fetch(`${BASE_URL}/cities`, {
    method: "POST",
    body: JSON.stringify(newCity),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error("City could not be created");
  const data = await res.json();
  return data;
}

export async function deleteCity(id: string): Promise<void> {
  const res = await fetch(`${BASE_URL}/cities/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("City could not be deleted");
}
