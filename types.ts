export type UserProfile = {
  dob: string;
  name: string;
  about: string;
  address: string;
  company: string;
};

export type User = {
  id: string;
  email: string;
  profile: UserProfile;
};

export type Column = {
  title: string;
  key: string;
};

export type Row = { [key: string]: any };
