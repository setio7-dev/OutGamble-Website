/* eslint-disable @typescript-eslint/no-explicit-any */
import Swal from "sweetalert2"

type SwalType = {
    status?: 'success' | 'error';
    message?: any;
    typeLink?: 'LinkTo' | 'Reload';
    linkTo?: string;
    isLoading?: boolean;
}

export async function ModernAlert({ status = 'success', message = "Berhasil", typeLink, linkTo, isLoading = true }: SwalType) {
    if (isLoading) {
        Swal.fire({
            timer: 3000,
            title: "Memuat...",
            didOpen: () => {
                Swal.showLoading()
            },
            showConfirmButton: false,

        });

        await new Promise((resolve) => setTimeout(resolve, 3000));
    }

    Swal.fire({
        icon: status,
        title: message,
        confirmButtonColor: status === 'success' ? 'green' : 'red',
        confirmButtonText: "Oke",
    });

    if (typeLink === 'LinkTo' || typeLink === 'Reload') {
        setTimeout(() => {
            if (typeLink === 'LinkTo') {
                window.location.href = `${linkTo}`
            } else {
                window.location.reload();
            }
        }, 3000);
    }
}
