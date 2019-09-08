// API DOMAIN
export const API_URL = process.env.API_URL as string;
export const API_NAME = 'api';

export const A001_URL = (userId: string) => `/users/${userId}`;
export const A002_URL = (userId: string) => `/users/${userId}/history`;
export const A003_URL = (userId: string) => `/users/${userId}/fixdelay`;

export const B002_URL = (user: string) => `/groups/${user}`;
export const B003_URL = (user: string) => `/groups/${user}`;

export const C001_URL = (groupId: string) => `/groups/${groupId}/words`;
export const C004_URL = (groupId: string, word: string) => `/groups/${groupId}/words/${word}`;

export const C006_URL = (groupId: string) => `/groups/${groupId}/new`;
export const C007_URL = (groupId: string) => `/groups/${groupId}/test`;
export const C008_URL = (groupId: string) => `/groups/${groupId}/review`;

export const D001_URL = () => '/image2text';

export const GROUP_ID = 'x001';
export const VERSION = '0.07';

export const MODES = {
  New: '1',
  AllTest: '3',
  Review: '4',
};

export const PAGE_MAX_WORDS = 7;
