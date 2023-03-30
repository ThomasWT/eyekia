import axios from 'axios';
import {kpiType} from '../dashboards/models/graphtypes'
import { ref } from 'vue';
export default class StatsService {
    private kpis = ref<kpiType[]>();
    private loading = ref<boolean>(false);

    async fetchKpis(path) {
        this.loading.value = true;
        const response = await axios.get<kpiType[]>(`http://localhost:3000/stats/${path}/kpis`, {
            headers: {
                'authorization': sessionStorage.getItem("token")
            }
        });
        this.loading.value = false;
      this.kpis.value = response.data;
    }
  
    getKpis() {
      return this.kpis;
    }

    isLoadingKpi() {
        return this.loading;
      }
}