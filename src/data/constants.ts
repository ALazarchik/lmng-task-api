export enum TIMEOUTS {
    MOCHA_TIMEOUT = 600000
}

export const HEADERS = {
    Cookie: "auth_device_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyUlE4c2FTcFMyMlJwR243bmk2OWUyMEFBWVkifQ.aP6Kz9IkUXynYDp1gey4WcCYGfRnp2ozHwcQ_UVrjFZOsK9uYGvCbkmru7m3C7bxtYykrqCxStFLKHLwUUmVLUxMGJ8LW-6j4CbEn4mmLnxzUrV5X6Gfoyhw-lE4s-ekLLrB9KseKGMS-AS7pGXAVBKWMnpNzOzKSt8Xvs9grC1n1n71qazmgOlp-vL6_jiICkeRxcYApTKkTZ-IdkkeB6yeU4JUQkHGA56N-Gm7_x2jKnTUsiMfMrIQk8Z1xHDnWaSqOirkRSgLmgrL9kFS-k_pURrp03YfrmEG1W13piQNpgvsUb7Z-eC07xFTkatP0HoJagCljpsbSjDwKvhjXQ; _gcl_au=1.1.1613023959.1687171154; _pin_unauth=dWlkPU1UWTJORGhpWm1NdE1UVXpOQzAwTkRFeExUazJNV1V0TUdGa1pqbGtabVEzTVdKaQ; scarab.visitor=%2270701393C799A5BC%22; auth_session_id=a8cd9cce-872d-46f3-a46b-c72901c9ddfe; _ga=GA1.1.1684284726.1687171155; _ga_EWQV9XEYQY=GS1.1.1688592042.3.0.1688592042.0.0.0",
    "X-Auth-Device-Token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyUlE4c2FTcFMyMlJwR243bmk2OWUyMEFBWVkifQ.aP6Kz9IkUXynYDp1gey4WcCYGfRnp2ozHwcQ_UVrjFZOsK9uYGvCbkmru7m3C7bxtYykrqCxStFLKHLwUUmVLUxMGJ8LW-6j4CbEn4mmLnxzUrV5X6Gfoyhw-lE4s-ekLLrB9KseKGMS-AS7pGXAVBKWMnpNzOzKSt8Xvs9grC1n1n71qazmgOlp-vL6_jiICkeRxcYApTKkTZ-IdkkeB6yeU4JUQkHGA56N-Gm7_x2jKnTUsiMfMrIQk8Z1xHDnWaSqOirkRSgLmgrL9kFS-k_pURrp03YfrmEG1W13piQNpgvsUb7Z-eC07xFTkatP0HoJagCljpsbSjDwKvhjXQ"
}

export const ASSERTION_ERRORS = {
    RESPONSE_STATUS: (statusCode: string | number) => `The response status code does not equal ${statusCode}`,
    RESPONSE_MESSAGE: (message: string | number) => `The error response message does not equal "${message}"`
};

export const ERROR_TEXTS = {
    INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
    INVALID_CREDS: 'Invalid credentials',
}
