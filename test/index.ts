import {expect} from 'chai';
import m from 'mocha';

import RPSSchedule from '../src/index';
import { RpsContext } from 'rpscript-interface';

m.describe('node Scheduler', () => {

  m.it('should convert to html', async function () {
    let md = new RPSSchedule;

    let output = await md.startSchedule(new RpsContext,{},"*/5 * * * * *", () => {
      console.log('schedule at :'+new Date);
    });

  }).timeout(0);

})
