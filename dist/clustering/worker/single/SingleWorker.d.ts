import { CacheManager } from '../../../socket/CacheManager';
import { BotOptions } from '../../master/Master';
import { Worker } from '../Worker';
import { Shard } from '../../../socket/Shard';
import { SingleSharder } from './SingleSharder';
export declare class SingleWorker extends Worker<{
    DEBUG: string;
}> {
    cacheManager: CacheManager;
    sharder: SingleSharder;
    comms: any;
    constructor(options: BotOptions);
    _beginSingleton(): Promise<void>;
    _waitForShard(shard: Shard): Promise<void>;
    start(): Promise<void>;
    debug(msg: any): void;
}
