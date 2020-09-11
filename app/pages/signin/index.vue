<template>
  <v-container fluid class="fill-height">
    <v-row>
      <v-col cols="12" xs="12" sm="6" md="5" lg="4" class="ma-auto">
        <v-card class="px-8 pt-6 pb-12" outlined>
          <v-card-title class="text-center">VueTube</v-card-title>
          <v-card-subtitle class="mb-5">Sign in</v-card-subtitle>
          <client-only>
            <v-card-text>
              <ValidationObserver ref="form" v-slot="{ handleSubmit, reset }">
                <form @submit.prevent="handleSubmit(signin)" @reset.prevent="reset">
                  <ValidationProvider v-slot="{ errors }" name="Email" rules="required|email">
                    <p class="ma-0 text-right">
                      <v-btn text small class="pl-0 text-capitalize" color="primary" to="signup">Create account</v-btn>
                    </p>
                    <v-text-field v-model="email" :error-messages="errors" label="Email" outlined></v-text-field>
                  </ValidationProvider>
                  <ValidationProvider v-slot="{ errors }" name="Password" rules="required">
                    <p class="ma-0 text-right">
                      <v-btn text small class="pl-0 text-capitalize" color="primary" href="true"
                        >Forget Password?</v-btn
                      >
                    </p>
                    <v-text-field
                      v-model="password"
                      type="password"
                      :error-messages="errors"
                      label="Password"
                      outlined
                    ></v-text-field>
                  </ValidationProvider>
                  <div class="mt-6 d-flex justify-space-between">
                    <v-checkbox v-model="remember" color="primary" label="Remember Me"></v-checkbox>
                    <v-btn type="submit" class="primary" depressed>Sign in</v-btn>
                  </div>
                </form>
              </ValidationObserver>
            </v-card-text>
          </client-only>
        </v-card>
      </v-col>
    </v-row>

    <v-snackbar v-model="alertShow" :timeout="3000">
      {{ alertMsg }}
      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="alertShow = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  layout: 'empty',
  name: 'SignIn',
  data: () => ({
    email: 'kirito@gmail.com',
    password: '123456',
    remember: true,
    alertMsg: '',
    alertShow: false,
  }),
  methods: {
    signin() {
      this.$store.dispatch({
        type: 'user/signIn',
        payload: {
          email: this.email,
          password: this.password,
          remember: this.remember,
        },
        callback: (res) => {
          if (res && res.code === 200) {
            this.$router.push('/');
          } else {
            this.alertMsg = res.msg;
            this.alertShow = true;
          }
        },
      });
    },
  },
};
</script>
