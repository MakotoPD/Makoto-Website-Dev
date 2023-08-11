<template>
    <div>
      <div class="min-h-[20rem] flex flex-col items-center">
        <p class="text-white mb-2">Login with Google</p>
        <GoogleSignInButton theme="filled_black" text="continue_with" @success="handleSignInSuccess" @error="handleSignInError" />
        <div class="h-24"></div>
        <p @click="test()" class="text-white mt-4">Test GAPI</p>
		  </div>
      <div class="min-h-[20rem] flex flex-col items-center">
        <p class="text-white mb-2">or use hanko</p>
        <hanko-auth />
      </div>
    </div>
</template>

<script setup lang="ts">
import type { CredentialResponse } from "vue3-google-signin";
import { GoogleSignInButton, decodeCredential } from "vue3-google-signin";

let dataUser = {}
useOneTap({
  onSuccess: (response: CredentialResponse) => {
    const { credential } = response;
    const decodedCredential = decodeCredential(credential);
    console.log("User:", decodedCredential);
    dataUser = decodedCredential
    },
  onError: () => console.error("Error with One Tap Login"),
  // options
});

const handleSignInSuccess = (response: CredentialResponse) => {
  const { credential } = response;
  const decodedCredential = decodeCredential(credential);
  console.log("User:", decodedCredential);
  dataUser = decodedCredential
};

const handleSignInError = () => {
  console.error("Signin Failed");
};




useHead({
	meta: [
		{ name: 'google-signin-client_id', content: '910831308616-pqgau9ecq4climsp63qf09flvluo7src.apps.googleusercontent.com'}
	],
	script: [
		{ src:"https://accounts.google.com/gsi/client?onload=test", async: true, defer: true },
    { src:"https://apis.google.com/js/client.js?onload=test", defer: true },
	]
})

let test = () => {
  console.log(gapi);
  console.log(dataUser)
}

</script>