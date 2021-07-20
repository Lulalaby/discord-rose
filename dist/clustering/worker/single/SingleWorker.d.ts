import { CacheManager } from '../../../socket/CacheManager';
import { BotOptions } from '../../master/Master';
import { Worker } from '../Worker';
import { Shard } from '../../../socket/Shard';
import { SingleSharder } from './SingleSharder';
import { SingleThread } from './SingleThread';
export declare class SingleWorker extends Worker {
    cacheManager: CacheManager;
    sharder: SingleSharder;
    comms: SingleThread;
    constructor(options: BotOptions);
    _beginSingleton(): Promise<void>;
    _waitForShard(shard: Shard): Promise<void>;
    start(): Promise<void>;
    log(msg: any): void;
    debug(msg: any): void;
}
