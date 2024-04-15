import axios from "axios";

export interface PictureCardData{
    id:number;
    location:string;
    device:string;
    uploadDate:string;
    cover:string;
}
export function getPictureCardList(page:number, size:number){
    return axios.post<PictureCardData[]>(`/api/picture-card/list?pageSize=${size}&pageIndex=${page}`);
}

export function uploadPicture(file: File) {
    const formData = new FormData();
    formData.append('picture', file);

      return axios.post('/api/picture-card/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });


}
