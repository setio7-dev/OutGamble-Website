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
        link: string;
    }

    interface userProp {
        id: number;
        username: string;
        fullname: string;    
    }

    interface scanQrProp {
        category: string;
        link: string;
        status: string;
        tingkat_resiko: string;
    }

    interface Window {
        MyCustomGLobal: () => void;
    }
}