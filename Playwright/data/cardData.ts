function getRequiredEnv(name: string): string {
    const value = process.env[name];

    if (!value) {
        throw new Error(`Missing required environment variable: ${name}`);
    }

    return value;
}

export const card = {

    cardHolderName: getRequiredEnv("CARD_HOLDER_NAME"),

    cardNumber: getRequiredEnv("CARD_NUMBER"),

    expiry: getRequiredEnv("CARD_EXPIRY"),

    cvv: getRequiredEnv("CARD_CVV")

};