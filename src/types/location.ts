export type Location = {
  id: string;
  name: string;
  userCount: number;
  description: string;
  createdAt: string;
};

export type LocationWithTimezone = Location & { timezone: number };

export type LocationView = LocationWithTimezone & { view?: number };
