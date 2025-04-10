<script lang="ts">
  import { currentUser } from '$lib/stores/user';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let user: { id: number; username: string } | null = null;

  onMount(() => {
    const unsubscribe = currentUser.subscribe((value) => {
      user = value;
      if (!value) {
        goto('/login');
      }
    });

    return unsubscribe;
  });
</script>

<svelte:head>
  <link rel="stylesheet" href="/node_modules/bootstrap/dist/css/bootstrap.min.css" />
</svelte:head>

{#if user}
  <div class="container d-flex align-items-center justify-content-center min-vh-100">
    <div class="card shadow p-4 w-100" style="max-width: 600px;">
      <h1 class="text-center text-primary mb-3 fw-bold">🎉 Chào mừng, {user.username}!</h1>
      <p class="text-center text-muted">Bạn đã đăng nhập thành công vào hệ thống.</p>
    </div>
  </div>
{/if}
