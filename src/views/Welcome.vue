<template >
    <div class="Welcome" >
        <div class="center-align " >
            <div class="row" >
                <div class="col s12 m6 offset-m3 l4 offset-l4" >
                    <div class="card" >
                        <h2 class="title teal-text" >
                            Welcome
                        </h2 >
                        <div class="card-content" >
                            <form @submit.prevent="onSubmitHandler()" class="" >


                                <div class="input-field " >
                                    <i class="material-icons prefix teal-text" >account_circle</i >
                                    <input v-model="name" id="name" type="text"  >
                                    <label for="name" >Enter Name</label >
                                    <p v-if="message" class="red-text" >{{message}}</p >
                                </div >

                                <button type="submit" class="btn " @click.prevent="onSubmitHandler()" >
                                    Enter Chat
                                    <i class="material-icons right" >chat</i >
                                </button >

                            </form >
                        </div >
                    </div >
                </div >
            </div >


        </div >
    </div >
</template >

<script >
    export default {
        name   : "Welcome",
        data()
        {
            return {
                name   : '',
                message: null
            }
        },
        methods: {

            onSubmitHandler()
            {
                if (this.name)
                {
                    this.$router.push({name:'chat',params:{name:this.name}})
                }
                else
                {
                    this.message = "please enter a name";
                }
            }
        }
    }
</script >

<style lang="scss" >
    .Welcome {
        .title {
            margin-top: 2rem;
            margin-bottom: 0rem;
        }


        .card {
            margin-top: 10rem;
            padding-top: 1px;
        }

        button {
            margin-top: 2rem;
        }

        /*button:hover{*/
        /*    color: white !important;*/
        /*}*/
    }
</style >
