// API DOMAIN
export const API_URL = process.env.API_URL as string;

export const C001_URL = (groupId: string) => `/groups/${groupId}/words`;
export const C004_URL = (groupId: string, word: string) => `/groups/${groupId}/words/${word}`;

export const C006_URL = (groupId: string) => `/groups/${groupId}/new`;
export const C007_URL = (groupId: string) => `/groups/${groupId}/test`;
export const C008_URL = (groupId: string) => `/groups/${groupId}/review`;

export const GROUP_ID = 'x001';

export const MODES = {
  New: '1',
  // NewTest: '2',
  AllTest: '3',
  Review: '4',
};