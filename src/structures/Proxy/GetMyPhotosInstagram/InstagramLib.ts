export interface InstagramLib {
  getMyPhotos(query: { page: number; itemsPerPage: number }): Promise<string[]>;
}
