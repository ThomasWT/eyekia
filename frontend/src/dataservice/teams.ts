import axios from 'axios';
import {teammember} from '../dashboards/models/graphtypes'
import { ref } from 'vue';
export default class TeamsService {
    private managers = ref<string[]>();
    private loading = ref<boolean>(false);
    private user = ref<teammember>()

    async fetchManagers() {
        this.loading.value = true;
        const response = await axios.get<string[]>(`http://localhost:3000/users/managers`, {
            headers: {
                'authorization': sessionStorage.getItem("token")
            }
        });
        this.loading.value = false;
      this.managers.value = response.data;
    }
  
    getManagers() {
      return this.managers;
    }

    isLoadingManagers() {
        return this.loading;
    }

    
    async fetchUser(id) {
        const response = await axios.get<teammember>(`http://localhost:3000/users/user/${id}`, {
            headers: {
                'authorization': sessionStorage.getItem("token")
            }
        });
      this.user.value = response.data;
    }
  
    getUser() {
      return this.user;
    }
}