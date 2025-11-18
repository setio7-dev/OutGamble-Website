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

    interface onlineReportProp {
        id?: number;
        user_id?: number;
        url_link: string;
        category: string;
        contact: string;
        description: string;
        proof: File | null;
    }

    interface offlineReportProp {
        id?: number;
        user_id?: number;
        place: string;
        address: string;
        category_place: string;
        coordinates: string;
        description: string;
        proof: File | null;
        contact: string;
    }

    interface Window {
        MyCustomGLobal: () => void;
    }
}