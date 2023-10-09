import React, { createContext, useContext, useState } from "react";
import {
  BucketContext,
  BucketProvider,
  EmployeePropsBucket,
  SalonCartProps,
  SalonTreatment,
} from "../types/type";

const Bucket = createContext<BucketContext>({
  user: null,
  setUser: () => {},
  selectedSalon: null,
  setSelectedSalon: () => {},
  selectedTreatmentBucket: null,
  setSelectedTreatmentBucket: () => {},
  selectedDate: null,
  setSelectedDate: () => {},
  selectedEmployee: null,
  setSelectedEmployee: () => {},
});

export const ContextProvider = ({ children }: BucketProvider) => {
  const [user, setUser] = useState<null>(null);
  const [selectedSalon, setSelectedSalon] = useState<SalonCartProps | null>(
    null
  );
  const [selectedTreatmentBucket, setSelectedTreatmentBucket] = useState<
    SalonTreatment[] | null
  >([]);
  const [selectedEmployee, setSelectedEmployee] =
    useState<EmployeePropsBucket | null>(null);
  const [selectedDate, setSelectedDate] = useState<any>(null);

  console.log(selectedEmployee?.name, "selectedSalon");

  return (
    <Bucket.Provider
      value={{
        user: user,
        setUser: setUser,
        selectedSalon: selectedSalon,
        setSelectedSalon: setSelectedSalon,
        selectedTreatmentBucket: selectedTreatmentBucket,
        setSelectedTreatmentBucket: setSelectedTreatmentBucket,
        selectedEmployee: selectedEmployee,
        setSelectedEmployee: setSelectedEmployee,
        selectedDate: selectedDate,
        setSelectedDate: setSelectedDate,
      }}
    >
      {children}
    </Bucket.Provider>
  );
};

export const useBucket = () => {
  const context = useContext(Bucket);
  if (!context) {
    throw new Error(
      "useTreatmentContext must be used within a TreatmentProvider"
    );
  }
  return context;
};
