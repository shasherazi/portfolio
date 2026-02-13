export const createSlug = (startDate: Date, title: string) => {
  const datePart = startDate.toISOString().split("T")[0]; // Get YYYY-MM-DD
  const titlePart = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens

  return `${datePart}-${titlePart}`;
};
