<template>
    <tile class="w-[calc(50%-0.75rem)] h-auto mr-3">
        <div class="flex">
            <p class="text-gray-500 font-bold mb-2">Followers by location</p>
        </div>
        <div class="flex h-auto">
            <div class="w-2/3">
                <div class="h-full" id="svgMap"></div>
            </div>
            <div class="w-1/3 pl-8">
                <p class="text-gray-600 font-bold">Top 10 countries</p>
                <ul>
                    <li class="text-gray-600" v-for="country in countries" :key="country.iso"> <country-flag
                            class="!-mt-3 pr-[52px]" :country="country.iso" size='small' /> {{ country.name }}</li>
                </ul>
            </div>
        </div>
    </tile>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import tile from './tile.vue'
import svgMap from 'svgmap';
import 'svgmap/dist/svgMap.min.css';
import CountryFlag from 'vue-country-flag-next'
export default defineComponent({
    name: "mapchart",
    components: {
        tile,
        CountryFlag,
        svgMap
    },
    data(): {countries:any} {
        const countries = [
            { iso: 'dk', name: 'Denmark' },
            { iso: 'ca', name: 'Canada' },
            { iso: 'de', name: 'Germany' },
            { iso: 'us', name: 'United States' },
            { iso: 'au', name: 'Australia' },
            { iso: 'no', name: 'Norway' },
            { iso: 'se', name: 'Swedeb' },
            { iso: 'fi', name: 'Finland' },
            { iso: 'nl', name: 'Holland' },
            { iso: 'es', name: 'Spain' },
        ]
        return {countries};
    },
    mounted() {
        this.$nextTick(() => {
            new svgMap({
                targetElementID: 'svgMap',
                colorMax: '#a855f7',
                colorMin: '#E8D3FB',
                data: {
                    data: {
                        followers: {
                            name: 'Followers',
                        },
                        change: {
                            name: 'Change to month before',
                            format: '{0} %'
                        }
                    },
                    applyData: 'followers',
                    values: {
                        "AF": {
                            "followers": 587,
                            "change": 4.73,
                            "followersAdjusted": 1958,
                            "changeAdjusted": 0.02
                        },
                        "AL": {
                            "followers": 4583,
                            "change": 11.09,
                            "followersAdjusted": 12507,
                            "changeAdjusted": 4.04
                        },
                        "DZ": {
                            "followers": 4293,
                            "change": 10.01,
                            "followersAdjusted": 15237,
                            "changeAdjusted": 0.33
                        },
                        "AO": {
                            "followers": 4408,
                            "change": 26.49,
                            "followersAdjusted": 6753,
                            "changeAdjusted": -2.56
                        },
                        "AG": {
                            "followers": 16702,
                            "change": 3.26,
                            "followersAdjusted": 26231,
                            "changeAdjusted": 2.15
                        },
                        "AR": {
                            "followers": 14467,
                            "change": 13.83,
                            "followersAdjusted": 20876,
                            "changeAdjusted": 1.77
                        },
                        "AM": {
                            "followers": 3861,
                            "change": 9.22,
                            "followersAdjusted": 9456,
                            "changeAdjusted": 7.33
                        },
                        "AU": {
                            "followers": 55707,
                            "change": 7.39,
                            "followersAdjusted": 50334,
                            "changeAdjusted": 0.97
                        },
                        "AT": {
                            "followers": 47290,
                            "change": 5.72,
                            "followersAdjusted": 49869,
                            "changeAdjusted": 2.66
                        },
                        "AZ": {
                            "followers": 4141,
                            "change": 6.29,
                            "followersAdjusted": 17492,
                            "changeAdjusted": -0.91
                        },
                        "BS": {
                            "followers": 31255,
                            "change": 2.21,
                            "followersAdjusted": 31139,
                            "changeAdjusted": 0.31
                        },
                        "BH": {
                            "followers": 24029,
                            "change": 6.32,
                            "followersAdjusted": 48505,
                            "changeAdjusted": 1.02
                        },
                        "BD": {
                            "followers": 1602,
                            "change": 9.79,
                            "followersAdjusted": 4211,
                            "changeAdjusted": 6.1
                        },
                        "BB": {
                            "followers": 17859,
                            "change": 7.83,
                            "followersAdjusted": 18664,
                            "changeAdjusted": 0.64
                        },
                        "BY": {
                            "followers": 5760,
                            "change": 14.69,
                            "followersAdjusted": 18931,
                            "changeAdjusted": 2.52
                        },
                        "BE": {
                            "followers": 43582,
                            "change": 5.3,
                            "followersAdjusted": 46553,
                            "changeAdjusted": 1.13
                        },
                        "BZ": {
                            "followers": 4806,
                            "change": -0.64,
                            "followersAdjusted": 8324,
                            "changeAdjusted": -1.35
                        },
                        "BJ": {
                            "followers": 830,
                            "change": 4.92,
                            "followersAdjusted": 2277,
                            "changeAdjusted": 3.46
                        },
                        "BT": {
                            "followers": 2903,
                            "change": 8.01,
                            "followersAdjusted": 8744,
                            "changeAdjusted": 4.82
                        },
                        "BO": {
                            "followers": 3353,
                            "change": 7.3,
                            "followersAdjusted": 7547,
                            "changeAdjusted": 2.73
                        },
                        "BA": {
                            "followers": 5149,
                            "change": 7.04,
                            "followersAdjusted": 12724,
                            "changeAdjusted": 2.6
                        },
                        "BW": {
                            "followers": 7877,
                            "change": 8.34,
                            "followersAdjusted": 17828,
                            "changeAdjusted": 0.38
                        },
                        "BR": {
                            "followers": 9895,
                            "change": 13.74,
                            "followersAdjusted": 15602,
                            "changeAdjusted": 0.23
                        },
                        "BN": {
                            "followers": 29712,
                            "change": 10.31,
                            "followersAdjusted": 78196,
                            "changeAdjusted": -0.7
                        },
                        "BG": {
                            "followers": 8064,
                            "change": 7.58,
                            "followersAdjusted": 21687,
                            "changeAdjusted": 4.23
                        },
                        "BF": {
                            "followers": 664,
                            "change": 8.11,
                            "followersAdjusted": 1889,
                            "changeAdjusted": 3.55
                        },
                        "BI": {
                            "followers": 312,
                            "change": 4.85,
                            "followersAdjusted": 735,
                            "changeAdjusted": -5.2
                        },
                        "KH": {
                            "followers": 1389,
                            "change": 8.76,
                            "followersAdjusted": 4012,
                            "changeAdjusted": 5.46
                        },
                        "CM": {
                            "followers": 1401,
                            "change": 2.94,
                            "followersAdjusted": 3660,
                            "changeAdjusted": 0.62
                        },
                        "CA": {
                            "followers": 45077,
                            "change": 6.27,
                            "followersAdjusted": 48265,
                            "changeAdjusted": 2.1
                        },
                        "XK": {
                            "followers": 3880,
                            "change": 6.23,
                            "followersAdjusted": 10514,
                            "changeAdjusted": 3.14
                        },
                        "CV": {
                            "followers": 3237,
                            "change": 4.91,
                            "followersAdjusted": 6944,
                            "changeAdjusted": 2.69
                        },
                        "CF": {
                            "followers": 387,
                            "change": 7.65,
                            "followersAdjusted": 677,
                            "changeAdjusted": 2.45
                        },
                        "TD": {
                            "followers": 810,
                            "change": -0.71,
                            "followersAdjusted": 2344,
                            "changeAdjusted": -6.15
                        },
                        "CL": {
                            "followers": 15070,
                            "change": 9.66,
                            "followersAdjusted": 24537,
                            "changeAdjusted": 0.69
                        },
                        "CN": {
                            "followers": 8643,
                            "change": 6.5,
                            "followersAdjusted": 16660,
                            "changeAdjusted": 6.47
                        },
                        "CO": {
                            "followers": 6273,
                            "change": 9.21,
                            "followersAdjusted": 14485,
                            "changeAdjusted": 0.96
                        },
                        "KM": {
                            "followers": 788,
                            "change": 3.09,
                            "followersAdjusted": 1588,
                            "changeAdjusted": 0.25
                        },
                        "CG": {
                            "followers": 1958,
                            "change": 6.66,
                            "followersAdjusted": 6642,
                            "changeAdjusted": -7.2
                        },
                        "CR": {
                            "followers": 11685,
                            "change": -0.77,
                            "followersAdjusted": 16877,
                            "changeAdjusted": 2.24
                        },
                        "HR": {
                            "followers": 13138,
                            "change": 6.7,
                            "followersAdjusted": 24423,
                            "changeAdjusted": 3.15
                        },
                        "CY": {
                            "followers": 24976,
                            "change": 5.65,
                            "followersAdjusted": 37023,
                            "changeAdjusted": 3.95
                        },
                        "CZ": {
                            "followers": 20152,
                            "change": 8.9,
                            "followersAdjusted": 35512,
                            "changeAdjusted": 4.23
                        },
                        "CD": {
                            "followers": 478,
                            "change": 2.32,
                            "followersAdjusted": 790,
                            "changeAdjusted": 0.2
                        },
                        "DK": {
                            "followers": 56444,
                            "change": 4.97,
                            "followersAdjusted": 49883,
                            "changeAdjusted": 1.49
                        },
                        "DJ": {
                            "followers": 1989,
                            "change": 4.52,
                            "followersAdjusted": 3559,
                            "changeAdjusted": 5.19
                        },
                        "DM": {
                            "followers": 7921,
                            "change": -3.63,
                            "followersAdjusted": 11102,
                            "changeAdjusted": -4.69
                        },
                        "DO": {
                            "followers": 7375,
                            "change": 3.67,
                            "followersAdjusted": 16944,
                            "changeAdjusted": 3.5
                        },
                        "EC": {
                            "followers": 6098,
                            "change": 2.21,
                            "followersAdjusted": 11482,
                            "changeAdjusted": 1.29
                        },
                        "EG": {
                            "followers": 2501,
                            "change": -32.17,
                            "followersAdjusted": 12671,
                            "changeAdjusted": 2.36
                        },
                        "SV": {
                            "followers": 4400,
                            "change": 4.06,
                            "followersAdjusted": 8948,
                            "changeAdjusted": 1.88
                        },
                        "GQ": {
                            "followers": 12727,
                            "change": 2.65,
                            "followersAdjusted": 36017,
                            "changeAdjusted": -7.97
                        },
                        "ER": {
                            "followers": 980,
                            "change": 13.88,
                            "followersAdjusted": 1581,
                            "changeAdjusted": 2.73
                        },
                        "EE": {
                            "followers": 19840,
                            "change": 11.47,
                            "followersAdjusted": 31749,
                            "changeAdjusted": 5.08
                        },
                        "ET": {
                            "followers": 873,
                            "change": 8.82,
                            "followersAdjusted": 2161,
                            "changeAdjusted": 8.43
                        },
                        "FM": {
                            "followers": 3200,
                            "change": 1.45,
                            "followersAdjusted": 3393,
                            "changeAdjusted": 1.37
                        },
                        "FJ": {
                            "followers": 5740,
                            "change": 7.44,
                            "followersAdjusted": 9777,
                            "changeAdjusted": 3.08
                        },
                        "FI": {
                            "followers": 46017,
                            "change": 5.75,
                            "followersAdjusted": 44333,
                            "changeAdjusted": 2.63
                        },
                        "FR": {
                            "followers": 39869,
                            "change": 4.35,
                            "followersAdjusted": 43760,
                            "changeAdjusted": 1.46
                        },
                        "GA": {
                            "followers": 7972,
                            "change": 6.96,
                            "followersAdjusted": 19254,
                            "changeAdjusted": -1.33
                        },
                        "GM": {
                            "followers": 480,
                            "change": 1.45,
                            "followersAdjusted": 1713,
                            "changeAdjusted": 0.56
                        },
                        "GE": {
                            "followers": 4099,
                            "change": 5.86,
                            "followersAdjusted": 10747,
                            "changeAdjusted": 5.07
                        },
                        "DE": {
                            "followers": 44550,
                            "change": 5.44,
                            "followersAdjusted": 50425,
                            "changeAdjusted": 2.07
                        },
                        "GH": {
                            "followers": 1663,
                            "change": 7.18,
                            "followersAdjusted": 4729,
                            "changeAdjusted": 6.28
                        },
                        "GR": {
                            "followers": 18637,
                            "change": 4.26,
                            "followersAdjusted": 27737,
                            "changeAdjusted": 1.56
                        },
                        "GD": {
                            "followers": 10360,
                            "change": 5.1,
                            "followersAdjusted": 14926,
                            "changeAdjusted": 3.04
                        },
                        "GT": {
                            "followers": 4472,
                            "change": 7.84,
                            "followersAdjusted": 8145,
                            "changeAdjusted": 0.81
                        },
                        "GN": {
                            "followers": 749,
                            "change": 11.88,
                            "followersAdjusted": 2041,
                            "changeAdjusted": 4.09
                        },
                        "GW": {
                            "followers": 794,
                            "change": 13.43,
                            "followersAdjusted": 1845,
                            "changeAdjusted": 3.57
                        },
                        "GY": {
                            "followers": 4710,
                            "change": 3.24,
                            "followersAdjusted": 8161,
                            "changeAdjusted": 1.55
                        },
                        "HT": {
                            "followers": 784,
                            "change": 3.96,
                            "followersAdjusted": 1815,
                            "changeAdjusted": -0.03
                        },
                        "HN": {
                            "followers": 2766,
                            "change": 4.66,
                            "followersAdjusted": 5562,
                            "changeAdjusted": 3.17
                        },
                        "HK": {
                            "followers": 46109,
                            "change": 6.01,
                            "followersAdjusted": 61393,
                            "changeAdjusted": 2.9
                        },
                        "HU": {
                            "followers": 15531,
                            "change": 3.16,
                            "followersAdjusted": 29474,
                            "changeAdjusted": 4.32
                        },
                        "IS": {
                            "followers": 70332,
                            "change": 16.46,
                            "followersAdjusted": 51841,
                            "changeAdjusted": 2.87
                        },
                        "IN": {
                            "followers": 1983,
                            "change": 13.35,
                            "followersAdjusted": 7183,
                            "changeAdjusted": 5.43
                        },
                        "ID": {
                            "followers": 3876,
                            "change": 7.53,
                            "followersAdjusted": 12377,
                            "changeAdjusted": 4.33
                        },
                        "IR": {
                            "followers": 5305,
                            "change": 5.53,
                            "followersAdjusted": 20200,
                            "changeAdjusted": 3.24
                        },
                        "IQ": {
                            "followers": 5088,
                            "change": 12.24,
                            "followersAdjusted": 16954,
                            "changeAdjusted": -3.79
                        },
                        "IE": {
                            "followers": 70638,
                            "change": 9.02,
                            "followersAdjusted": 75539,
                            "changeAdjusted": 6.92
                        },
                        "IL": {
                            "followers": 40258,
                            "change": 8.24,
                            "followersAdjusted": 36340,
                            "changeAdjusted": 1.77
                        },
                        "IT": {
                            "followers": 31984,
                            "change": 4.31,
                            "followersAdjusted": 38140,
                            "changeAdjusted": 1.59
                        },
                        "CI": {
                            "followers": 1617,
                            "change": 8.14,
                            "followersAdjusted": 3883,
                            "changeAdjusted": 5.28
                        },
                        "JM": {
                            "followers": 5048,
                            "change": 2,
                            "followersAdjusted": 9163,
                            "changeAdjusted": 0.67
                        },
                        "JP": {
                            "followers": 38440,
                            "change": -1.4,
                            "followersAdjusted": 42832,
                            "changeAdjusted": 1.94
                        },
                        "JO": {
                            "followers": 5678,
                            "change": 2.31,
                            "followersAdjusted": 12494,
                            "changeAdjusted": 0.13
                        },
                        "KZ": {
                            "followers": 8841,
                            "change": 18.57,
                            "followersAdjusted": 26252,
                            "changeAdjusted": 2.87
                        },
                        "KE": {
                            "followers": 1702,
                            "change": 9.66,
                            "followersAdjusted": 3491,
                            "changeAdjusted": 2.29
                        },
                        "KI": {
                            "followers": 1721,
                            "change": 6.42,
                            "followersAdjusted": 1976,
                            "changeAdjusted": 0.43
                        },
                        "KW": {
                            "followers": 26005,
                            "change": 5.6,
                            "followersAdjusted": 66163,
                            "changeAdjusted": -4.31
                        },
                        "KG": {
                            "followers": 1144,
                            "change": 7.19,
                            "followersAdjusted": 3667,
                            "changeAdjusted": 3.05
                        },
                        "LA": {
                            "followers": 2543,
                            "change": 5.2,
                            "followersAdjusted": 7366,
                            "changeAdjusted": 5.38
                        },
                        "LV": {
                            "followers": 15547,
                            "change": 10.98,
                            "followersAdjusted": 27644,
                            "changeAdjusted": 5.58
                        },
                        "LB": {
                            "followers": 11408,
                            "change": 2.73,
                            "followersAdjusted": 19439,
                            "changeAdjusted": 0.63
                        },
                        "LS": {
                            "followers": 1425,
                            "change": 12.94,
                            "followersAdjusted": 3581,
                            "changeAdjusted": 1.78
                        },
                        "LR": {
                            "followers": 729,
                            "change": -2.12,
                            "followersAdjusted": 1354,
                            "changeAdjusted": -0.05
                        },
                        "LY": {
                            "followers": 4859,
                            "change": 67.32,
                            "followersAdjusted": 9987,
                            "changeAdjusted": 69.48
                        },
                        "LT": {
                            "followers": 16730,
                            "change": 12.14,
                            "followersAdjusted": 32299,
                            "changeAdjusted": 4.38
                        },
                        "LU": {
                            "followers": 105803,
                            "change": 3.94,
                            "followersAdjusted": 106374,
                            "changeAdjusted": 2.27
                        },
                        "MO": {
                            "followers": 77451,
                            "change": 10.1,
                            "followersAdjusted": 111629,
                            "changeAdjusted": 9.42
                        },
                        "MK": {
                            "followers": 5474,
                            "change": 5.51,
                            "followersAdjusted": 14914,
                            "changeAdjusted": -0.06
                        },
                        "MG": {
                            "followers": 448,
                            "change": 11.5,
                            "followersAdjusted": 1551,
                            "changeAdjusted": 1.37
                        },
                        "MW": {
                            "followers": 324,
                            "change": 10.17,
                            "followersAdjusted": 1167,
                            "changeAdjusted": 1.13
                        },
                        "MY": {
                            "followers": 9813,
                            "change": 4.68,
                            "followersAdjusted": 29041,
                            "changeAdjusted": 4.55
                        },
                        "MV": {
                            "followers": 12527,
                            "change": 5.17,
                            "followersAdjusted": 19151,
                            "changeAdjusted": 2.98
                        },
                        "ML": {
                            "followers": 811,
                            "change": 5.62,
                            "followersAdjusted": 2170,
                            "changeAdjusted": 2.31
                        },
                        "MT": {
                            "followers": 27250,
                            "change": 8.83,
                            "followersAdjusted": 41945,
                            "changeAdjusted": 6.26
                        },
                        "MH": {
                            "followers": 3625,
                            "change": 8.21,
                            "followersAdjusted": 3439,
                            "changeAdjusted": 1.83
                        },
                        "MR": {
                            "followers": 1318,
                            "change": 5.15,
                            "followersAdjusted": 4444,
                            "changeAdjusted": 0.52
                        },
                        "MU": {
                            "followers": 9794,
                            "change": 1.88,
                            "followersAdjusted": 21640,
                            "changeAdjusted": 3.67
                        },
                        "MX": {
                            "followers": 9304,
                            "change": 5.64,
                            "followersAdjusted": 19903,
                            "changeAdjusted": 0.91
                        },
                        "MD": {
                            "followers": 2280,
                            "change": 19.51,
                            "followersAdjusted": 5661,
                            "changeAdjusted": 4.24
                        },
                        "MN": {
                            "followers": 3640,
                            "change": -0.75,
                            "followersAdjusted": 12979,
                            "changeAdjusted": 3.65
                        },
                        "ME": {
                            "followers": 7647,
                            "change": 8.8,
                            "followersAdjusted": 17735,
                            "changeAdjusted": 4.16
                        },
                        "MA": {
                            "followers": 3151,
                            "change": 4.89,
                            "followersAdjusted": 8567,
                            "changeAdjusted": 2.96
                        },
                        "MZ": {
                            "followers": 429,
                            "change": 9.5,
                            "followersAdjusted": 1244,
                            "changeAdjusted": 0.09
                        },
                        "MM": {
                            "followers": 1264,
                            "change": 4.41,
                            "followersAdjusted": 6244,
                            "changeAdjusted": 5.82
                        },
                        "NA": {
                            "followers": 5413,
                            "change": 14.96,
                            "followersAdjusted": 11312,
                            "changeAdjusted": -3.12
                        },
                        "NR": {
                            "followers": 8575,
                            "change": 9.6,
                            "followersAdjusted": 12002,
                            "changeAdjusted": 1.22
                        },
                        "NP": {
                            "followers": 834,
                            "change": 14.45,
                            "followersAdjusted": 2679,
                            "changeAdjusted": 6.41
                        },
                        "NL": {
                            "followers": 48346,
                            "change": 5.89,
                            "followersAdjusted": 53635,
                            "changeAdjusted": 2.83
                        },
                        "NZ": {
                            "followers": 41593,
                            "change": 6.51,
                            "followersAdjusted": 38934,
                            "changeAdjusted": 2.03
                        },
                        "NI": {
                            "followers": 2207,
                            "change": 2.57,
                            "followersAdjusted": 5849,
                            "changeAdjusted": 3.82
                        },
                        "NE": {
                            "followers": 440,
                            "change": 6.29,
                            "followersAdjusted": 1164,
                            "changeAdjusted": 1.37
                        },
                        "NG": {
                            "followers": 1994,
                            "change": -9.68,
                            "followersAdjusted": 5929,
                            "changeAdjusted": -1.76
                        },
                        "NO": {
                            "followers": 74941,
                            "change": 6.07,
                            "followersAdjusted": 71831,
                            "changeAdjusted": 0.87
                        },
                        "OM": {
                            "followers": 17973,
                            "change": 0.64,
                            "followersAdjusted": 45157,
                            "changeAdjusted": -2.23
                        },
                        "PK": {
                            "followers": 1541,
                            "change": 6.95,
                            "followersAdjusted": 5358,
                            "changeAdjusted": 3.58
                        },
                        "PW": {
                            "followers": 17096,
                            "change": 0.27,
                            "followersAdjusted": 15934,
                            "changeAdjusted": -2.06
                        },
                        "PA": {
                            "followers": 15089,
                            "change": 5.35,
                            "followersAdjusted": 25351,
                            "changeAdjusted": 3.82
                        },
                        "PG": {
                            "followers": 2861,
                            "change": 2.51,
                            "followersAdjusted": 3674,
                            "changeAdjusted": 0.46
                        },
                        "PY": {
                            "followers": 4260,
                            "change": 6.47,
                            "followersAdjusted": 9826,
                            "changeAdjusted": 3.06
                        },
                        "PE": {
                            "followers": 6199,
                            "change": 8.93,
                            "followersAdjusted": 13334,
                            "changeAdjusted": 1.31
                        },
                        "PH": {
                            "followers": 2976,
                            "change": 0.78,
                            "followersAdjusted": 8315,
                            "changeAdjusted": 5.15
                        },
                        "PL": {
                            "followers": 13822,
                            "change": 11.37,
                            "followersAdjusted": 29521,
                            "changeAdjusted": 4.73
                        },
                        "PT": {
                            "followers": 21161,
                            "change": 3.68,
                            "followersAdjusted": 30417,
                            "changeAdjusted": 3.08
                        },
                        "PR": {
                            "followers": 30488,
                            "change": -0.98,
                            "followersAdjusted": 37339,
                            "changeAdjusted": -2.35
                        },
                        "QA": {
                            "followers": 60804,
                            "change": 4.39,
                            "followersAdjusted": 124529,
                            "changeAdjusted": -2.31
                        },
                        "RO": {
                            "followers": 10757,
                            "change": 13.18,
                            "followersAdjusted": 24508,
                            "changeAdjusted": 7.49
                        },
                        "RU": {
                            "followers": 10608,
                            "change": 19.19,
                            "followersAdjusted": 27834,
                            "changeAdjusted": 1.5
                        },
                        "RW": {
                            "followers": 772,
                            "change": 5.2,
                            "followersAdjusted": 2080,
                            "changeAdjusted": 3.7
                        },
                        "KN": {
                            "followers": 16296,
                            "change": 1.9,
                            "followersAdjusted": 26845,
                            "changeAdjusted": 1.71
                        },
                        "LC": {
                            "followers": 9607,
                            "change": 1.99,
                            "followersAdjusted": 14450,
                            "changeAdjusted": 2.51
                        },
                        "VC": {
                            "followers": 7270,
                            "change": 3.99,
                            "followersAdjusted": 11491,
                            "changeAdjusted": 0.7
                        },
                        "WS": {
                            "followers": 4253,
                            "change": 5.93,
                            "followersAdjusted": 5740,
                            "changeAdjusted": 1.8
                        },
                        "SM": {
                            "followers": 47406,
                            "change": 3.8,
                            "followersAdjusted": 59466,
                            "changeAdjusted": 1.65
                        },
                        "ST": {
                            "followers": 1785,
                            "change": 5.7,
                            "followersAdjusted": 3180,
                            "changeAdjusted": 2.58
                        },
                        "SA": {
                            "followers": 21120,
                            "change": 3.95,
                            "followersAdjusted": 54777,
                            "changeAdjusted": -2.63
                        },
                        "SN": {
                            "followers": 1038,
                            "change": 8.73,
                            "followersAdjusted": 2727,
                            "changeAdjusted": 4.39
                        },
                        "RS": {
                            "followers": 5899,
                            "change": 8.71,
                            "followersAdjusted": 15000,
                            "changeAdjusted": 1.83
                        },
                        "SC": {
                            "followers": 15686,
                            "change": 2.97,
                            "followersAdjusted": 28779,
                            "changeAdjusted": 3.75
                        },
                        "SL": {
                            "followers": 492,
                            "change": -5.88,
                            "followersAdjusted": 1553,
                            "changeAdjusted": 1.35
                        },
                        "SG": {
                            "followers": 57713,
                            "change": 4.48,
                            "followersAdjusted": 93906,
                            "changeAdjusted": 2.22
                        },
                        "SK": {
                            "followers": 17664,
                            "change": 6.73,
                            "followersAdjusted": 33025,
                            "changeAdjusted": 3.61
                        },
                        "SI": {
                            "followers": 23654,
                            "change": 9.17,
                            "followersAdjusted": 34408,
                            "changeAdjusted": 4.93
                        },
                        "SB": {
                            "followers": 2081,
                            "change": 1.18,
                            "followersAdjusted": 2157,
                            "changeAdjusted": 1.29
                        },
                        "SO": {
                            "followers": 486,
                            "change": 6.38,
                            "followersAdjusted": 1229,
                            "changeAdjusted": -1.82
                        },
                        "ZA": {
                            "followers": 6180,
                            "change": 16.25,
                            "followersAdjusted": 13545,
                            "changeAdjusted": -0.07
                        },
                        "KR": {
                            "followers": 29891,
                            "change": 8.56,
                            "followersAdjusted": 39434,
                            "changeAdjusted": 2.72
                        },
                        "SS": {
                            "followers": 228,
                            "change": -18.73,
                            "followersAdjusted": 1489,
                            "changeAdjusted": -12.82
                        },
                        "ES": {
                            "followers": 28359,
                            "change": 6.31,
                            "followersAdjusted": 38286,
                            "changeAdjusted": 3.01
                        },
                        "LK": {
                            "followers": 4085,
                            "change": 6.95,
                            "followersAdjusted": 12811,
                            "changeAdjusted": 3.46
                        },
                        "SD": {
                            "followers": 1428,
                            "change": -1.91,
                            "followersAdjusted": 4586,
                            "changeAdjusted": 0.82
                        },
                        "SR": {
                            "followers": 5746,
                            "change": 0.76,
                            "followersAdjusted": 13876,
                            "changeAdjusted": -0.87
                        },
                        "SZ": {
                            "followers": 3915,
                            "change": 15.19,
                            "followersAdjusted": 9884,
                            "changeAdjusted": -0.67
                        },
                        "SE": {
                            "followers": 53218,
                            "change": 3.39,
                            "followersAdjusted": 51475,
                            "changeAdjusted": 1.68
                        },
                        "CH": {
                            "followers": 80591,
                            "change": 0.35,
                            "followersAdjusted": 61422,
                            "changeAdjusted": 0.24
                        },
                        "TW": {
                            "followers": 24577,
                            "change": 9.03,
                            "followersAdjusted": 50294,
                            "changeAdjusted": 2.51
                        },
                        "TJ": {
                            "followers": 824,
                            "change": 2.54,
                            "followersAdjusted": 3211,
                            "changeAdjusted": 5.06
                        },
                        "TZ": {
                            "followers": 1034,
                            "change": 5.58,
                            "followersAdjusted": 3240,
                            "changeAdjusted": 2.96
                        },
                        "TH": {
                            "followers": 6591,
                            "change": 10.39,
                            "followersAdjusted": 17855,
                            "changeAdjusted": 3.68
                        },
                        "TL": {
                            "followers": 2104,
                            "change": 1.19,
                            "followersAdjusted": 5444,
                            "changeAdjusted": -2.67
                        },
                        "TG": {
                            "followers": 611,
                            "change": 4.24,
                            "followersAdjusted": 1659,
                            "changeAdjusted": 1.95
                        },
                        "TO": {
                            "followers": 4177,
                            "change": 5.56,
                            "followersAdjusted": 5608,
                            "changeAdjusted": 2.26
                        },
                        "TT": {
                            "followers": 15769,
                            "change": -3.46,
                            "followersAdjusted": 31367,
                            "changeAdjusted": -2.58
                        },
                        "TN": {
                            "followers": 3496,
                            "change": -5.24,
                            "followersAdjusted": 11755,
                            "changeAdjusted": 0.85
                        },
                        "TR": {
                            "followers": 10512,
                            "change": -2.82,
                            "followersAdjusted": 26893,
                            "changeAdjusted": 5.68
                        },
                        "TM": {
                            "followers": 6643,
                            "change": 3.59,
                            "followersAdjusted": 18126,
                            "changeAdjusted": 4.86
                        },
                        "TV": {
                            "followers": 3638,
                            "change": 2.24,
                            "followersAdjusted": 3807,
                            "changeAdjusted": 2.34
                        },
                        "UG": {
                            "followers": 699,
                            "change": 1.04,
                            "followersAdjusted": 2354,
                            "changeAdjusted": 2.86
                        },
                        "UA": {
                            "followers": 2583,
                            "change": 17.46,
                            "followersAdjusted": 8713,
                            "changeAdjusted": 3.02
                        },
                        "AE": {
                            "followers": 37226,
                            "change": 5.21,
                            "followersAdjusted": 67741,
                            "changeAdjusted": -0.86
                        },
                        "GB": {
                            "followers": 39735,
                            "change": -1.96,
                            "followersAdjusted": 44117,
                            "changeAdjusted": 1.21
                        },
                        "US": {
                            "followers": 59501,
                            "change": 3.37,
                            "followersAdjusted": 59501,
                            "changeAdjusted": 1.48
                        },
                        "UY": {
                            "followers": 16722,
                            "change": 11.02,
                            "followersAdjusted": 22371,
                            "changeAdjusted": 2.74
                        },
                        "UZ": {
                            "followers": 1491,
                            "change": -28.81,
                            "followersAdjusted": 6929,
                            "changeAdjusted": 3.89
                        },
                        "VU": {
                            "followers": 3094,
                            "change": 6.51,
                            "followersAdjusted": 2739,
                            "changeAdjusted": 2.33
                        },
                        "VE": {
                            "followers": 6684,
                            "change": -12.16,
                            "followersAdjusted": 12114,
                            "changeAdjusted": -15.3
                        },
                        "VN": {
                            "followers": 2354,
                            "change": 8.37,
                            "followersAdjusted": 6913,
                            "changeAdjusted": 5.78
                        },
                        "YE": {
                            "followers": 551,
                            "change": -23.23,
                            "followersAdjusted": 1287,
                            "changeAdjusted": -16.17
                        },
                        "ZM": {
                            "followers": 1480,
                            "change": 18.11,
                            "followersAdjusted": 3996,
                            "changeAdjusted": 0.95
                        },
                        "ZW": {
                            "followers": 1176,
                            "change": 5.78,
                            "followersAdjusted": 2283,
                            "changeAdjusted": 1.02
                        }
                    }
                }
            })
        })

    }
})
</script>

<style lang="scss">
.svgMap-map-wrapper {
    background-color: white;
}

.svgMap-map-controls-wrapper {
    display: none !important;
}
.svgMap-tooltip {
    border-radius: 15px;
    border-bottom: 0;
    box-shadow: 0 0 7px 6px #7474742e;
    border: 2px solid #a855f7;
}
</style>