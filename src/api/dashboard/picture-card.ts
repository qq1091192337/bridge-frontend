import axios from "axios";

export interface PictureCardData {
    id: number;
    location: string;
    device: string;
    createdAt: string;
    image_path: string;
}

export function getPictureCardList(page: number, size: number) {
    return axios.post<PictureCardData[]>(`/api/picture-card/list?pageSize=${size}&pageIndex=${page}`);
}


export function processPicture(imageId: number) {
    return axios.post( '/api/picture-card/process', {
            imageId
    });
}
export function getMask(imageId: number) {
    return axios.get( `/api/picture-card/mask/${imageId}`);
}
export function getRecentUploadsCount() {
    return axios.get( '/api/picture-card/info/recent');
}