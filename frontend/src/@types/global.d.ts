export {}
declare global {
    interface chatbotMessage {
        user: string;
        message: string;
    }

    interface communityProp {
        id: number;
        name: string;
        description: string;
        image_thumbnail: string;
        image_logo: string;
    }

    interface Window {
        MyCustomGLobal: () => void;
    }

}