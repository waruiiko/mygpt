<template>
  <h1>ChatMe</h1>
  <input v-model="myMessage" type="text" placeholder="myMessage" />
  <el-button @click="sayHello" type="primary">sayHello</el-button>
  <div>
    <pre>
      <h2>{{myResponse}}</h2>
    </pre>
  </div>
  <!-- <div>
    <input v-model="user.name" type="text" placeholder="Name" />
    <input v-model="user.email" type="email" placeholder="Email" />
    <input v-model="user.password" type="password" placeholder="Password" />
    <button @click="saveUser">Save User</button>
  </div> -->
</template>

<script>
import { reactive, ref } from "vue";
import api from "../boot/api";

export default {
  setup() {
    const user = reactive({
      name: "",
      email: "",
      password: "",
    });

    const saveUser = () => {
      api
        .post("/users", user)
        .then((response) => {
          console.log(response.data); // 新用户的数据
          // 其他处理
        })
        .catch((error) => {
          console.error(error.response.data); // 错误消息
          // 其他处理
        });
    };
    const myMessage = ref("");
    const myResponse = ref("");
    
    async function sayHello() {
      console.log("sayHello");
      try {
        const res = await api.post("/completions", {
          message: myMessage.value,
        });
        // const data = res.data;
        console.log(res)
        // const jsonData = JSON.parse(res.data);
        // const chatResult = jsonData.data;
        // console.log(chatResult)
        // const url = new URL("/api/completions","http://localhost:3100")
        // url.searchParams.set("prompt",myMessage.value)
        // // console.log(url)

        // const es = new EventSource(url)
        // es.onmessage = e =>{
        //   console.log(e.data);
        //   // const data = JSON.parse(e.data);
        // }
//http://localhost:3100/api/completions
      } catch (error) {
        console.error(error);
        myResponse.value = "An error occurred";
      }
    }

    return {
      user,
      saveUser,
      sayHello,
      myMessage,
      myResponse,
    };
  },
};
</script>
