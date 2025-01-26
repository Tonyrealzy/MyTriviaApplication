export const logger = (message: any, ...optionalParams: any) => {
  if (import.meta.env.VITE_APP_ENV !== "development") {
    console.log("Check server logs!");
  } else {
    console.log(message, ...optionalParams);
  }
};
