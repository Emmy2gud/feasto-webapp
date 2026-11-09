export interface SavedAddress {
  id: string;
  /** Short name used on the address button and at checkout. */
  label: string;
  line: string;
  area: string;
}

/** Addresses the demo account has saved. Change the selection from the header. */
export const savedAddresses: SavedAddress[] = [
  { id: "home", label: "Home", line: "12 Herbert Macaulay Way", area: "Yaba" },
  { id: "work", label: "Work", line: "4 Adeola Odeku Street", area: "Victoria Island" },
  { id: "family", label: "Family", line: "27 Ogunlana Drive", area: "Surulere" },
];

export const accountName = "Alex Johnson";
export const accountEmail = "alex.johnson@email.com";
