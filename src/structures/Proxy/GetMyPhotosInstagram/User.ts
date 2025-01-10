import { InstagramLib } from "./InstagramLib";

export class User {
  constructor(private _instagramLib: InstagramLib) {}

  public async getMyPhotos(query: {
    page: number;
    itemsPerPage: number;
  }): Promise<string[]> {
    return await this._instagramLib.getMyPhotos(query);
  }
}
