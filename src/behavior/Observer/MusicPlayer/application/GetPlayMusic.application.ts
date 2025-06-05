import { EventManagerAction } from "../domain/useCase/PlayMusic/actions/EventManager.action";
import { ManageMusicPlayerUseCase } from "../domain/useCase/PlayMusic/ManageMusicPlayer.useCase";
import { PlayerTS } from "../infrastructure/typescript/models/businessEntity/Player";

export const GetPlayMusicApplicationV1 =
  async (): Promise<ManageMusicPlayerUseCase> => {
    const player = new PlayerTS();
    const manageMusicPlayer = new ManageMusicPlayerUseCase(player);
    return manageMusicPlayer;
  };
