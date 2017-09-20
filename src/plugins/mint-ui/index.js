import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Field } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';
import { Radio } from 'mint-ui';
import { Button } from 'mint-ui';
import { Toast } from 'mint-ui';

Vue.prototype.$toast = Toast;

Vue.use(MintUI);
Vue.use(InfiniteScroll);
Vue.component(Field.name, Field);
Vue.component(Radio.name, Radio);
Vue.component(Button.name, Button);

