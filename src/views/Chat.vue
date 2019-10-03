<template >
    <div class="Chat container" >
        <h1 class="white-text center-align" >Zeal Fire Chat</h1 >

        <div class="card" >
            <div class="card-content" >
                <ul class="messages" >
                    <li >
                        <span class="brown-text text-lighten-2" >Name</span >
                        <span class="grey-text text-darken-3" >message</span >
                        <div class="grey-text time" >time</div >
                    </li >
                </ul >
            </div >

            <div class="card-action" >
                <div class="input-field " >
                    <i class="material-icons prefix brown-text text-darken-1" >chat</i >
                    <input autofocus v-model="name" id="name" type="text" >
                    <label for="name" >Enter Message</label >
                    <p v-if="message" class="red-text" >{{message}}</p >
                </div >
            </div >

        </div >


    </div >
</template >

<script >
    export default {
        name : "Chat",
        props: {
            name: String
        }
    }
</script >

<style scoped >
.Chat > h2{
    margin-bottom: 3rem;
}
.messages li> span:first-child {
    font-weight: 700;
}
.Chat .messages span {
    font-size: 1.5rem;
    margin-right: .5rem;
}

.time {
    font-weight: 700;
    letter-spacing: .06rem;
}
</style >
