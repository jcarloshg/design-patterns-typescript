import { InstagramLib } from "./InstagramLib";
import { InstagramService } from "./InstagramService";

export class InstagramProxy implements InstagramLib {
  private _instagramService: InstagramService;
  private _photos: string[] = [];

  constructor(instagramService: InstagramService) {
    this._instagramService = instagramService;
  }

  public async getMyPhotos(query: {
    page: number;
    itemsPerPage: number;
  }): Promise<string[]> {
    const newTotal = (query.page + 1) * query.itemsPerPage;

    if (newTotal > this._photos.length) {
      const photos = await this._sendRequestToToInstagramService(query);
      this._updateCache(photos);
    }

    return this._getPhotosFromCache(query);
  }

  // ============================================================
  // helpers methods
  // ============================================================

  private async _sendRequestToToInstagramService(query: {
    page: number;
    itemsPerPage: number;
  }): Promise<string[]> {
    return await this._instagramService.getMyPhotos(query);
  }

  private _getPhotosFromCache(query: {
    page: number;
    itemsPerPage: number;
  }): string[] {
    const start = query.page * query.itemsPerPage;
    const end = start + query.itemsPerPage;
    return this._photos.slice(start, end);
  }

  private _updateCache(photos: string[]) {
    this._photos = this._photos.concat(photos);
    this._photos = Array.from(new Set(this._photos));
  }
}
