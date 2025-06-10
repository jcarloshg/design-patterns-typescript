import {
  DecreaseVolume,
  IncraseVolume,
  DecreaseBrightness,
  IncraseBrightness,
} from "./actions";
import { PhysicsButtonsInvoker } from "./PhysicsButtons.Invoker";
import { SmartPhoneReceiver } from "./SmartPhone.receiver";
import { UIInvoker } from "./UI.Invoker";

export const Client = async () => {
  // Crear el receptor
  const smartPhoneReceiver = new SmartPhoneReceiver();

  // Crear los comandos
  const increaseVolumeCommand = new IncraseVolume(smartPhoneReceiver);
  const decreaseVolumeCommand = new DecreaseVolume(smartPhoneReceiver);
  const increaseBrightnessCommand = new IncraseBrightness(smartPhoneReceiver);
  const decreaseBrightnessCommand = new DecreaseBrightness(smartPhoneReceiver);

  // Crear los invocadores
  const physicsButtonsInvoker = new PhysicsButtonsInvoker(
    increaseVolumeCommand,
    decreaseVolumeCommand
  );
  const uIInvoker = new UIInvoker(
    increaseVolumeCommand,
    decreaseVolumeCommand,
    increaseBrightnessCommand,
    decreaseBrightnessCommand
  );

  // Simular acciones del usuario
  console.log("\n\nUser's actions with physics buttons");
  physicsButtonsInvoker.increaseVolume();
  physicsButtonsInvoker.increaseVolume();
  physicsButtonsInvoker.increaseVolume();
  physicsButtonsInvoker.decreaseVolume();

  console.log("\n\nUser's actions with UI buttons");
  uIInvoker.increaseVolume();
  uIInvoker.increaseVolume();
  uIInvoker.decreaseVolume();
  uIInvoker.decreaseBrightness();
  uIInvoker.decreaseBrightness();
  uIInvoker.decreaseBrightness();
  uIInvoker.increaseBrightness();
};

(async () => {
  await Client();
})();
