const crypto = window === undefined ? await import("crypto") : window.crypto
export const uuidV4 = () => crypto.randomUUID()
