<template lang="html">
  <div class="">
    <section id="login">
      <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <div class="form-wrap">
                  <img class ="logo" src="http://webneel.com/sites/default/files/images/manual/logo/4-house-logo.gif" alt="">
                  <h1>Welcome to RumahkuDiJual-Jual.com</h1>
                    <p>Please Login to Continue</p>
                      <form role="form" action="javascript:;" method="post" id="login-form" autocomplete="off">
                          <div class="form-group">
                              <label for="email" class="sr-only">Username</label>
                              <input type="text" name="email" id="email" class="form-control" placeholder="Username" v-model="username">
                          </div>
                          <div class="form-group">
                              <label for="key" class="sr-only">Password</label>
                              <input type="password" name="key" id="key" class="form-control" placeholder="Password" v-model="password">
                          </div>
                          <div class="checkbox">
                              <span class="character-checkbox" onclick="showPassword()"></span>
                              <span class="label">Show password</span>
                          </div>
                          <input type="submit" id="btn-login" class="btn btn-custom btn-lg btn-block" value="Log in" v-on:click="login()">
                      </form>
                      <a href="javascript:;" class="forget" data-toggle="modal" data-target=".forget-modal">Sign Up</a>
                      <hr>
                </div>
          </div> <!-- /.col-xs-12 -->
        </div> <!-- /.row -->
      </div> <!-- /.container -->
  </section>

  <div class="modal fade forget-modal" tabindex="-1" role="dialog" aria-labelledby="myForgetModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">
            <span aria-hidden="true">×</span>
            <span class="sr-only">Close</span>
          </button>
          <h4 class="modal-title">Sign Up</h4>
        </div>
        <div class="modal-body">
          <form class="" action="index.html" method="post">
            <p>Username</p>
            <input type="text" name="recovery-email" id="recovery-email" class="form-control" autocomplete="off" v-model="username">
            <p>Password</p>
            <input type="password" name="recovery-email" id="recovery-email" class="form-control" autocomplete="off" v-model="password">
            <p>Email</p>
            <input type="email" name="recovery-email" id="recovery-email" class="form-control" autocomplete="off" v-model="email"><br>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-custom" v-on:click="signup()">Sign Up</button>
            </div>
          </form>		
        </div>      
      </div> <!-- /.modal-content -->
    </div> <!-- /.modal-dialog -->
  </div> <!-- /.modal -->
  </div>  
</template>

<script>
export default {
  name:'login',
  data(){
    return{
      username: "",
      password: "",
      email: ""
    }  
  },
  methods:{
    signup(){
      let self = this;
      axios.post(`http://localhost:3000/user/signup`,{
        username: self.username,
        password: self.password,
        email: self.email 
      })
      .then(response=>{
        alert(`${self.username} Registered!`)
        location.reload()
      })
      .catch(err=>{
        console.log(err);
      })
    },
    login(){
      let self = this;
      axios.post(`http://localhost:3000/user/login`,{
        username: self.username,
        password: self.password
      })
      .then(response=>{
        console.log(`masuk sukses`);
        localStorage.setItem('user',JSON.stringify(response.data))
        this.$store.commit('changeLoginStatus',true)
        this.$router.push('/')
      })
      .catch(err=>{
        alert(`Invalid Username or Password!`)
      })
    }
  },
  created:function(){

  }
}
</script>

<style lang="css">
.logo{
  width:70%;
}
#login {
    padding-top: 50px
}
#login .form-wrap {
    width: 30%;
    margin: 0 auto;
}
#login h1 {
    color: #1fa67b;
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    padding-bottom: 20px;
}
#login .form-group {
    margin-bottom: 25px;
}
#login .checkbox {
    margin-bottom: 20px;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
}
#login .checkbox.show:before {
    content: '\e013';
    color: #1fa67b;
    font-size: 17px;
    margin: 1px 0 0 3px;
    position: absolute;
    pointer-events: none;
    font-family: 'Glyphicons Halflings';
}
#login .checkbox .character-checkbox {
    width: 25px;
    height: 25px;
    cursor: pointer;
    border-radius: 3px;
    border: 1px solid #ccc;
    vertical-align: middle;
    display: inline-block;
}
#login .checkbox .label {
    color: #6d6d6d;
    font-size: 13px;
    font-weight: normal;
}
#login .btn.btn-custom {
    font-size: 14px;
	margin-bottom: 20px;
}
#login .forget {
    font-size: 13px;
	text-align: center;
	display: block;
}

/*    --------------------------------------------------
	:: Inputs & Buttons
	-------------------------------------------------- */
.form-control {
    color: #212121;
}
.btn-custom {
    color: #fff;
	background-color: #1fa67b;
}
.btn-custom:hover,
.btn-custom:focus {
    color: #fff;
}

/*    --------------------------------------------------
    :: Footer
	-------------------------------------------------- */
#footer {
    color: #6d6d6d;
    font-size: 12px;
    text-align: center;
}
#footer p {
    margin-bottom: 0;
}
#footer a {
    color: inherit;
}
</style>
