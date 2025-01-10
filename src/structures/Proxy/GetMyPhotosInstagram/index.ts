import { InstagramProxy } from "./InstagramProxy";
import { InstagramService } from "./InstagramService";
import { User } from "./User";

const instagramService = new InstagramService();
const instagramProxy = new InstagramProxy(instagramService);
const user = new User(instagramProxy);

(async () => {
  console.log("\n\nFirst request. Page: 0, items: 10");
  console.log(await user.getMyPhotos({ page: 0, itemsPerPage: 5 }));

  console.log("\n\nSecond request. Page 0 and 10 items");
  console.log(await user.getMyPhotos({ page: 0, itemsPerPage: 5 }));

  console.log("\n\nThird request. Page 1 and 10 items");
  console.log(await user.getMyPhotos({ page: 1, itemsPerPage: 10 }));

  console.log("\n\nFourth request. Page 2 and 10 items");
  console.log(await user.getMyPhotos({ page: 2, itemsPerPage: 10 }));

  console.log("\n\nFifth request. Page 0 and 15 items");
  console.log(await user.getMyPhotos({ page: 0, itemsPerPage: 15 }));
})();
