new Vue({
    el: "#app",
    data: {
        avaiableStatus: ["cancel", "confirmed", "preparing", "checking", "delivering", "delivered", "completed"],
        allBills: [],
        interval: null
    },

    mounted() {
        this.getAllBills();
        this.autoUpdate();
    },

    beforeDestroy() {
        clearInterval(this.interval);
    },

    computed: {
        filterBills() {
            return this.allBills.filter((b) => b.bill_status < 6 && b.bill_status > 0);
        },
    },

    methods: {
        async getAllBills() {
            this.allBills = (await axios.get('/billstatus')).data;
        },

        async nextStatusBtn(id) {
            await axios.put('/billstatus/' + id);
            this.getAllBills();
        },

        async paidBtn(id) {
            await axios.put('/billstatus/paid/' + id);
            this.getAllBills();
        },

        async cancelBtn(id) {
            await axios.put('/billstatus/cancel/' + id);
            this.getAllBills();
        },

        handleLogout() {
            alert("Logging out...");
        },

        autoUpdate() {
            this.interval = setInterval(() => {
                this.getAllBills();
            }, 1000);
        }
    }
});
