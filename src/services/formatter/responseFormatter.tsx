export const decodeHtml = (htmlString: string): string => {
  return (
    new DOMParser().parseFromString(htmlString, "text/html").documentElement
      .textContent || ""
  );
};
