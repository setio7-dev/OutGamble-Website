export {}
declare global {
    interface chatbotMessage {
        user: string;
        message: string;
    }

    interface Window {
        MyCustomGLobal: () => void;
    }
}