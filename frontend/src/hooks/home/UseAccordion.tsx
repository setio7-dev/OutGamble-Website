import { useState } from "react";

export default function UseAccordion() {
    const [selectedData, setSelectedData] = useState<number>(0);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOpen = (number: number) => {
        if (selectedData == number) {
            setSelectedData(number);
            setIsOpen(!isOpen);
        } else {
            setSelectedData(number);
            setIsOpen(true);
        }
    }

    return { handleOpen, isOpen, selectedData }
}
