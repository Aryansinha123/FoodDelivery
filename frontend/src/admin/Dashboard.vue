<template>
    <div :class="['admin-container', theme]">
        <!-- Sidebar -->
        <div class="sidebar">
            <ul>
                <li :class="{ active: activeMenu === 'dashboard' }" @click="setActive('dashboard')">
                    <i class="fas fa-th-large"></i> Dashboard
                </li>
                <li :class="{ active: activeMenu === 'store' }" @click="setActive('store')">
                    <i class="fas fa-store"></i> My Store
                </li>
                <li :class="{ active: activeMenu === 'analytics' }" @click="setActive('analytics')">
                    <i class="fas fa-chart-line"></i> Analytics
                </li>
                <li :class="{ active: activeMenu === 'messages' }" @click="setActive('messages')">
                    <i class="fas fa-comments"></i> Messages
                </li>
                <li :class="{ active: activeMenu === 'team' }" @click="setActive('team')">
                    <i class="fas fa-users"></i> Team
                </li>
                <li :class="{ active: activeMenu === 'manage-menu' }" @click="setActive('manage-menu')">
                    <i class="fas fa-utensils"></i> Manage Menu
                </li>
                <li class="settings" :class="{ active: activeMenu === 'settings' }" @click="setActive('settings')">
                    <i class="fas fa-cog"></i> Settings
                </li>
                <li class="logout" @click="handleLogout">
                    <i class="fas fa-sign-out-alt"></i> Logout
                </li>
            </ul>
        </div>

        <!-- Content Area -->
        <div class="content">
            <div class="d-flex justify-content-between">
                <h1>Hello Admin!</h1>
                <div>
                    <button class="btn theme-toggle" @click="toggleTheme">{{ theme === 'light' ? 'Dark Mode' : 'Light Mode' }}</button>
                    <button class="btn logout-btn" @click="handleLogout()">Logout</button>
                </div>
            </div>

            <div class="table-responsive">
                <table class="table colored-header datatable project-list">
                    <thead>
                        <tr>
                            <th>Bill Id</th>
                            <th>User Id</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>When</th>
                            <th>Paid</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(b) in filterBills.slice().reverse()" :key="b.bill_id">
                            <td>{{ b.bill_id }}</td>
                            <td>{{ b.user_id }}</td>
                            <td>{{ b.bill_phone }}</td>
                            <td>{{ b.bill_address }}</td>
                            <td>{{ b.bill_when }}</td>
                            <td>{{ b.bill_paid }}</td>
                            <td>${{ b.bill_total }}</td>
                            <td>{{ avaiableStatus[b.bill_status] }}</td>
                            <td>
                                <button v-if="b.bill_status < 5" class="action-btn" @click="nextStatusBtn(b.bill_id)">
                                    {{ avaiableStatus[b.bill_status + 1] }}
                                </button>

                                <button v-if="b.bill_status == 1" class="cancel-btn" @click="cancelBtn(b.bill_id)">
                                    Cancel
                                </button>

                                <button v-else-if="b.bill_status == 5 && b.bill_paid == 'false'" class="paid-btn"
                                    @click="paidBtn(b.bill_id)">
                                    Paid
                                </button>

                                <button v-else-if="b.bill_status == 5 && b.bill_paid == 'true'" class="action-btn"
                                    @click="nextStatusBtn(b.bill_id)">
                                    {{ avaiableStatus[b.bill_status + 1] }}
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";

export default {
    name: 'Dashboard',

    data() {
        return {
            avaiableStatus: ["cancel", "confirmed", "preparing", "checking", "delivering", "delivered", "completed"],
            allBills: [],
            showOrderDetails: false,
            sendId: undefined,
            interval: "",
            activeMenu: "dashboard",
            theme: 'light'
        }
    },

    mounted() {
        this.getAllBills();
        if (!this.admin) {
            this.$router.push("/");
        }
        this.autoUpdate();
    },

    beforeUnmount() {
        clearInterval(this.interval);
    },

    computed: {
        ...mapState(["allFoods", "admin"]),

        filterBills() {
            return this.allBills.filter((b) => b.bill_status < 6 && b.bill_status > 0);
        },
    },

    methods: {
        ...mapMutations(["setAdmin"]),

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
            this.setAdmin("");
        },

        autoUpdate() {
            this.interval = setInterval(() => {
                this.getAllBills();
            }, 1000);
        },

        setActive(menu) {
            this.activeMenu = menu;
        },
        toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        document.body.classList.toggle('dark', this.theme === 'dark');
    }
    },
};
</script>

<style scoped>
/* Sidebar */
.sidebar {
    width: 220px;
    height: 100vh;
    background: #f8f9fa;
    padding-top: 20px;
    position: fixed;
    left: 0;
    top: 0;
    box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.1);
}

.sidebar ul {
    list-style: none;
    padding: 0;
}

.sidebar ul li {
    padding: 12px 20px;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    transition: 0.3s;
}

.sidebar ul li i {
    font-size: 18px;
}

.sidebar ul li:hover {
    background: #e9ecef;
}

.sidebar ul li.active {
    background: #e9ecef;
    color: #007bff;
    font-weight: bold;
    border-radius: 10px;
}

.sidebar ul .settings {
    margin-top: 20px;
}

.sidebar ul .logout {
    color: red;
    font-weight: bold;
}

/* Content */
.content {
    margin-left: 240px;
    padding: 20px;
}

/* Table */
.project-list>tbody>tr>td {
    padding: 12px 8px;
}

.project-list>tbody>tr>td .avatar {
    width: 22px;
    border: 1px solid #CCC;
}

.table-responsive {
    margin-top: 8vh;
}

/* Buttons */
.action-btn, .cancel-btn, .paid-btn {
    width: 100px;
    height: 25px;
    color: white;
    text-transform: capitalize;
}

.action-btn {
    background-color: #0da9ef;
    margin-right: 10px;
}

.cancel-btn, .paid-btn {
    background-color: red;
}

.action-btn:hover {
    background-color: #27ae60;
}

/* Logout Button */
.logout-btn {
    background: #ff4d4d;
    color: white;
    padding: 10px 15px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}


/* Light Theme (default) */
.admin-container {
    background-color: white;
    color: black;
}
/* Dark Theme */
.admin-container.dark {
    background-color: #1e1e1e;
    color: white;
}

/* Sidebar */
.sidebar {
    background: #f8f9fa;
}

.sidebar.dark {
    background: #333;
}

.sidebar.dark ul li {
    color: white;
}

.sidebar.dark ul li:hover,
.sidebar.dark ul li.active {
    background: #444;
}

/* Content */
.content.dark {
    background: #222;
}

/* Buttons */
.theme-toggle {
    background: black;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    margin-right: 10px;
}

.theme-toggle.dark {
    background: white;
    color: black;
}


.sidebar {
    background: #f8f9fa;
    color: black;
}

.content {
    background: white;
    color: black;
}

/* Dark Theme */
body.dark {
    background-color: #121212;
    color: white;
}

body.dark .admin-container {
    background-color: #1e1e1e;
    color: white;
}

body.dark .sidebar {
    background: #222;
    color: white;
}

body.dark .sidebar ul li {
    color: white;
}

body.dark .sidebar ul li:hover,
body.dark .sidebar ul li.active {
    background: #444;
}

body.dark .content {
    background: #181818;
    color: white;
}

/* Buttons */


body.dark .theme-toggle {
    background: white;
    color: black;
}
/* Default (Light Mode) */
.table {
    background-color: white;
    color: black;
}
.table th,
.table td {
    color: black;
}

/* Dark Mode */
body.dark .table {
    background-color: #222;
    color: white;
}
body.dark .table th,
body.dark .table td {
    color: white;
}
body.dark .table thead {
    background: #333;
}
body.dark .table tbody tr:hover {
    background: #444;
}

</style>
