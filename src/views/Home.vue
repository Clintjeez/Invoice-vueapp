<template>
  <div class="container home">
    <!-- Header -->
    <div class="flex header">
      <div class="flex left flex-column">
        <h1>Invoice</h1>
        <span>There are 4 total invoices</span>
      </div>
      <div class="flex right">
        <div @click="toggleFilterMenu" class="flex filter">
          <span>Filter by status</span>
          <img src="@/assets/icon-arrow-down.svg" alt="" />
          <ul v-show="filterMenu" class="filter-menu">
            <li>Draft</li>
            <li>Pending</li>
            <li>Paid</li>
            <li>Clear Filter</li>
          </ul>
        </div>
        <div @click="newInvoice" class="flex button">
          <div class="flex inner-button">
            <img src="@/assets/icon-plus.svg" alt="" />
          </div>
          <span>New Invoice</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      filterMenu: null,
    };
  },
  components: {},
  methods: {
    ...mapMutations(["TOGGLE_INVOICE"]),
    newInvoice() {
      this.TOGGLE_INVOICE();
    },
    toggleFilterMenu() {
      this.filterMenu = !this.filterMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  color: #fff;
}
.header {
  margin-bottom: 65px;

  .left,
  .right {
    flex: 1;
  }

  .right {
    justify-content: flex-end;
    align-items: center;

    .button,
    .filter {
      align-items: center;

      span {
        font-size: 12px;
      }
    }

    .filter {
      position: relative;
      margin-right: 40px;
      cursor: pointer;

      img {
        margin-left: 12px;
        width: 9px;
        height: 5px;
      }

      .filter-menu {
        width: 120px;
        position: absolute;
        top: 25px;
        list-style: none;
        background-color: #1e2139;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06);

        li {
          cursor: pointer;
          font-size: 12px;
          padding: 10px 20px;

          &:hover {
            color: #1e2139;
            background-color: #fff;
          }
        }
      }
    }
    .button {
      padding: 8px 10px;
      background-color: #7c5dfa;
      border-radius: 40px;

      .inner-button {
        margin-right: 8px;
        border-radius: 50%;
        padding: 8px;
        align-items: center;
        justify-content: center;
        background-color: #fff;

        img {
          width: 10px;
          height: 10px;
        }
      }
    }
  }
}
</style>
