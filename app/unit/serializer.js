import DS from 'ember-data';
import { ActiveModelSerializer } from 'active-model-adapter';

export default ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    //if house:{embedded: 'always'} ember will give maxmum stack error. However, current config causes street name will disappear on page refresh
    house: { serialize: 'ids', deserialize: 'records'},
    expenses: {embedded: 'always' },
    contract: { embedded: 'always'},
  }
});
