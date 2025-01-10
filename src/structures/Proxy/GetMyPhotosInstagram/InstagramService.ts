import { PHOTOS } from "./helpers/photos";
import { InstagramLib } from "./InstagramLib";

export class InstagramService implements InstagramLib {
  public getMyPhotos(query: {
    page: number;
    itemsPerPage: number;
  }): Promise<string[]> {
    const start = query.page * query.itemsPerPage;
    const end = start + query.itemsPerPage;
    const photos = PHOTOS.slice(start, end);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(photos);
      }, 3000);
    });
  }
}
