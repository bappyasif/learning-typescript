import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
    const { manufacturer, year, model, limit, fuel } = filters;

    // console.log(filters?.manufacturer, filters)

    // console.log("FETCHING")

    // Set the required headers for the API request
    const headers: HeadersInit = {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };

    // Set the required headers for the API request
    const response = await fetch(
        `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
        // `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${filters?.manufacturer}&year=${filters?.year}&model=${filters?.model}&limit=${filters?.limit}&fuel_type=${filters?.fuel}`,
        // `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`,
        // `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera`,
        // `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3`,
        {
            headers: headers,
        }
    );

    // Parse the response as JSON
    const result = await response.json();

    console.log("FETCHING DONE", result)

    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;

    url.searchParams.append('customer', "hrjavascript-mastery" || '');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
}