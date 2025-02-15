import { Client } from "./Client";
import { HardCoverBookFactory } from "./HardCoverBookFactory/HardCoverBookFactory";
import { SoftCoverBookFactory } from "./SoftCoverBookFactory/SoftCoverBookFactory";

const hardCoverBookFactory = new HardCoverBookFactory();
Client(hardCoverBookFactory);

const softCoverBookFactory = new SoftCoverBookFactory();
Client(softCoverBookFactory);

