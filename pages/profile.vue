<template>
    <div class="h-screen w-screen flex flex-col items-center justify-center">
        <h1 class="text-2xl text-white font-bold mb-4">Profile</h1>
        <hanko-profile class="hankoComponent"></hanko-profile>

        <button @click="logout" class="mt-4 px-2 py-1 bg-blue-500 rounded-lg text-white font-medium">Logout</button>
    </div>
</template>

<script setup lang="ts">
const router = useRouter();
const hanko = useHanko()

function logout() {
  hanko!.user.logout()
  router.push({ path: "/login" });

}

</script>

<style>
.hankoComponent::part(container) {
    padding: 2rem;
    border-radius: 14px;
}

.hankoComponent::part(hanko_dropdown):hover{
    background-color: #ffffff57;
}


hanko-auth, hanko-profile {
    /* Color Scheme */
    --color: #f1f1f1;

    --brand-color-shade-1: #6b84fb;
    --brand-contrast-color: white;

    --background-color: #ffffff21;

}

</style>