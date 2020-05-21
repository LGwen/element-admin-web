import Vue from "vue";
import "./lazy_lib/component_lazy";
import "./echart/echart_use";
import VueStorage from "vue-ls";
import { storageOptions } from "@/config/storageOptions";

Vue.use(VueStorage, storageOptions);
