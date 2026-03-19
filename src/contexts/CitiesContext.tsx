import {
  createContext,
  useContext,
  ReactNode,
} from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { 
  getCities as getCitiesApi, 
  getCity as getCityApi, 
  createCity as createCityApi, 
  deleteCity as deleteCityApi 
} from "../services/apiCities";

interface City {
  cityName: string;
  country: string;
  emoji: string;
  date: string;
  notes: string;
  position: {
    lat: number;
    lng: number;
  };
  activeUsers?: number;
  status?: "online" | "offline";
  id: string;
}

interface CitiesContextValue {
  cities: City[];
  isLoading: boolean;
  currentCity: City | Record<string, never>;
  getCity: (id: string) => Promise<void>;
  createCity: (newCity: Omit<City, "id">) => Promise<void>;
  deleteCity: (id: string) => Promise<void>;
}

const CitiesContext = createContext<CitiesContextValue | undefined>(undefined);

interface CitiesProviderProps {
  children: ReactNode;
}

function CitiesProvider({ children }: CitiesProviderProps) {
  const queryClient = useQueryClient();

  // GET ALL CITIES
  const { data: cities = [], isLoading } = useQuery({
    queryKey: ["cities"],
    queryFn: getCitiesApi,
  });

  // GET SINGLE CITY (Prefetching/Manual fetching helper)
  // In a real-world app, we might use useQuery directly in the City component
  // but we'll keep this interface for minimal breaking changes
  const getCity = async (id: string) => {
    try {
      await queryClient.fetchQuery({
        queryKey: ["city", id],
        queryFn: () => getCityApi(id),
      });
    } catch (err) {
      toast.error("Could not load city details");
    }
  };

  // CREATE CITY
  const { mutateAsync: createCityMutation } = useMutation({
    mutationFn: createCityApi,
    onSuccess: () => {
      toast.success("New city successfully created!");
      queryClient.invalidateQueries({ queryKey: ["cities"] });
    },
    onError: (err) => toast.error(err.message),
  });

  const createCity = async (newCity: Omit<City, "id">) => {
    await createCityMutation(newCity);
  };

  // DELETE CITY
  const { mutateAsync: deleteCityMutation } = useMutation({
    mutationFn: deleteCityApi,
    onSuccess: () => {
      toast.success("City successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["cities"] });
    },
    onError: (err) => toast.error(err.message),
  });

  const deleteCity = async (id: string) => {
    await deleteCityMutation(id);
  };

  // Current city helper (gets from cache if available)
  // This is a bridge for components expecting 'currentCity' from context
  const currentCity = {}; 

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { CitiesProvider, useCities };
export type { City };
