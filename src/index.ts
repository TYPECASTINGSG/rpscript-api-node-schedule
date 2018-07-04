/**
 * @module node-schedule
 */

import schedule, { Job } from 'node-schedule';
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';

@RpsModule("node-schedule")
export default class RPSSchedule {

  @rpsAction({verbName:'start-scheduler'})
  async startSchedule (ctx:RpsContext,opts:Object, spec:string, task:()=>void) : Promise<Job>{
    let job = schedule.scheduleJob(spec,task);
    ctx['node-schedule'] = {job:job};
    
    return job;
  }

}

