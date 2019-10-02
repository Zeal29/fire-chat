<template>
    <router-view/>
</template>

<style lang="scss">
body{

  background: url("https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");


  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}



/* label color */
.input-field label {
    /*color: #6d4c41 !important;*/
}
/* label focus color */
.input-field input[type=text]:focus + label {
    color: #6d4c41 !important;
}
/* label underline focus color */
.input-field input[type=text]:focus {
    border-bottom: 1px solid #6d4c41!important;
    box-shadow: 0 1px 0 0 #6d4c41 !important;
}
/* valid color */
.input-field input[type=text].valid {
    border-bottom: 1px solid #6d4c41 !important;
    box-shadow: 0 1px 0 0 #6d4c41!important;
}
/* invalid color */
.input-field input[type=text].invalid {
    border-bottom: 1px solid #6d040b !important;
    box-shadow: 0 1px 0 0 #6d040b !important;
}
/* icon prefix focus color */
.input-field .prefix.active {
    color:#6d4c41 !important;
}


</style>
