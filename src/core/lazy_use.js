import Vue from 'vue'
import './lazy_lib/component_lazy';
import VueStorage from 'vue-ls'
import { storageOptions } from '@/config/storageOptions'

Vue.use(VueStorage, storageOptions)
