import Vue from 'vue'
import App from './App.vue'

import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
    state: {
        elements: [
            {
                id: 1,
                content: "",
                type: "trafic",
                json: {
                    "media": {
                        "id": "30",
                        "creator": "20100",
                        "owner": "",
                        "name": "azerty",
                        "duration": "5",
                        "lon": "2.3488",
                        "lat": "48.8534",
                        "zoom": "11",
                        "theme": "night",
                        "title_map": "Pepito",
                        "location": ""
                    },
                    "name_media": "mediatrafic1",
                    "type_viewer": "viewer"
                },
                ratio: true,
                toolbarVisibility: "none",
                color: 'hsl(150,61%,48%)',
                zindex: 1,
                hover: false,
            },
            {
                id: 2,
                content: "",
                type: "empty",
                json: {
                    "media": {
                        "id": "31",
                        "creator": "20100",
                        "owner": "",
                        "name": "azerty",
                        "duration": "5",
                        "lon": "13.404954",
                        "lat": "52.520007",
                        "zoom": "11",
                        "theme": "night",
                        "title_map": "Pepito",
                        "location": ""
                    },
                    "name_media": "mediaempty1",
                    "type_viewer": "viewer"
                },
                ratio: true,
                toolbarVisibility: "none",
                color: 'hsl(150,61%,48%)',
                zindex: 1,
                hover: false,
            },
            {
                id: 3,
                content: "",
                type: "trafic",
                json: {
                    "media": {
                        "id": "31",
                        "creator": "20100",
                        "owner": "",
                        "name": "azerty",
                        "duration": "5",
                        "lon": "13.404954",
                        "lat": "52.520007",
                        "zoom": "11",
                        "theme": "night",
                        "title_map": "Pepito",
                        "location": ""
                    },
                    "name_media": "mediatrafic2",
                    "type_viewer": "viewer"
                },
                ratio: true,
                toolbarVisibility: "none",
                color: 'hsl(150,61%,48%)',
                zindex: 1,
                hover: false,
            }
        ],
        currentElement :   {
            id: 1,
            content: "",
            type: "empty",
            json: {
                "media": {
                    "id": "30",
                    "creator": "20100",
                    "owner": "",
                    "name": "azerty",
                    "duration": "60",
                    "lon": "115.1722551",
                    "lat": "-8.738312299999999",
                    "zoom": "11",
                    "theme": "night",
                    "title_map": "Pepito",
                    "location": ""
                },
                "name_media": "media_traficx30x6128b0461b1c3",
                "type_viewer": "viewer"
            },
            ratio: true,
            toolbarVisibility: "none",
            color: 'hsl(150,61%,48%)',
            zindex: 1,
            hover: false,
        },
        indiceElement:'',
    },
    mutations: {
        initBoucle() {
            this.state.currentElement = this.state.elements[0];
            this.state.indiceElement = 0;
            console.log(this.state.currentElement);
            console.log("couscous");
            setTimeout(function () { this.dispatch('nextMedia');  }.bind(this), 2000)
        },
        nextMedia() {
            console.log("next");
            if (this.state.indiceElement === this.state.elements.length-1) {
                this.state.indiceElement = 0;
            }
            else {
                this.state.indiceElement++;
            }
            this.state.currentElement = this.state.elements[this.state.indiceElement];

            console.log(this.state.currentElement)
            setTimeout(function () { this.dispatch('nextMedia');  }.bind(this), 2000)

        }

    },
    actions: {
            nextMedia (context) {
                context.commit('nextMedia')
        }
    }
})

new Vue({
    store: store,
    render: h => h(App),
}).$mount('#app')
