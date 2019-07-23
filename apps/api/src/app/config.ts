interface ICongig {
  PORT: number;
  SECRET: string;
  DB_URL: string;
}

export const CONFIG: ICongig = {
  DB_URL: 'edenDB',
  PORT: 3333,
  SECRET: 'chiefeden01'
};
