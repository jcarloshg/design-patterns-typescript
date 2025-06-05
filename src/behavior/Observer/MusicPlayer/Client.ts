import { GetPlayMusicApplicationV1 } from "./application/GetPlayMusic.application";
import { ManageMusicPlayerUseCase } from "./domain/useCase/PlayMusic/ManageMusicPlayer.useCase";

export const Cliente = async (manageMusicPlayer: ManageMusicPlayerUseCase) => {
  await manageMusicPlayer.play();

  setTimeout(async () => {
    await manageMusicPlayer.pause();
  }, 50000);
};

(async () => {
  const manageMusicPlayer = await GetPlayMusicApplicationV1();
  await Cliente(manageMusicPlayer);
})();
