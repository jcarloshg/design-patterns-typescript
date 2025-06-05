import { GetPlayMusicApplicationV1 } from "./application/GetPlayMusic.application";
import { ManageMusicPlayerUseCase } from "./domain/useCase/PlayMusic/ManageMusicPlayer.useCase";
import { PlayLogListenerConsoleLog } from "./infrastructure/consolelogs/useCase/PlayMusic/actions/PlayLogListener.consoleLog";
import { PrintLogListenerConsoleLog } from "./infrastructure/consolelogs/useCase/PlayMusic/actions/PrintLogListener.consolelog";
import { SimplePrintLyricConsoleLog } from "./infrastructure/consolelogs/useCase/PlayMusic/actions/SimplePrintLyric.consoleLog";
import { PauseLogListenerConsoleLog } from "./infrastructure/consolelogs/useCase/PlayMusic/actions/PauseLogListener.consoleLog";

export const Cliente = async (manageMusicPlayer: ManageMusicPlayerUseCase) => {
  const playLogListener = new PlayLogListenerConsoleLog();
  const pauseLogListener = new PauseLogListenerConsoleLog();
  const printLogListener = new PrintLogListenerConsoleLog();
  const simplePrintLyric = new SimplePrintLyricConsoleLog();

  manageMusicPlayer.playSubscribe(playLogListener);
  manageMusicPlayer.pauseSubscribe(pauseLogListener);
  manageMusicPlayer.reproductionSubscribe(printLogListener);

  await manageMusicPlayer.play();

  const milliseconds = 1000;

  setTimeout(async () => {
    await manageMusicPlayer.pause();
  }, milliseconds * 5);

  setTimeout(async () => {
    manageMusicPlayer.reproductionUnSubscribe(printLogListener);
    manageMusicPlayer.reproductionSubscribe(simplePrintLyric);
    await manageMusicPlayer.play();
  }, milliseconds * 10);

  setTimeout(async () => {
    await manageMusicPlayer.pause();
  }, milliseconds * 15);
};

(async () => {
  const manageMusicPlayer = await GetPlayMusicApplicationV1();
  await Cliente(manageMusicPlayer);
})();
