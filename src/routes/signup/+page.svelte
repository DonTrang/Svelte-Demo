<script lang="ts">
  import { goto } from '$app/navigation';
  import { currentUser } from '$lib/stores/user';

  let username = '';
  let email = '';
  let password = '';
  let confirmPassword = '';
  let error = '';
  let success = '';

  async function handleSignup() {
    error = '';
    success = '';

    // Kiểm tra xác nhận mật khẩu
    if (password !== confirmPassword) {
      error = '❗ Mật khẩu không khớp';
      return;
    }

    const res = await fetch('http://localhost/sveltekit-api/signup.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    });

    const data = await res.json();

    if (data.success) {
      currentUser.set(data.user);
      goto('/home');
    } else {
      error = data.message;
    }
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="/node_modules/bootstrap/dist/css/bootstrap.min.css" />
</svelte:head>

<div class="container d-flex justify-content-center align-items-center min-vh-100">
  <div class="w-100" style="max-width: 400px;">
    <div class="text-center mb-4">
      <h2 class="fw-bold">Đăng ký</h2>
    </div>

    <div class="mb-3">
      <label for="username" class="form-label"></label>
      <input
        id="username"
        type="text"
        class="form-control"
        placeholder="Tên đăng nhập"
        bind:value={username}
      />
    </div>

    <div class="mb-3">
      <label for="email" class="form-label"></label>
      <input
        id="email"
        type="email"
        class="form-control"
        placeholder="example@email.com"
        bind:value={email}
      />
    </div>

    <div class="mb-3">
      <label for="password" class="form-label"></label>
      <input
        id="password"
        type="password"
        class="form-control"
        placeholder="Nhập mật khẩu"
        bind:value={password}
      />
    </div>

    <div class="mb-3">
      <label for="confirmPassword" class="form-label"></label>
      <input
        id="confirmPassword"
        type="password"
        class="form-control"
        placeholder="Xác nhận mật khẩu"
        bind:value={confirmPassword}
      />
    </div>

    <button class="btn btn-primary w-100 fw-semibold" on:click={handleSignup}>
      Đăng ký
    </button>

    {#if error}
      <div class="alert alert-danger mt-3 p-2 text-center">{error}</div>
    {/if}

    <div class="text-center mt-3">
      <a href="/login" class="text-primary text-decoration-none">Đã có tài khoản? Đăng nhập</a>
    </div>
  </div>
</div>
