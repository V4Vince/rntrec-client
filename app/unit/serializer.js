import DS from 'ember-data';
import { ActiveModelSerializer } from 'active-model-adapter';

export default ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    house: {embedded: 'always'},
    expenses: {embedded: 'always' },
    contract: { embedded: 'always'},
  }
});
