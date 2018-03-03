<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <!-- <paper-table :title="table1.title" :sub-title="table1.subTitle" :data="array.data" :columns="table1.columns">

          </paper-table> -->
          <table style="width:100%">
            <div>
              <input v-model=Name placeholder="Product Name">
              <p>{{ message }}</p>
              <input v-model=Price placeholder="Price">
                <p></p>
              <input v-model=SellerName placeholder="Sellername">
              <button v-on:click="AddToApi"> add product</button>

            </div>
  <tr>
    <th>id</th>
    <th>name</th>
    <th>price</th>
    <th>updatedat</th>
    <th>createdat</th>
    <th>sellername</th>
    <th>action</th>

  </tr>
  <tr v-for="x in array.data">
    <td>{{x._id}}</td>
    <td>{{x.name}}</td>
    <td>{{x.price}}</td>
    <td>{{x.updatedAt}}</td>
    <td>{{x.createdAt}}</td>
    <td>{{x.sellerid}}</td>
    <td>{{x.action}}
      <input v-model=del placeholder="Edit or Delete">
    <button v-on:click="Update"> Edit</button>
    <button v-on:click="Delete"> Delete</button>
  </td>
  </tr>
</table>

        </div>
      </div>

    </div>
</template>
<script>

import axios from 'axios'
import PaperTable from 'components/UIComponents/PaperTable.vue'
const tableColumns = ['Id', 'Name', 'Price', 'CreatedAt', 'UpdatedAt', 'SellerName', 'Action']
const tableData = [{
  id: 1,
  name: 'Dakota Rice',
  price: '$3',
  createdat: '15/2/2018',
  updatedat: '16/2/2018',
  sellername: 'Mo'
},
{
  id: 2,
  name: 'Minerva Hooper',
  price: '$36.738',
  createdat: '15/2/2018',
  updatedat: '16/2/2018',
  sellername: 'Mo'
}]
export default {
  components: {
    PaperTable
  },
  data () {
    return {
      table1: {
        title: 'Stripped Table',
        subTitle: 'Here is a subtitle for this table',
        columns: [...tableColumns],
        data: [...tableData]
      },
      table2: {
        title: 'Table on Plain Background',
        subTitle: 'Here is a subtitle for this table',
        columns: [...tableColumns],
        data: [...tableData]
      },
      array: [],
      Name: '',
      Price: '',
      Sellername: ''
    }
  },
  created () {
    axios.get('http://localhost:3000/api/product/getProducts').then((response) => {
      this.array = response.data
    })
  },
  methods: {
    AddToApi () {
      let newtable = {
        tablecolumns: this.table1.tableColumns,
        tabledata: this.table1.tableData
      }
      axios.post('http://localhost:3000/api/product/createProduct', {
        name: this.Name,
        price: this.Price,
        sellername: this.SellerName
      }).then((response) => {
        console.log(response)
      })
    .catch((error) => {
      console.log(error)
    })
    },
    Delete () {
      axios.delete('http://localhost:3000/api/product/deleteProduct/' + this.del)
      .then((response) => {
        console.log(response)
      })
   . catch((error) => {
     console.log(error)
   })
    },
    Update () {
      axios.patch('http://localhost:3000/api/product/updateProduct/' + this.del, {
        name: this.Name,
        price: this.Price
      }).then((response) => {
        console.log(response)
      })
   . catch((error) => {
     console.log(error)
   })
    }
  }
}

</script>
<style>

</style>
