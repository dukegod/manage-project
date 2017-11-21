/**
 * Created by hui on 2017/11/21.
 */
import Storage from 'react-native-storage';
import { AsyncStorage} from 'react-native';

const storage = new Storage({
  // maximum capacity, default 1000
  size: 2000,
  // Use AsyncStorage for RN, or window.localStorage for web.
  // If not set, data would be lost after reload.
  storageBackend: AsyncStorage,
  // expire time, default 1 day(1000 * 3600 * 24 milliseconds).
  // can be null, which means never expire.
  defaultExpires: null,
  // cache data in the memory. default is true.
  enableCache: true,
  sync : {
    // we'll talk about the details later.
  }
});

const dataList = [{
  recordTime: '2017-10-28',
  recordKm: 1000,
  recordMoney: 10000,
  recordLitre: 350,
},{
  recordTime: '2017-11-28',
  recordKm: 2000,
  recordMoney: 2000,
  recordLitre: 3500,
}]

storage.save({
  key: 'testkey',
  data: dataList,
});

global.storage = storage;