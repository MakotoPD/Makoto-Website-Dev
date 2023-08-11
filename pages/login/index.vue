<template>
    <div>
      <div class="min-h-[40rem] flex flex-col items-center justify-center">
        <hanko-events @onAuthFlowCompleted="redirectAfterLogin" />
        <hanko-auth  id="hankoAuth"/>
      </div>
    </div>
</template>

<script setup lang="ts">

const router = useRouter();

const redirectAfterLogin = () => {
  // successfully logged in, redirect to a page in your application
  router.push({ path: "/profile" });
};

definePageMeta({
  middleware: ['hanko-logged-out']
})

</script>

<style>
#hankoAuth::part(container) {
  padding: 2rem;
  border-radius: 14px;
}


#hankoAuth::part(secondary-button):hover {
  color: black;
}





hanko-auth, hanko-profile {
    /* Color Scheme */
    --color: #f1f1f1;

    --brand-color-shade-1: #6b84fb;
    --brand-contrast-color: white;

    --background-color: #ffffff2d;

}

</style>